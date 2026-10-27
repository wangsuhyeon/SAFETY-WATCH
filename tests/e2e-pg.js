'use strict';

/* ============================================================
   Beach Watch — Supabase(Postgres) 모드 E2E 점검
   실행 (PowerShell):
     $env:SUPABASE_DB_URL = "postgresql://..."; node tests/e2e-pg.js
   ------------------------------------------------------------
   SUPABASE_DB_URL 을 실제 서버에 주고 기동한 뒤, BW_TEST_MODE로
   가입 → 인증 → 로그인 → 기록 저장/조회/지속성 까지 전부 검증하고
   테스트 데이터(pgtest-*)를 정리한다.
   ============================================================ */

const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');

const ROOT = path.join(__dirname, '..');
const PORT = 3210;
const BASE = 'http://127.0.0.1:' + PORT;

if (!process.env.SUPABASE_DB_URL) {
  console.error('SUPABASE_DB_URL 환경변수를 설정한 뒤 실행하세요.');
  process.exit(2);
}

const results = [];
function check(name, ok, detail) {
  results.push({ name, ok: !!ok, detail: detail || '' });
  console.log((ok ? '  [PASS] ' : '  [FAIL] ') + name + (detail ? '  → ' + detail : ''));
}

function jar(headers) {
  const raw = headers.getSetCookie ? headers.getSetCookie() : [];
  return raw.filter(Boolean).map(c => c.split(';')[0]).join('; ');
}

async function call(method, url, body, cookie) {
  const res = await fetch(BASE + url, {
    method,
    headers: { 'content-type': 'application/json', ...(cookie ? { cookie } : {}) },
    body: body === undefined ? undefined : JSON.stringify(body)
  });
  let data = null;
  try { data = await res.json(); } catch (e) { data = null; }
  return { status: res.status, data, cookie: jar(res.headers) };
}

function stop(proc) {
  return new Promise(resolve => {
    if (!proc || proc.exitCode !== null) return resolve();
    proc.on('exit', () => resolve());
    proc.kill();
    setTimeout(() => { try { proc.kill('SIGKILL'); } catch (e) {} resolve(); }, 2000);
  });
}

