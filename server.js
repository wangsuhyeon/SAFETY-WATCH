'use strict';

/* ============================================================
   Beach Watch — 인증/계정 백엔드 (Express + SQLite)
   ------------------------------------------------------------
   · 정적 사이트(index.html, css/, js/)와 API를 한 포트에서 서빙
   · 계정·세션·접속 기록은 data/beachwatch.db 에 저장된다
   · 비밀번호/보안질문 답변은 scrypt 솔트 해시로만 보관
   ============================================================ */

const path = require('path');
const fs = require('fs');
const crypto = require('crypto');
const express = require('express');
const { DatabaseSync } = require('node:sqlite');

const ROOT = __dirname;
const PORT = Number(process.env.PORT) || 3000;
const DATA_DIR = path.join(ROOT, 'data');
const DB_FILE = process.env.BW_DB ? path.resolve(process.env.BW_DB) : path.join(DATA_DIR, 'beachwatch.db');
const APP_ORIGINS = String(process.env.APP_ORIGIN || '')
  .split(',').map(origin => origin.trim()).filter(Boolean);

const SESSION_TTL_MS = 1000 * 60 * 60 * 24 * 7;   // 7일
const MAX_FAILED_ATTEMPTS = 5;                     // 연속 실패 잠금 기준
const LOCK_MS = 1000 * 60 * 15;                    // 15분 잠금
const LOGIN_WINDOW_MS = 1000 * 60 * 10;            // IP당 로그인 시도 창
const LOGIN_MAX_PER_WINDOW = 20;
const COOKIE_NAME = 'bw_session';

/* ── 데이터베이스 ─────────────────────────────────────────── */

fs.mkdirSync(path.dirname(DB_FILE), { recursive: true });
const db = new DatabaseSync(DB_FILE);

/* 같은 DB 파일을 동시에 여는 제2 프로세스(테스트 서버·두 번째 서버·동기화 도구)가
   쓰기 잠금을 잡고 있는 동안 최대 5초 기다린다.
   node:sqlite 의 busy_timeout 기본값은 0이라 잠금 충돌이 즉시
   "database is locked" 예외로 올라왔고, 이 예외가
   회원가입을 가로막는 500 서버 오류로 이어졌다. */
const busyTimeoutMs = 5000;
db.exec('PRAGMA busy_timeout = ' + busyTimeoutMs);

db.exec(`
  PRAGMA journal_mode = WAL;
  PRAGMA foreign_keys = ON;

  CREATE TABLE IF NOT EXISTS users (
    id             INTEGER PRIMARY KEY AUTOINCREMENT,
    name           TEXT    NOT NULL,
    email          TEXT    NOT NULL UNIQUE COLLATE NOCASE,
    password_hash  TEXT    NOT NULL,
    password_salt  TEXT    NOT NULL,
    question       TEXT    NOT NULL,
    answer_hash    TEXT    NOT NULL,
    answer_salt    TEXT    NOT NULL,
    role           TEXT    NOT NULL DEFAULT 'operator',
    created_at     TEXT    NOT NULL,
    updated_at     TEXT    NOT NULL,
    last_login_at  TEXT,
    failed_count   INTEGER NOT NULL DEFAULT 0,
    locked_until   TEXT
  );

  CREATE TABLE IF NOT EXISTS sessions (
    token_hash  TEXT    PRIMARY KEY,
    user_id     INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    created_at  TEXT    NOT NULL,
    expires_at  TEXT    NOT NULL,
    user_agent  TEXT
  );

  CREATE TABLE IF NOT EXISTS auth_logs (
    id         INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id    INTEGER,
    email      TEXT,
    action     TEXT    NOT NULL,
    detail     TEXT,
    ip         TEXT,
    user_agent TEXT,
    created_at TEXT    NOT NULL
  );

  CREATE TABLE IF NOT EXISTS events (
    id         INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id    INTEGER,
    email      TEXT,
    kind       TEXT    NOT NULL DEFAULT 'info',
    message    TEXT    NOT NULL,
    camera     TEXT,
    payload    TEXT,
    ip         TEXT,
    created_at TEXT    NOT NULL
  );

  CREATE INDEX IF NOT EXISTS idx_sessions_user   ON sessions(user_id);
  CREATE INDEX IF NOT EXISTS idx_auth_logs_time  ON auth_logs(created_at DESC);
  CREATE INDEX IF NOT EXISTS idx_events_time     ON events(created_at DESC);
  CREATE INDEX IF NOT EXISTS idx_events_user     ON events(user_id, created_at DESC);
`);

