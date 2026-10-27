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
const db = require('./lib/database');

const ROOT = __dirname;
const PORT = Number(process.env.PORT) || 3000;
const DATA_DIR = path.join(ROOT, 'data');
const DB_FILE = process.env.BW_DB ? path.resolve(process.env.BW_DB) : path.join(DATA_DIR, 'beachwatch.db');

const SESSION_TTL_MS = 1000 * 60 * 60 * 24 * 7;   // 7일
const MAX_FAILED_ATTEMPTS = 5;                     // 연속 실패 잠금 기준
const LOCK_MS = 1000 * 60 * 15;                    // 15분 잠금
const LOGIN_WINDOW_MS = 1000 * 60 * 10;            // IP당 로그인 시도 창
const LOGIN_MAX_PER_WINDOW = 20;
const COOKIE_NAME = 'bw_session';

/* ── 데이터베이스 ─────────────────────────────────────────── */

/* Supabase(Postgres)면 schema.postgres.sql, 아니면 SQLite 스키마를 실행한다.
   (CREATE TABLE IF NOT EXISTS 이므로 기존 테이블은 그대로 유지된다) */
const SCHEMA_FILE = db.driver === 'postgres' ? 'schema.postgres.sql' : 'schema.sql';
const ready = db.exec(fs.readFileSync(path.join(__dirname, 'lib', SCHEMA_FILE), 'utf8'));

/* 기존 SQLite DB에 이메일 인증 컬럼이 없으면 보완한다.
   (기존 사용자는 이미 쓰던 계정이므로 verified=1 로 자동 승인.
    Postgres 는 스키마를 새로 만드므로 이 보정이 필요 없다) */
const schemaReady = (async () => {
  await ready;
  if (db.driver !== 'sqlite') return;
  const cols = (await db.prepare('PRAGMA table_info(users)').all()).map(c => c.name);
  const needed = [
    ['verified',           "ALTER TABLE users ADD COLUMN verified INTEGER NOT NULL DEFAULT 1"],
    ['email_code_hash',    'ALTER TABLE users ADD COLUMN email_code_hash TEXT'],
    ['email_code_salt',    'ALTER TABLE users ADD COLUMN email_code_salt TEXT'],
    ['email_code_expires', 'ALTER TABLE users ADD COLUMN email_code_expires TEXT']
  ];
  for (const [col, ddl] of needed) {
    if (!cols.includes(col)) await db.exec(ddl);
  }
})();

/* 자동 점검(e2e) 전용 — BW_TEST_MODE=1 일 때만 응답에 인증 코드(devCode)를
   포함한다. 실제 배포에서는 이 환경변수를 설정하지 않는다. */
const TEST_MODE = process.env.BW_TEST_MODE === '1';

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

/* ── 이메일 인증 (실제 메일주소만 가입 가능하도록) ────────── */

const EMAIL_CODE_TTL_MS = 1000 * 60 * 10;   // 인증 코드 유효 10분

function generateEmailCode() {
  return String(crypto.randomInt(0, 1000000)).padStart(6, '0');
}

/** 인증 코드 저장(해시만 보관) — 코드 재발송 때마다 덮어쓴다. */
async function setEmailCode(userId, code) {
  const { salt, hash } = hashSecret(code);
  (await db.prepare(
    'UPDATE users SET email_code_hash = ?, email_code_salt = ?, email_code_expires = ?, updated_at = ? WHERE id = ?'
  ).run(hash, salt, new Date(Date.now() + EMAIL_CODE_TTL_MS).toISOString(), nowISO(), userId));
}

async function clearEmailCode(userId) {
  (await db.prepare(
    'UPDATE users SET email_code_hash = NULL, email_code_salt = NULL, email_code_expires = NULL WHERE id = ?'
  ).run(userId));
}