(async () => {
  const stamp = Date.now();
  const EMAIL = 'pgtest-' + stamp + '@example.com';
  const USER = {
    name: 'PG 점검자', email: EMAIL, password: 'pgpass1234', passwordConfirm: 'pgpass1234',
    question: 'PG 테스트 질문?', answer: '수파베이스'
  };

  const proc = spawn(process.execPath, [path.join(ROOT, 'server.js')], {
    env: { ...process.env, PORT: String(PORT), BW_TEST_MODE: '1' },
    stdio: ['ignore', 'pipe', 'pipe']
  });
  let stderr = '';
  proc.stderr.on('data', d => { stderr += d; });

  let ready = false;
  for (let i = 0; i < 60 && !ready; i++) {
    try { ready = (await fetch(BASE + '/api/health')).ok; }
    catch (e) { await new Promise(r => setTimeout(r, 300)); }
  }
  if (!ready) {
    console.error('서버 기동 실패\n' + stderr);
    await stop(proc);
    process.exit(2);
  }

  let cookie = '';
  try {
    /* 1. 헬스 — postgres 드라이버로 연결됐는지 */
    const health = await call('GET', '/api/health');
    check('Postgres 연결 (db=postgres)', health.data && health.data.ok === true &&
      health.data.db === 'postgres', JSON.stringify(health.data));

    /* 2. 가입 → 인증 대기 */
    const signup = await call('POST', '/api/auth/signup', USER);
    check('가입 접수 (Postgres INSERT)', signup.status === 201 && signup.data.needsVerification === true,
      'status=' + signup.status);

    /* 3. 미인증 로그인 차단 */
    const unverified = await call('POST', '/api/auth/login', { email: EMAIL, password: USER.password });
    check('미인증 로그인 차단 (403)', unverified.status === 403 &&
      unverified.data.code === 'EMAIL_NOT_VERIFIED', unverified.status + '/' + (unverified.data && unverified.data.code));

    /* 4. 잘못된 코드 거부 */
    const bad = await call('POST', '/api/auth/verify', { email: EMAIL, code: '000000' === (unverified.data.devCode || '') ? '111111' : '000000' });
    check('잘못된 코드 거부 (401)', bad.status === 401 && bad.data.code === 'BAD_CODE',
      bad.status + '/' + (bad.data && bad.data.code));

    /* 5. 인증 코드 확인 → 세션 발급 */
    const verify = await call('POST', '/api/auth/verify', { email: EMAIL, code: unverified.data.devCode });
    check('이메일 인증 + 세션 발급', verify.status === 200 && verify.data.user && verify.data.user.email === EMAIL,
      'status=' + verify.status);
    cookie = verify.cookie;
    check('첫 계정 여부와 무관하게 role 부여', !!verify.data.user.role, verify.data.user.role);

    /* 6. 세션 유효 */
    const me = await call('GET', '/api/auth/me', undefined, cookie);
    check('세션 유지 (/api/auth/me)', me.data && me.data.user && me.data.user.email === EMAIL, '');

    /* 7. 이벤트 저장/조회 */
    const save = await call('POST', '/api/events', { events: [
      { message: '[PG E2E] 아두이노(열화상) 시리얼 연결', kind: 'ok', camera: 'MLX90640' },
      { message: '[PG E2E] [경고] 경계선 밖 사람 1명', kind: 'alert', camera: '카메라 1', count: 1 }
    ] }, cookie);
    check('이벤트 저장 (2건)', save.status === 201 && save.data.saved === 2, JSON.stringify(save.data));

    const list = await call('GET', '/api/events?limit=10', undefined, cookie);
    check('이벤트 조회', list.data && (list.data.events || []).length === 2,
      (list.data && list.data.events || []).length + '건');

    /* 8. 재로그인 후 기록 지속 */
    await call('POST', '/api/auth/logout', undefined, cookie);
    const relogin = await call('POST', '/api/auth/login', { email: EMAIL, password: USER.password });
    check('재로그인 (인증된 계정)', relogin.status === 200, 'status=' + relogin.status);
    const list2 = await call('GET', '/api/events?limit=10', undefined, relogin.cookie);
    check('기록 지속성 (재로그인 후 2건 유지)', list2.data && (list2.data.events || []).length === 2,
      (list2.data && list2.data.events || []).length + '건');

    const stats = await call('GET', '/api/stats', undefined, relogin.cookie);
    check('요약 통계', stats.data && stats.data.stats && stats.data.stats.myEvents === 2,
      JSON.stringify(stats.data && stats.data.stats));
  } catch (err) {
    check('점검 중 예외 없음', false, err.message);
  } finally {
    await stop(proc);

    /* 테스트 데이터 정리 (pgtest-*) */
    try {
      const { Pool } = require('pg');
      const pool = new Pool({ connectionString: process.env.SUPABASE_DB_URL, ssl: { rejectUnauthorized: false } });
      await pool.query(`DELETE FROM events WHERE email LIKE 'pgtest-%'`);
      await pool.query(`DELETE FROM auth_logs WHERE email LIKE 'pgtest-%'`);
      await pool.query(`DELETE FROM sessions WHERE user_id IN (SELECT id FROM users WHERE email LIKE 'pgtest-%')`);
      await pool.query(`DELETE FROM users WHERE email LIKE 'pgtest-%'`);
      await pool.end();
      console.log('  [정리] pgtest-* 테스트 데이터 삭제 완료');
    } catch (e) {
      console.log('  [정리] 실패 (수동 삭제 필요):', e.message);
    }
  }

  const failed = results.filter(r => !r.ok);
  console.log('\n=== Postgres E2E 결과: ' + (results.length - failed.length) + '/' + results.length + ' 통과 ===');
  if (failed.length) {
    failed.forEach(f => console.log(' - ' + f.name + ' :: ' + f.detail));
    process.exit(1);
  }
})().catch(err => { console.error('스크립트 오류:', err); process.exit(2); });