/* 이벤트 등급 — 경보성 등급은 통계에서 "경보"로 집계한다. */
const EVENT_KINDS = ['info', 'ok', 'warn', 'watch', 'alert', 'critical', 'error'];
const ALERT_KINDS = ['alert', 'critical', 'error'];

/* ── 유틸 ────────────────────────────────────────────────── */

const nowISO = () => new Date().toISOString();

function sha256(value) {
  return crypto.createHash('sha256').update(String(value)).digest('hex');
}

function hashSecret(secret, salt) {
  const s = salt || crypto.randomBytes(16).toString('hex');
  const hash = crypto.scryptSync(String(secret), s, 64).toString('hex');
  return { salt: s, hash };
}

function verifySecret(secret, salt, expectedHash) {
  try {
    const actual = Buffer.from(hashSecret(secret, salt).hash, 'hex');
    const expected = Buffer.from(String(expectedHash), 'hex');
    return actual.length === expected.length && crypto.timingSafeEqual(actual, expected);
  } catch (e) {
    return false;
  }
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function publicUser(row) {
  if (!row) return null;
  return {
    id: row.id,
    name: row.name,
    email: row.email,
    role: row.role,
    question: row.question,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
    lastLoginAt: row.last_login_at,
    lockedUntil: row.locked_until
  };
}

function fail(res, status, code, message) {
  return res.status(status).json({ ok: false, code, message });
}

/** SQLite 무제한 제약 위반(중복 가입 등) 판별 — 오류 메시지를 일반화해
    "이미 가입된 이메일입니다" 로 오안내하지 않기 위해 사용한다. */
function isUniqueViolation(err) {
  if (!err) return false;
  const uniqueCodes = [19, 1555, 2067]; // CONSTRAINT / CONSTRAINT_PRIMARYKEY / CONSTRAINT_UNIQUE
  return uniqueCodes.indexOf(err.errcode) >= 0 &&
    /UNIQUE constraint failed/i.test(String(err.message || ''));
}

/** DB에 문자열로 저장된 JSON을 안전하게 되돌린다. */
function safeJSON(text) {
  if (!text) return null;
  try { return JSON.parse(text); } catch (e) { return null; }
}

function clientIP(req) {
  return (req.headers['x-forwarded-for'] || '').split(',')[0].trim()
    || req.socket.remoteAddress || '';
}

function logAuth(action, req, extra) {
  const info = extra || {};
  try {
    db.prepare(
      'INSERT INTO auth_logs (user_id, email, action, detail, ip, user_agent, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)'
    ).run(
      info.userId || null,
      info.email || null,
      action,
      info.detail || null,
      clientIP(req),
      String(req.headers['user-agent'] || '').slice(0, 200),
      nowISO()
    );
  } catch (e) {
    console.error('[auth-log]', e.message);
  }
}

/* ── 세션 ────────────────────────────────────────────────── */

/* 세션 만들기 — DB 기록과 쿠키 발급을 나눠서, 회원가입에서는
   계정 INSERT + 세션 INSERT 를 한 트랜잭션으로 묶어 원자성을 보장한다. */
function insertSession(user, req) {
  const token = crypto.randomBytes(32).toString('base64url');
  const created = Date.now();
  const expires = created + SESSION_TTL_MS;
  db.prepare('INSERT INTO sessions (token_hash, user_id, created_at, expires_at, user_agent) VALUES (?, ?, ?, ?, ?)')
    .run(sha256(token), user.id, new Date(created).toISOString(), new Date(expires).toISOString(),
      String(req.headers['user-agent'] || '').slice(0, 200));
  return token;
}

function setSessionCookie(req, res, token) {
  const origin = req.headers.origin;
  const requestOrigin = (req.secure || req.headers['x-forwarded-proto'] === 'https' ? 'https' : 'http') + '://' + req.get('host');
  const crossSite = Boolean(origin && origin !== requestOrigin && APP_ORIGINS.includes(origin));
  const secure = crossSite || req.secure || req.headers['x-forwarded-proto'] === 'https';
  res.cookie(COOKIE_NAME, token, {
    httpOnly: true,
    sameSite: crossSite ? 'none' : 'lax',
    secure,
    path: '/',
    maxAge: SESSION_TTL_MS
  });
  return token;
}

function createSession(user, req, res) {
  const token = insertSession(user, req);
  return setSessionCookie(req, res, token);
}

function currentUser(req) {
  const raw = (req.headers.cookie || '').split(';')
    .map(s => s.trim())
    .find(s => s.startsWith(COOKIE_NAME + '='));
  if (!raw) return null;
  const token = decodeURIComponent(raw.slice(COOKIE_NAME.length + 1));
  if (!token) return null;

  const row = db.prepare(
    `SELECT u.*, s.expires_at AS session_expires
       FROM sessions s JOIN users u ON u.id = s.user_id
      WHERE s.token_hash = ?`
  ).get(sha256(token));
  if (!row) return null;
  if (new Date(row.session_expires).getTime() < Date.now()) {
    db.prepare('DELETE FROM sessions WHERE token_hash = ?').run(sha256(token));
    return null;
  }
  return row;
}

function clearSession(req, res) {
  const raw = (req.headers.cookie || '').split(';')
    .map(s => s.trim())
    .find(s => s.startsWith(COOKIE_NAME + '='));
  if (raw) {
    const token = decodeURIComponent(raw.slice(COOKIE_NAME.length + 1));
    db.prepare('DELETE FROM sessions WHERE token_hash = ?').run(sha256(token));
  }
  const origin = req.headers.origin;
  const requestOrigin = (req.secure || req.headers['x-forwarded-proto'] === 'https' ? 'https' : 'http') + '://' + req.get('host');
  const crossSite = Boolean(origin && origin !== requestOrigin && APP_ORIGINS.includes(origin));
  res.clearCookie(COOKIE_NAME, {
    path: '/',
    sameSite: crossSite ? 'none' : 'lax',
    secure: crossSite || req.secure || req.headers['x-forwarded-proto'] === 'https'
  });
}

function requireAuth(req, res, next) {
  const user = currentUser(req);
  if (!user) return fail(res, 401, 'SESSION_REQUIRED', '로그인이 필요합니다.');
  req.user = user;
  next();
}

function requireAdmin(req, res, next) {
  if (req.user.role !== 'admin') {
    return fail(res, 403, 'FORBIDDEN', '관리자만 접근할 수 있습니다.');
  }
  next();
}

/* ── 로그인 시도 제한 (IP 단위) ─────────────────────────── */

const attempts = new Map();

function loginRateLimit(req, res, next) {
  const ip = clientIP(req);
  const now = Date.now();
  const bucket = attempts.get(ip);
  if (!bucket || now > bucket.resetAt) {
    attempts.set(ip, { count: 1, resetAt: now + LOGIN_WINDOW_MS });
    return next();
  }
  bucket.count += 1;
  if (bucket.count > LOGIN_MAX_PER_WINDOW) {
    logAuth('rate_limited', req, { detail: 'IP 로그인 시도 초과' });
    return fail(res, 429, 'RATE_LIMIT', '시도가 너무 많습니다. 잠시 후 다시 시도하세요.');
  }
  next();
}

/* ── 이벤트 저장 제한 (IP 단위) ─────────────────────────── */

const eventBuckets = new Map();

function eventRateLimit(req, res, next) {
  const ip = clientIP(req);
  const now = Date.now();
  const bucket = eventBuckets.get(ip);
  if (!bucket || now > bucket.resetAt) {
    eventBuckets.set(ip, { count: 1, resetAt: now + 60000 });
    return next();
  }
  bucket.count += 1;
  if (bucket.count > 240) {
    return fail(res, 429, 'RATE_LIMIT', '이벤트 저장 요청이 너무 많습니다.');
  }
  next();
}

/** 외부에서 들어온 이벤트를 DB에 넣어도 되는 형태로 정리한다. */
function sanitizeEvent(input) {
  if (!input || typeof input !== 'object') return null;
  const message = String(input.message || '').trim().slice(0, 500);
  if (!message) return null;

  const kind = EVENT_KINDS.includes(String(input.kind)) ? String(input.kind) : 'info';
  const payload = {};
  Object.keys(input).forEach(key => {
    if (['message', 'kind', 'at', 'label', 'snapshot', 'image', 'dataUrl'].includes(key)) return;
    const value = input[key];
    if (value === null || value === undefined) return;
    if (typeof value === 'string') payload[key] = value.slice(0, 300);
    else if (typeof value === 'number' || typeof value === 'boolean') payload[key] = value;
  });

  let payloadText = JSON.stringify(payload);
  if (payloadText.length > 1500) payloadText = JSON.stringify({ truncated: true });

  return {
    message,
    kind,
    camera: typeof payload.camera === 'string' ? payload.camera.slice(0, 120) : null,
    payload: payloadText
  };
}



const app = express();
app.disable('x-powered-by');
/* Render, Railway 등 HTTPS 프록시 뒤에서 secure 쿠키를 정확히 발급한다. */
app.set('trust proxy', 1);

/* 별도 정적 홈페이지가 이 API를 사용할 때만 APP_ORIGIN에 등록한 출처를 허용한다.
   출처를 비워 두면 같은 서버에서 제공하는 화면만 API를 호출할 수 있다. */
app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (!origin || !APP_ORIGINS.includes(origin)) return next();
  res.setHeader('Access-Control-Allow-Origin', origin);
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Vary', 'Origin');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  if (req.method === 'OPTIONS') return res.sendStatus(204);
  next();
});
app.use(express.json({ limit: '16kb' }));