/** 무료 메일 전달 서비스 FormSubmit AJAX 로 인증 코드 메일을 보낸다.
    ※ FormSubmit 은 Origin/Referer 가 없는 서버 간 요청을 거부하므로
      사이트 주소를 헤더로 반드시 넣는다 (그래서 "웹 서버로 열어라" 오류 방지).
    ※ 또한 각 수신 주소로 오는 메일이 '최초 1회'는 활성화 확인을 요청한다 —
      수신자가 활성화 링크를 누른 뒤 재발송하면 코드가 도착한다. */
async function sendVerificationEmail(email, name, code, origin) {
  const site = origin || process.env.RENDER_EXTERNAL_URL || 'https://safety-watch-oh5o.onrender.com';
  const subject = '[Beach Watch] 이메일 인증 코드: ' + code;
  const message = [
    (name ? name + '님, ' : '') + 'Beach Watch 가입/로그인 인증 코드입니다.',
    '',
    '인증 코드: ' + code,
    '',
    '· 10분 안에 화면에 입력하세요.',
    '· 메일이 오지 않으면 이 주소로 온 첫 메일(FormSubmit 활성화 요청)에서',
    '  확인 링크를 누른 뒤, 화면의 「인증 코드 재발송」을 누르면 도착합니다.'
  ].join('\n');
  try {
    const res = await fetch('https://formsubmit.co/ajax/' + encodeURIComponent(email), {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json',
        'Origin': site,
        'Referer': site + '/'
      },
      body: JSON.stringify({ _subject: subject, _template: 'box', _captcha: 'false', message }),
      signal: AbortSignal.timeout(15000)
    });
    if (!res.ok) return false;
    const data = await res.json().catch(() => null);
    /* success:false 는 활성화 대기 등 실제 미발송 상태다. */
    return !!(data && data.success === true);
  } catch (e) {
    console.error('[verify-mail]', e.message);
    return false;
  }
}

/** 이메일 인증 코드 응답 (자동 점검 모드에서만 코드 노출) */
function verificationPayload(email, sent, code) {
  const payload = { ok: true, needsVerification: true, email, emailSent: !!sent };
  if (TEST_MODE && code) payload.devCode = code;
  return payload;
}

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

/** 고유 제약 위반(중복 가입 등) 판별 — SQLite/Postgres 모두 커버.
    오류 메시지를 일반화해 "이미 가입된 이메일입니다" 로 오안내하지 않게 한다. */
function isUniqueViolation(err) {
  if (!err) return false;
  const text = String(err.message || '') + ' ' + String(err.code || '');
  return /UNIQUE constraint failed/i.test(text) || /duplicate key value/i.test(text) || err.code === '23505';
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

/** 사이트 공개 주소 — FormSubmit 에 Origin/Referer 로 넘겨 서버 발송을 허용받는다. */
function siteOrigin(req) {
  const proto = req.headers['x-forwarded-proto'] || (req.secure ? 'https' : 'http');
  const host = req.headers['x-forwarded-host'] || req.headers.host || '';
  return proto + '://' + host;
}

async function logAuth(action, req, extra) {
  const info = extra || {};
  try {
    (await db.prepare(
      'INSERT INTO auth_logs (user_id, email, action, detail, ip, user_agent, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)'
    ).run(
      info.userId || null,
      info.email || null,
      action,
      info.detail || null,
      clientIP(req),
      String(req.headers['user-agent'] || '').slice(0, 200),
      nowISO()
    ));
  } catch (e) {
    console.error('[auth-log]', e.message);
  }
}

/* ── 세션 ────────────────────────────────────────────────── */

/* 세션 만들기 — DB 기록과 쿠키 발급을 나눠서, 회원가입에서는
   계정 INSERT + 세션 INSERT 를 한 트랜잭션으로 묶어 원자성을 보장한다. */
async function insertSession(user, req) {
  const token = crypto.randomBytes(32).toString('base64url');
  const created = Date.now();
  const expires = created + SESSION_TTL_MS;
  (await db.prepare('INSERT INTO sessions (token_hash, user_id, created_at, expires_at, user_agent) VALUES (?, ?, ?, ?, ?)')
    .run(sha256(token), user.id, new Date(created).toISOString(), new Date(expires).toISOString(),
      String(req.headers['user-agent'] || '').slice(0, 200)));
  return token;
}

function setSessionCookie(req, res, token) {
  const secure = req.secure || req.headers['x-forwarded-proto'] === 'https';
  res.cookie(COOKIE_NAME, token, {
    httpOnly: true,
    sameSite: 'lax',
    secure,
    path: '/',
    maxAge: SESSION_TTL_MS
  });
  return token;
}

async function createSession(user, req, res) {
  const token = (await insertSession(user, req));
  return setSessionCookie(req, res, token);
}

async function currentUser(req) {
  const raw = (req.headers.cookie || '').split(';')
    .map(s => s.trim())
    .find(s => s.startsWith(COOKIE_NAME + '='));
  if (!raw) return null;
  const token = decodeURIComponent(raw.slice(COOKIE_NAME.length + 1));
  if (!token) return null;

  const row = (await db.prepare(
    `SELECT u.*, s.expires_at AS session_expires
       FROM sessions s JOIN users u ON u.id = s.user_id
      WHERE s.token_hash = ?`
  ).get(sha256(token)));
  if (!row) return null;
  if (new Date(row.session_expires).getTime() < Date.now()) {
    (await db.prepare('DELETE FROM sessions WHERE token_hash = ?').run(sha256(token)));
    return null;
  }
  return row;
}

async function clearSession(req, res) {
  const raw = (req.headers.cookie || '').split(';')
    .map(s => s.trim())
    .find(s => s.startsWith(COOKIE_NAME + '='));
  if (raw) {
    const token = decodeURIComponent(raw.slice(COOKIE_NAME.length + 1));
    (await db.prepare('DELETE FROM sessions WHERE token_hash = ?').run(sha256(token)));
  }
  res.clearCookie(COOKIE_NAME, {
    path: '/',
    sameSite: 'lax',
    secure: req.secure || req.headers['x-forwarded-proto'] === 'https'
  });
}

async function requireAuth(req, res, next) {
  const user = (await currentUser(req));
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

// Shared DB limits survive function cold starts and apply across instances.
async function rateLimit(req, res, next, prefix, windowMs, maximum) {
  const now = Date.now();
  const row = await db.prepare(
    'INSERT INTO rate_limits (key, count, reset_at) VALUES (?, 1, ?) ' +
    'ON CONFLICT(key) DO UPDATE SET count = CASE WHEN rate_limits.reset_at <= ? THEN 1 ELSE rate_limits.count + 1 END, ' +
    'reset_at = CASE WHEN rate_limits.reset_at <= ? THEN excluded.reset_at ELSE rate_limits.reset_at END RETURNING count'
  ).get(prefix + ':' + sha256(clientIP(req)), now + windowMs, now, now);
  if (row.count > maximum) return fail(res, 429, 'RATE_LIMIT', '시도가 너무 많습니다. 잠시 후 다시 시도하세요.');
  next();
}
async function loginRateLimit(req, res, next) {
  return rateLimit(req, res, next, 'auth', LOGIN_WINDOW_MS, LOGIN_MAX_PER_WINDOW);
}
async function eventRateLimit(req, res, next) {
  return rateLimit(req, res, next, 'events', 60000, 240);
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
// Catch rejected async handlers under Express 4.
for (const method of ['get', 'post', 'use']) {
  const original = app[method].bind(app);
  app[method] = (...args) => original(...args.map(handler =>
    typeof handler === 'function' && handler.constructor.name === 'AsyncFunction'
      ? function (req, res, next) { Promise.resolve(handler(req, res, next)).catch(next); }
      : handler));
}
app.use((req, res, next) => db.runContext(() => next()));
app.use(async (req, res, next) => { await schemaReady; next(); });

/* Render, Railway 등 HTTPS 프록시 뒤에서 secure 쿠키를 정확히 발급한다. */
app.set('trust proxy', 1);

app.use(express.json({ limit: '16kb' }));

// Account and user records must never be cached by a hosting proxy.
app.use('/api', (req, res, next) => {
  res.setHeader('Cache-Control', 'no-store');
  next();
});

/* 1) API ─────────────────────────────────────────────────── */

app.get('/api/health', async (req, res) => {
  const users = (await db.prepare('SELECT CAST(COUNT(*) AS INTEGER) AS n FROM users').get()).n;
  res.json({ ok: true, db: db.driver, file: db.driver === 'sqlite' ? path.relative(ROOT, DB_FILE) : undefined, users });
});

/* 회원가입 — 계정을 미인증 상태로 만들고 이메일로 인증 코드를 발송한다.
   실제 메일함(코드 수신)이 확인된 주소만 인증 후 로그인할 수 있다. */
app.post('/api/auth/signup', loginRateLimit, async (req, res) => {
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
  const existing = (await db.prepare('SELECT * FROM users WHERE lower(email) = lower(?)').get(normalizedEmail));
  if (existing && existing.verified) return fail(res, 409, 'EMAIL_EXISTS', '이미 가입된 이메일입니다.');

  const pw = hashSecret(password);
  const ans = hashSecret(String(answer).trim().toLowerCase());
  const ts = nowISO();
  const code = generateEmailCode();

  /* 미인증 가입 중이면 입력 값을 새로 저장해 오타를 고칠 수 있게 하고,
     코드만 다시 보낸다. (인증되지 않은 계정은 로그인할 수 없다) */
  let user;
  let stage = 'begin';
  try {
    if (existing && !existing.verified) {
      stage = 'update';
      (await db.prepare(
        `UPDATE users SET name = ?, password_hash = ?, password_salt = ?, question = ?,
                            answer_hash = ?, answer_salt = ?, updated_at = ? WHERE id = ?`
      ).run(
        String(name).trim(), pw.hash, pw.salt, String(question).trim(),
        ans.hash, ans.salt, ts, existing.id
      ));
      (await setEmailCode(existing.id, code));
      user = (await db.prepare('SELECT * FROM users WHERE id = ?').get(existing.id));
    } else {
      await db.transaction(async () => {
        stage = 'insert';
        const count = (await db.prepare('SELECT CAST(COUNT(*) AS INTEGER) AS n FROM users').get()).n;
        const info = (await db.prepare(
          `INSERT INTO users (name, email, password_hash, password_salt, question, answer_hash, answer_salt,
                              role, verified, created_at, updated_at)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, 0, ?, ?)
           RETURNING id`
        ).get(
          String(name).trim(), normalizedEmail, pw.hash, pw.salt,
          String(question).trim(), ans.hash, ans.salt,
          count === 0 ? 'admin' : 'operator', ts, ts
        ));
        stage = 'select-user';
        user = (await db.prepare('SELECT * FROM users WHERE id = ?').get(Number(info.id)));
        stage = 'set-code';
        (await setEmailCode(user.id, code));
      });
    }
  } catch (error) {
    if (isUniqueViolation(error)) return fail(res, 409, 'EMAIL_EXISTS', '이미 가입된 이메일입니다.');
    console.error('[signup] stage=' + stage);
    return fail(res, 500, 'SERVER_ERROR', '회원가입 처리 중 오류가 발생했습니다.');
  }

  /* 자동 점검 모드에서는 외부 메일 발송을 건너뛴다(네트워크 무관·빠른 검증). */
  const sent = TEST_MODE ? true : await sendVerificationEmail(normalizedEmail, user.name, code, siteOrigin(req));
  (await logAuth('signup', req, { userId: user.id, email: user.email, detail: '인증 대기' }));
  res.status(201).json(verificationPayload(user.email, sent, code));
});

/* 로그인 */
app.post('/api/auth/login', loginRateLimit, async (req, res) => {
  const { email, password } = req.body || {};
  if (!email || !password) return fail(res, 400, 'MISSING', '이메일과 비밀번호를 입력하세요.');

  const user = (await db.prepare('SELECT * FROM users WHERE lower(email) = lower(?)').get(String(email).trim()));

  if (user && user.locked_until && new Date(user.locked_until).getTime() > Date.now()) {
    (await logAuth('login_blocked', req, { userId: user.id, email: user.email, detail: '계정 잠금' }));
    return fail(res, 423, 'LOCKED', '연속 로그인 실패로 계정이 잠겼습니다. 15분 후 다시 시도하세요.');
  }

  if (!user || !verifySecret(password, user.password_salt, user.password_hash)) {
    if (user) {
      const failed = user.failed_count + 1;
      const locked = failed >= MAX_FAILED_ATTEMPTS
        ? new Date(Date.now() + LOCK_MS).toISOString()
        : null;
      (await db.prepare('UPDATE users SET failed_count = ?, locked_until = ?, updated_at = ? WHERE id = ?')
        .run(failed, locked, nowISO(), user.id));
      (await logAuth('login_failed', req, {
        userId: user.id, email: user.email,
        detail: locked ? '잠금 발생 (' + failed + '회 실패)' : failed + '회 실패'
      }));
      if (locked) return fail(res, 423, 'LOCKED', '연속 로그인 실패로 계정이 잠겼습니다. 15분 후 다시 시도하세요.');
    } else {
      (await logAuth('login_failed', req, { email: String(email).trim(), detail: '없는 계정' }));
    }
    return fail(res, 401, 'INVALID_CREDENTIALS', '이메일 또는 비밀번호가 올바르지 않습니다.');
  }

  /* 실제 메일주소 인증 전에는 로그인할 수 없다 — 코드를 새로 보내고 안내한다. */
  if (!user.verified) {
    const code = generateEmailCode();
    const sent = TEST_MODE ? true : await sendVerificationEmail(user.email, user.name, code, siteOrigin(req));
    (await setEmailCode(user.id, code));
    (await logAuth('login_unverified', req, { userId: user.id, email: user.email, detail: '미인증 계정 — 인증 코드 재발송' }));
    const body = {
      ok: false, code: 'EMAIL_NOT_VERIFIED',
      message: '이메일 인증이 필요합니다. ' + user.email + ' 로 보낸 인증 코드를 입력하세요.',
      email: user.email, emailSent: !!sent
    };
    if (TEST_MODE && code) body.devCode = code;
    return res.status(403).json(body);
  }

  (await db.prepare('UPDATE users SET failed_count = 0, locked_until = NULL, last_login_at = ?, updated_at = ? WHERE id = ?')
    .run(nowISO(), nowISO(), user.id));

  const fresh = (await db.prepare('SELECT * FROM users WHERE id = ?').get(user.id));
  (await createSession(fresh, req, res));
  (await logAuth('login', req, { userId: fresh.id, email: fresh.email }));
  res.json({ ok: true, user: publicUser(fresh) });
});

/* 이메일 인증 코드 확인 — 성공 시 계정을 인증 처리하고 세션을 발급한다 */
app.post('/api/auth/verify', loginRateLimit, async (req, res) => {
  const { email, code } = req.body || {};
  if (!email || !code) return fail(res, 400, 'MISSING', '이메일과 인증 코드를 입력하세요.');

  const user = (await db.prepare('SELECT * FROM users WHERE lower(email) = lower(?)').get(String(email).trim()));
  if (!user) return fail(res, 404, 'NOT_FOUND', '가입된 이메일이 없습니다.');

  /* 이미 인증된 계정이면 바로 세션을 발급한다. */
  if (user.verified) {
    const token = (await insertSession(user, req));
    setSessionCookie(req, res, token);
    (await logAuth('login', req, { userId: user.id, email: user.email }));
    return res.json({ ok: true, user: publicUser(user) });
  }

  if (!user.email_code_hash || !user.email_code_expires) {
    return fail(res, 400, 'EMAIL_CODE_REQUIRED', '인증 코드가 없습니다. 메일을 다시 보내세요.');
  }
  if (new Date(user.email_code_expires).getTime() < Date.now()) {
    (await logAuth('verify_failed', req, { userId: user.id, email: user.email, detail: '코드 만료' }));
    return fail(res, 400, 'CODE_EXPIRED', '인증 코드가 만료되었습니다. 재발송 후 다시 시도하세요.');
  }
  if (!verifySecret(String(code).trim(), user.email_code_salt, user.email_code_hash)) {
    (await logAuth('verify_failed', req, { userId: user.id, email: user.email, detail: '코드 불일치' }));
    return fail(res, 401, 'BAD_CODE', '인증 코드가 올바르지 않습니다.');
  }

  (await db.prepare('UPDATE users SET verified = 1, failed_count = 0, locked_until = NULL, updated_at = ? WHERE id = ?')
    .run(nowISO(), user.id));
  (await clearEmailCode(user.id));

  const fresh = (await db.prepare('SELECT * FROM users WHERE id = ?').get(user.id));
  const token = (await insertSession(fresh, req));
  setSessionCookie(req, res, token);
  (await logAuth('email_verified', req, { userId: fresh.id, email: fresh.email, detail: '가입 완료 · ' + fresh.role }));
  res.json({ ok: true, user: publicUser(fresh) });
});

/* 인증 코드 재발송 (미인증 계정) */
app.post('/api/auth/verify/resend', loginRateLimit, async (req, res) => {
  const { email } = req.body || {};
  if (!email || !EMAIL_RE.test(String(email))) return fail(res, 400, 'INVALID_EMAIL', '올바른 이메일 주소를 입력하세요.');

  const user = (await db.prepare('SELECT * FROM users WHERE lower(email) = lower(?)').get(String(email).trim()));
  if (!user) return fail(res, 404, 'NOT_FOUND', '가입된 이메일이 없습니다.');
  if (user.verified) return fail(res, 400, 'ALREADY_VERIFIED', '이미 인증된 계정입니다. 로그인해 주세요.');

  const code = generateEmailCode();
  const sent = TEST_MODE ? true : await sendVerificationEmail(user.email, user.name, code, siteOrigin(req));
  (await setEmailCode(user.id, code));
  (await logAuth('verify_resend', req, { userId: user.id, email: user.email }));
  res.json(verificationPayload(user.email, sent, code));
});

/* 로그아웃 */
app.post('/api/auth/logout', async (req, res) => {
  const user = (await currentUser(req));
  (await clearSession(req, res));
  if (user) (await logAuth('logout', req, { userId: user.id, email: user.email }));
  res.json({ ok: true });
});

/* 현재 로그인 정보 */
app.get('/api/auth/me', async (req, res) => {
  const user = (await currentUser(req));
  res.json({ ok: true, user: user ? publicUser(user) : null });
});

/* 비밀번호 변경 (로그인 상태) */
app.post('/api/auth/password/change', requireAuth, async (req, res) => {
  const { currentPassword, newPassword } = req.body || {};
  if (!currentPassword || !newPassword) return fail(res, 400, 'MISSING', '현재·새 비밀번호를 모두 입력하세요.');
  if (String(newPassword).length < 8) return fail(res, 400, 'WEAK_PASSWORD', '새 비밀번호는 8자 이상이어야 합니다.');
  if (!verifySecret(currentPassword, req.user.password_salt, req.user.password_hash)) {
    (await logAuth('password_change_failed', req, { userId: req.user.id, email: req.user.email, detail: '현재 비밀번호 불일치' }));
    return fail(res, 401, 'INVALID_CREDENTIALS', '현재 비밀번호가 올바르지 않습니다.');
  }
  if (verifySecret(newPassword, req.user.password_salt, req.user.password_hash)) {
    return fail(res, 400, 'SAME_PASSWORD', '현재 비밀번호와 다른 새 비밀번호를 입력하세요.');
  }

  const pw = hashSecret(newPassword);
  (await db.prepare('UPDATE users SET password_hash = ?, password_salt = ?, updated_at = ? WHERE id = ?')
    .run(pw.hash, pw.salt, nowISO(), req.user.id));
  (await logAuth('password_change', req, { userId: req.user.id, email: req.user.email }));
  res.json({ ok: true });
});

/* 비밀번호 찾기 1단계 — 보안 질문 반환 */
app.post('/api/auth/reset/question', loginRateLimit, async (req, res) => {
  const { email } = req.body || {};
  if (!email || !EMAIL_RE.test(String(email))) return fail(res, 400, 'INVALID_EMAIL', '올바른 이메일 주소를 입력하세요.');

  const user = (await db.prepare('SELECT id, question FROM users WHERE lower(email) = lower(?)').get(String(email).trim()));
  if (!user) {
    (await logAuth('reset_question', req, { email: String(email).trim(), detail: '계정 없음' }));
    return fail(res, 404, 'NOT_FOUND', '가입된 이메일이 없습니다.');
  }
  (await logAuth('reset_question', req, { userId: user.id, email: String(email).trim() }));
  res.json({ ok: true, email: String(email).trim(), question: user.question });
});

/* 비밀번호 찾기 2단계 — 보안 질문 답변 확인 후 재설정 */
app.post('/api/auth/reset/verify', loginRateLimit, async (req, res) => {
  const { email, answer, newPassword, newpassword } = req.body || {};
  const secret = newPassword || newpassword;

  if (!email || !answer) return fail(res, 400, 'MISSING', '이메일과 보안 질문 답변을 입력하세요.');
  if (!secret || String(secret).length < 8) return fail(res, 400, 'WEAK_PASSWORD', '새 비밀번호는 8자 이상이어야 합니다.');

  const user = (await db.prepare('SELECT * FROM users WHERE lower(email) = lower(?)').get(String(email).trim()));
  if (!user) return fail(res, 404, 'NOT_FOUND', '가입된 이메일이 없습니다.');

  if (!verifySecret(String(answer).trim().toLowerCase(), user.answer_salt, user.answer_hash)) {
    (await logAuth('reset_failed', req, { userId: user.id, email: user.email, detail: '보안 질문 답변 불일치' }));
    return fail(res, 401, 'BAD_ANSWER', '보안 질문 답변이 올바르지 않습니다.');
  }

  const pw = hashSecret(secret);
  const ts = nowISO();
  (await db.prepare('UPDATE users SET password_hash = ?, password_salt = ?, failed_count = 0, locked_until = NULL, updated_at = ? WHERE id = ?')
    .run(pw.hash, pw.salt, ts, user.id));
  (await db.prepare('DELETE FROM sessions WHERE user_id = ?').run(user.id));
  (await logAuth('password_reset', req, { userId: user.id, email: user.email, detail: '보안 질문으로 재설정' }));
  res.json({ ok: true });
});

/* 계정 목록 (관리자) */
app.get('/api/users', requireAuth, requireAdmin, async (req, res) => {
  const rows = (await db.prepare(
    'SELECT id, name, email, role, question, created_at, updated_at, last_login_at, failed_count, locked_until FROM users ORDER BY id'
  ).all());
  res.json({ ok: true, users: rows.map(r => ({
    id: r.id, name: r.name, email: r.email, role: r.role, question: r.question,
    createdAt: r.created_at, updatedAt: r.updated_at,
    lastLoginAt: r.last_login_at, failedCount: r.failed_count, lockedUntil: r.locked_until
  })) });
});

/* 접속·인증 기록 (관리자) */
app.get('/api/logs', requireAuth, requireAdmin, async (req, res) => {
  const limit = Math.min(Number(req.query.limit) || 100, 500);
  const rows = (await db.prepare('SELECT * FROM auth_logs ORDER BY id DESC LIMIT ?').all(limit));
  res.json({ ok: true, logs: rows.map(r => ({
    id: r.id, userId: r.user_id, email: r.email, action: r.action,
    detail: r.detail, ip: r.ip, createdAt: r.created_at
  })) });
});

/* 감지·경보 이벤트 저장 (로그인 없이도 기록, 로그인 중이면 계정과 연결) */
app.post('/api/events', eventRateLimit, async (req, res) => {
  const body = req.body || {};
  const list = Array.isArray(body.events) ? body.events : [body];
  if (!list.length || list.length > 50) {
    return fail(res, 400, 'INVALID_INPUT', '이벤트는 1~50건까지 보낼 수 있습니다.');
  }

  const user = (await currentUser(req));
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
    (await insert.run(
      user ? user.id : null,
      user ? user.email : null,
      event.kind, event.message, event.camera, event.payload, ip,
      item && item.at ? String(item.at).slice(0, 40) : ts
    ));
    saved += 1;
  }
  res.status(201).json({ ok: true, saved, skipped });
});

/* 이벤트 조회 — 관리자는 전체, 그 외에는 본인 기록만 */
app.get('/api/events', requireAuth, async (req, res) => {
  const limit = Math.min(Number(req.query.limit) || 50, 500);
  const isAdmin = req.user.role === 'admin';
  const rows = isAdmin
    ? (await db.prepare('SELECT * FROM events ORDER BY id DESC LIMIT ?').all(limit))
    : (await db.prepare('SELECT * FROM events WHERE user_id = ? ORDER BY id DESC LIMIT ?').all(req.user.id, limit));

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
app.post('/api/events/clear', requireAuth, requireAdmin, async (req, res) => {
  const before = (await db.prepare('SELECT CAST(COUNT(*) AS INTEGER) AS n FROM events').get()).n;
  (await db.prepare('DELETE FROM events').run());
  (await logAuth('events_cleared', req, { userId: req.user.id, email: req.user.email, detail: before + '건 삭제' }));
  res.json({ ok: true, deleted: before });
});

/* 대시보드용 요약 */
app.get('/api/stats', requireAuth, async (req, res) => {
  const startOfDay = new Date();
  startOfDay.setHours(0, 0, 0, 0);
  const today = startOfDay.toISOString();
  const placeholders = ALERT_KINDS.map(() => '?').join(', ');

  const count = async (sql, params) => (await db.prepare(sql).get(...(params || []))).n;

  res.json({
    ok: true,
    stats: {
      users: (await count('SELECT CAST(COUNT(*) AS INTEGER) AS n FROM users')),
      loggedInToday: (await count('SELECT CAST(COUNT(*) AS INTEGER) AS n FROM auth_logs WHERE action = ? AND created_at >= ?', ['login', today])),
      events: (await count('SELECT CAST(COUNT(*) AS INTEGER) AS n FROM events')),
      alerts: (await count('SELECT CAST(COUNT(*) AS INTEGER) AS n FROM events WHERE kind IN (' + placeholders + ')', ALERT_KINDS)),
      myEvents: (await count('SELECT CAST(COUNT(*) AS INTEGER) AS n FROM events WHERE user_id = ?', [req.user.id])),
      todayEvents: (await count('SELECT CAST(COUNT(*) AS INTEGER) AS n FROM events WHERE created_at >= ?', [today])),
      todayAlerts: (await count('SELECT CAST(COUNT(*) AS INTEGER) AS n FROM events WHERE created_at >= ? AND kind IN (' + placeholders + ')', [today].concat(ALERT_KINDS)))
    }
  });
});

/* 2) 정적 파일 (중요한 폴더만 노출) ─────────────────────── */

const BLOCKED = /^\/(data|node_modules|\.git)(\/|$)|^\/(server\.js|package\.json|package-lock\.json)$|\.(db|sqlite|sqlite3|log)$/i;

app.use((req, res, next) => {
  if (BLOCKED.test(req.path)) return res.status(404).type('text/plain').end('not found');
  next();
});

app.use('/lib', (req, res) => res.sendStatus(404));
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

module.exports = { app, ready };

if (require.main === module) ready.then(() => app.listen(PORT, () => {
  console.log('Beach Watch server → http://localhost:' + PORT);
  console.log('DB: ' + path.relative(ROOT, DB_FILE));
})).catch(() => { console.error('Database initialization failed. Check database settings.'); process.exitCode = 1; });