/* 1) API ─────────────────────────────────────────────────── */

app.get('/api/health', (req, res) => {
  const users = db.prepare('SELECT COUNT(*) AS n FROM users').get().n;
  res.json({ ok: true, db: 'sqlite', file: path.relative(ROOT, DB_FILE), users });
});

/* 회원가입 */
app.post('/api/auth/signup', (req, res) => {
  const { name, email, password, passwordConfirm, question, answer } = req.body || {};

  if (!name || String(name).trim().length < 2) return fail(res, 400, 'INVALID_NAME', '이름은 2자 이상 입력하세요.');
  if (!email || !EMAIL_RE.test(String(email))) return fail(res, 400, 'INVALID_EMAIL', '올바른 이메일 주소를 입력하세요.');
  if (!password || String(password).length < 8) return fail(res, 400, 'WEAK_PASSWORD', '비밀번호는 8자 이상이어야 합니다.');
  if (passwordConfirm !== undefined && password !== passwordConfirm) {
    return fail(res, 400, 'PASSWORD_MISMATCH', '비밀번호가 서로 다릅니다.');
  }
  if (!question || !String(question).trim()) return fail(res, 400, 'INVALID_QUESTION', '보안 질문을 선택하세요.');
  if (!answer || String(answer).trim().length < 2) return fail(res, 400, 'INVALID_ANSWER', '보안 질문 답변을 입력하세요.');

  const normalizedEmail = String(email).trim();
  const exists = db.prepare('SELECT id FROM users WHERE email = ?').get(normalizedEmail);
  if (exists) return fail(res, 409, 'EMAIL_EXISTS', '이미 가입된 이메일입니다.');

  const pw = hashSecret(password);
  const ans = hashSecret(String(answer).trim().toLowerCase());
  const count = db.prepare('SELECT COUNT(*) AS n FROM users').get().n;
  const ts = nowISO();

  /* 계정 INSERT + 세션 INSERT 를 한 트랜잭션으로 처리한다.
     (중간에 새면 "계정만 남는" 불완전 가입을 막고,
      잠금 충돌·디스크 오류 같은 실제 오류를 중복 가입으로 오안내하지 않는다) */
  let user;
  let token;
  const txStart = Date.now();
  let stage = 'begin';
  try {
    db.exec('BEGIN IMMEDIATE');
    stage = 'insert';
    try {
      const info = db.prepare(
        `INSERT INTO users (name, email, password_hash, password_salt, question, answer_hash, answer_salt,
                            role, created_at, updated_at)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
      ).run(
        String(name).trim(), normalizedEmail, pw.hash, pw.salt,
        String(question).trim(), ans.hash, ans.salt,
        count === 0 ? 'admin' : 'operator', ts, ts
      );
      stage = 'select-user';
      user = db.prepare('SELECT * FROM users WHERE id = ?').get(Number(info.lastInsertRowid));
      stage = 'insert-session';
      token = insertSession(user, req);
      stage = 'commit';
      db.exec('COMMIT');
    } catch (e) {
      try { db.exec('ROLLBACK'); } catch (e2) { /* 이미 종료된 트랜잭션 */ }
      throw e;
    }
  } catch (e) {
    if (isUniqueViolation(e)) return fail(res, 409, 'EMAIL_EXISTS', '이미 가입된 이메일입니다.');
    const where = String((e && e.stack) || '').split('\n')[1] || '';
    console.error('[signup] stage=' + stage + ' ' + (e && e.message) + ' (errcode=' + (e && e.errcode) +
      ', busy_timeout=' + busyTimeoutMs + ', elapsed=' + (Date.now() - txStart) + 'ms)' + where.trim());
    return fail(res, 500, 'SERVER_ERROR', '서버 오류가 발생했습니다. 잠시 후 다시 시도하세요.');
  }

  setSessionCookie(req, res, token);
  logAuth('signup', req, { userId: user.id, email: user.email, detail: user.role });
  res.status(201).json({ ok: true, user: publicUser(user) });
});

/* 로그인 */
app.post('/api/auth/login', loginRateLimit, (req, res) => {
  const { email, password } = req.body || {};
  if (!email || !password) return fail(res, 400, 'MISSING', '이메일과 비밀번호를 입력하세요.');

  const user = db.prepare('SELECT * FROM users WHERE email = ?').get(String(email).trim());

  if (user && user.locked_until && new Date(user.locked_until).getTime() > Date.now()) {
    logAuth('login_blocked', req, { userId: user.id, email: user.email, detail: '계정 잠금' });
    return fail(res, 423, 'LOCKED', '연속 로그인 실패로 계정이 잠겼습니다. 15분 후 다시 시도하세요.');
  }

  if (!user || !verifySecret(password, user.password_salt, user.password_hash)) {
    if (user) {
      const failed = user.failed_count + 1;
      const locked = failed >= MAX_FAILED_ATTEMPTS
        ? new Date(Date.now() + LOCK_MS).toISOString()
        : null;
      db.prepare('UPDATE users SET failed_count = ?, locked_until = ?, updated_at = ? WHERE id = ?')
        .run(failed, locked, nowISO(), user.id);
      logAuth('login_failed', req, {
        userId: user.id, email: user.email,
        detail: locked ? '잠금 발생 (' + failed + '회 실패)' : failed + '회 실패'
      });
      if (locked) return fail(res, 423, 'LOCKED', '연속 로그인 실패로 계정이 잠겼습니다. 15분 후 다시 시도하세요.');
    } else {
      logAuth('login_failed', req, { email: String(email).trim(), detail: '없는 계정' });
    }
    return fail(res, 401, 'INVALID_CREDENTIALS', '이메일 또는 비밀번호가 올바르지 않습니다.');
  }

  db.prepare('UPDATE users SET failed_count = 0, locked_until = NULL, last_login_at = ?, updated_at = ? WHERE id = ?')
    .run(nowISO(), nowISO(), user.id);

  const fresh = db.prepare('SELECT * FROM users WHERE id = ?').get(user.id);
  createSession(fresh, req, res);
  logAuth('login', req, { userId: fresh.id, email: fresh.email });
  res.json({ ok: true, user: publicUser(fresh) });
});

/* 로그아웃 */
app.post('/api/auth/logout', (req, res) => {
  const user = currentUser(req);
  clearSession(req, res);
  if (user) logAuth('logout', req, { userId: user.id, email: user.email });
  res.json({ ok: true });
});

/* 현재 로그인 정보 */
app.get('/api/auth/me', (req, res) => {
  const user = currentUser(req);
  res.json({ ok: true, user: user ? publicUser(user) : null });
});

/* 비밀번호 변경 (로그인 상태) */
app.post('/api/auth/password/change', requireAuth, (req, res) => {
  const { currentPassword, newPassword } = req.body || {};
  if (!currentPassword || !newPassword) return fail(res, 400, 'MISSING', '현재·새 비밀번호를 모두 입력하세요.');
  if (String(newPassword).length < 8) return fail(res, 400, 'WEAK_PASSWORD', '새 비밀번호는 8자 이상이어야 합니다.');
  if (!verifySecret(currentPassword, req.user.password_salt, req.user.password_hash)) {
    logAuth('password_change_failed', req, { userId: req.user.id, email: req.user.email, detail: '현재 비밀번호 불일치' });
    return fail(res, 401, 'INVALID_CREDENTIALS', '현재 비밀번호가 올바르지 않습니다.');
  }
  if (verifySecret(newPassword, req.user.password_salt, req.user.password_hash)) {
    return fail(res, 400, 'SAME_PASSWORD', '현재 비밀번호와 다른 새 비밀번호를 입력하세요.');
  }

  const pw = hashSecret(newPassword);
  db.prepare('UPDATE users SET password_hash = ?, password_salt = ?, updated_at = ? WHERE id = ?')
    .run(pw.hash, pw.salt, nowISO(), req.user.id);
  logAuth('password_change', req, { userId: req.user.id, email: req.user.email });
  res.json({ ok: true });
});

/* 비밀번호 찾기 1단계 — 보안 질문 반환 */
app.post('/api/auth/reset/question', loginRateLimit, (req, res) => {
  const { email } = req.body || {};
  if (!email || !EMAIL_RE.test(String(email))) return fail(res, 400, 'INVALID_EMAIL', '올바른 이메일 주소를 입력하세요.');

  const user = db.prepare('SELECT id, question FROM users WHERE email = ?').get(String(email).trim());
  if (!user) {
    logAuth('reset_question', req, { email: String(email).trim(), detail: '계정 없음' });
    return fail(res, 404, 'NOT_FOUND', '가입된 이메일이 없습니다.');
  }
  logAuth('reset_question', req, { userId: user.id, email: String(email).trim() });
  res.json({ ok: true, email: String(email).trim(), question: user.question });
});

/* 비밀번호 찾기 2단계 — 보안 질문 답변 확인 후 재설정 */
app.post('/api/auth/reset/verify', loginRateLimit, (req, res) => {
  const { email, answer, newPassword, newpassword } = req.body || {};
  const secret = newPassword || newpassword;

  if (!email || !answer) return fail(res, 400, 'MISSING', '이메일과 보안 질문 답변을 입력하세요.');
  if (!secret || String(secret).length < 8) return fail(res, 400, 'WEAK_PASSWORD', '새 비밀번호는 8자 이상이어야 합니다.');

  const user = db.prepare('SELECT * FROM users WHERE email = ?').get(String(email).trim());
  if (!user) return fail(res, 404, 'NOT_FOUND', '가입된 이메일이 없습니다.');

  if (!verifySecret(String(answer).trim().toLowerCase(), user.answer_salt, user.answer_hash)) {
    logAuth('reset_failed', req, { userId: user.id, email: user.email, detail: '보안 질문 답변 불일치' });
    return fail(res, 401, 'BAD_ANSWER', '보안 질문 답변이 올바르지 않습니다.');
  }

  const pw = hashSecret(secret);
  const ts = nowISO();
  db.prepare('UPDATE users SET password_hash = ?, password_salt = ?, failed_count = 0, locked_until = NULL, updated_at = ? WHERE id = ?')
    .run(pw.hash, pw.salt, ts, user.id);
  db.prepare('DELETE FROM sessions WHERE user_id = ?').run(user.id);
  logAuth('password_reset', req, { userId: user.id, email: user.email, detail: '보안 질문으로 재설정' });
  res.json({ ok: true });
});

/* 계정 목록 (관리자) */
app.get('/api/users', requireAuth, requireAdmin, (req, res) => {
  const rows = db.prepare(
    'SELECT id, name, email, role, question, created_at, updated_at, last_login_at, failed_count, locked_until FROM users ORDER BY id'
  ).all();
  res.json({ ok: true, users: rows.map(r => ({
    id: r.id, name: r.name, email: r.email, role: r.role, question: r.question,
    createdAt: r.created_at, updatedAt: r.updated_at,
    lastLoginAt: r.last_login_at, failedCount: r.failed_count, lockedUntil: r.locked_until
  })) });
});

/* 접속·인증 기록 (관리자) */
app.get('/api/logs', requireAuth, requireAdmin, (req, res) => {
  const limit = Math.min(Number(req.query.limit) || 100, 500);
  const rows = db.prepare('SELECT * FROM auth_logs ORDER BY id DESC LIMIT ?').all(limit);
  res.json({ ok: true, logs: rows.map(r => ({
    id: r.id, userId: r.user_id, email: r.email, action: r.action,
    detail: r.detail, ip: r.ip, createdAt: r.created_at
  })) });
});

/* 감지·경보 이벤트 저장 (로그인 없이도 기록, 로그인 중이면 계정과 연결) */
app.post('/api/events', eventRateLimit, (req, res) => {
  const body = req.body || {};
  const list = Array.isArray(body.events) ? body.events : [body];
  if (!list.length || list.length > 50) {
    return fail(res, 400, 'INVALID_INPUT', '이벤트는 1~50건까지 보낼 수 있습니다.');
  }

  const user = currentUser(req);
  const ts = nowISO();
  const insert = db.prepare(
    'INSERT INTO events (user_id, email, kind, message, camera, payload, ip, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)'
  );
  const ip = clientIP(req);

  let saved = 0;
  let skipped = 0;
  for (const item of list) {
    const event = sanitizeEvent(item);
    if (!event) { skipped += 1; continue; }
    insert.run(
      user ? user.id : null,
      user ? user.email : null,
      event.kind, event.message, event.camera, event.payload, ip,
      item && item.at ? String(item.at).slice(0, 40) : ts
    );
    saved += 1;
  }
  res.status(201).json({ ok: true, saved, skipped });
});

/* 이벤트 조회 — 관리자는 전체, 그 외에는 본인 기록만 */
app.get('/api/events', requireAuth, (req, res) => {
  const limit = Math.min(Number(req.query.limit) || 50, 500);
  const isAdmin = req.user.role === 'admin';
  const rows = isAdmin
    ? db.prepare('SELECT * FROM events ORDER BY id DESC LIMIT ?').all(limit)
    : db.prepare('SELECT * FROM events WHERE user_id = ? ORDER BY id DESC LIMIT ?').all(req.user.id, limit);

  res.json({
    ok: true,
    scope: isAdmin ? 'all' : 'own',
    events: rows.map(r => ({
      id: r.id, userId: r.user_id, email: r.email, kind: r.kind,
      message: r.message, camera: r.camera,
      payload: safeJSON(r.payload), createdAt: r.created_at
    }))
  });
});

/* 이벤트 전체 삭제 (관리자) */
app.post('/api/events/clear', requireAuth, requireAdmin, (req, res) => {
  const before = db.prepare('SELECT COUNT(*) AS n FROM events').get().n;
  db.prepare('DELETE FROM events').run();
  logAuth('events_cleared', req, { userId: req.user.id, email: req.user.email, detail: before + '건 삭제' });
  res.json({ ok: true, deleted: before });
});

/* 대시보드용 요약 */
app.get('/api/stats', requireAuth, (req, res) => {
  const startOfDay = new Date();
  startOfDay.setHours(0, 0, 0, 0);
  const today = startOfDay.toISOString();
  const placeholders = ALERT_KINDS.map(() => '?').join(', ');

  const count = (sql, params) => db.prepare(sql).get(...(params || [])).n;

  res.json({
    ok: true,
    stats: {
      users: count('SELECT COUNT(*) AS n FROM users'),
      loggedInToday: count('SELECT COUNT(*) AS n FROM auth_logs WHERE action = ? AND created_at >= ?', ['login', today]),
      events: count('SELECT COUNT(*) AS n FROM events'),
      alerts: count('SELECT COUNT(*) AS n FROM events WHERE kind IN (' + placeholders + ')', ALERT_KINDS),
      myEvents: count('SELECT COUNT(*) AS n FROM events WHERE user_id = ?', [req.user.id]),
      todayEvents: count('SELECT COUNT(*) AS n FROM events WHERE created_at >= ?', [today]),
      todayAlerts: count('SELECT COUNT(*) AS n FROM events WHERE created_at >= ? AND kind IN (' + placeholders + ')', [today].concat(ALERT_KINDS))
    }
  });
});

/* 2) 정적 파일 (중요한 폴더만 노출) ─────────────────────── */

const BLOCKED = /^\/(data|node_modules|\.git)(\/|$)|^\/(server\.js|package\.json|package-lock\.json)$|\.(db|sqlite|sqlite3|log)$/i;

app.use((req, res, next) => {
  if (BLOCKED.test(req.path)) return res.status(404).type('text/plain').end('not found');
  next();
});

app.use(express.static(ROOT, { index: false, dotfiles: 'deny', fallthrough: true }));

app.get('/', (req, res) => res.sendFile(path.join(ROOT, 'index.html')));

app.use((req, res) => res.status(404).type('text/plain').end('not found'));

/* ── 오류 처리 (JSON) ───────────────────────────────────── */

app.use((err, req, res, next) => {
  if (err && err.type === 'entity.parse.failed') {
    return fail(res, 400, 'BAD_JSON', '요청 본문이 올바르지 않습니다.');
  }
  if (err && err.type === 'entity.too.large') {
    return fail(res, 413, 'PAYLOAD_TOO_LARGE', '요청 본문이 너무 큽니다.');
  }
  console.error('[server]', err);
  fail(res, 500, 'SERVER_ERROR', '서버 오류가 발생했습니다.');
});

app.listen(PORT, () => {
  console.log('Beach Watch server → http://localhost:' + PORT);
  console.log('DB: ' + path.relative(ROOT, DB_FILE));
});
