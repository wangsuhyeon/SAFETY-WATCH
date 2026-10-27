'use strict';

/* ============================================================
   Beach Watch — 인증 API 자동 점검
   실행: npm test   (또는 node tests/api-check.js)
   서버를 임시 포트로 띄워 가입 → 로그인 → 기록 → 보안질문 재설정까지 검증한다.
   ============================================================ */

const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');
const os = require('os');

const ROOT = path.join(__dirname, '..');
const PORT = 3137;
const BASE = 'http://127.0.0.1:' + PORT;

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
    headers: {
      'content-type': 'application/json',
      ...(cookie ? { cookie } : {})
    },
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
  /* 라이브 DB(data/beachwatch.db)는 절대 건드리지 않고 임시 DB 를 쓴다.
     (구버전은 라이브 DB 를 백업→삭제→복원했는데, -wal 은 백업에서 빠져
      실제 서버와 겹쳐 실행하면 잠금 충돌(회원가입 500 오류)과
      미점검 데이터 소실이 발생했다) */
  const dbFile = path.join(os.tmpdir(), 'beachwatch-api-' + Date.now() + '.db');

  const proc = spawn(process.execPath, [path.join(ROOT, 'server.js')], {
    env: { ...process.env, PORT: String(PORT), BW_DB: dbFile, BW_TEST_MODE: '1' },
    stdio: ['ignore', 'pipe', 'pipe']
  });
  let stderr = '';
  proc.stderr.on('data', d => { stderr += d; });

  // 기동 대기
  let ready = false;
  for (let i = 0; i < 50 && !ready; i++) {
    try {
      const r = await fetch(BASE + '/api/health');
      ready = r.ok;
    } catch (e) { await new Promise(r => setTimeout(r, 200)); }
  }
  if (!ready) {
    console.error('서버 기동 실패\n' + stderr);
    await stop(proc);
    process.exit(2);
  }

  const stamp = Date.now();
  const USER = {
    name: '점검 담당자',
    email: 'checker' + stamp + '@example.com',
    password: 'passw0rd12',
    passwordConfirm: 'passw0rd12',
    question: '가장 좋아하는 바다는?',
    answer: '동해'
  };

  try {
    /* 1. 헬스 / DB 연결 */
    const health = await call('GET', '/api/health');
    check('DB 연결 (sqlite 파일 오픈)', health.data && health.data.ok === true,
      JSON.stringify(health.data));

    /* 2. 회원가입 — 미인증 상태로 만들고 인증 코드를 메일로 보낸다 */
    const signup = await call('POST', '/api/auth/signup', USER);
    check('회원가입 접수 (인증 대기)', signup.status === 201 && signup.data &&
      signup.data.needsVerification === true && signup.data.email === USER.email,
      'status=' + signup.status);
    check('가입 시 세션 쿠키 미발급 (인증 전)', !signup.cookie, signup.cookie.slice(0, 40));
    check('자동 점검 모드에서 인증 코드 수신 (devCode)',
      /^\d{6}$/.test(signup.data && signup.data.devCode || ''), JSON.stringify(signup.data && signup.data.devCode));

    /* 2-b. 잘못된 인증 코드 거부 (아직 가입 코드가 유효한 상태) */
    const badCode = await call('POST', '/api/auth/verify', {
      email: USER.email, code: (signup.data.devCode || '') === '000000' ? '111111' : '000000'
    });
    check('잘못된 인증 코드 거부 (401)',
      badCode.status === 401 && badCode.data.code === 'BAD_CODE',
      badCode.status + '/' + (badCode.data && badCode.data.code));

    /* 2-c. 미인증 상태로 로그인 시도 → 차단 + 새 인증 코드 발송(코드 갱신) */
    const unverified = await call('POST', '/api/auth/login', { email: USER.email, password: USER.password });
    check('미인증 계정 로그인 차단 (403)',
      unverified.status === 403 && unverified.data.code === 'EMAIL_NOT_VERIFIED',
      unverified.status + '/' + (unverified.data && unverified.data.code));

    /* 2-d. 인증 코드 확인 → 계정 활성화 + 세션 발급 (최신 코드 사용) */
    const verify = await call('POST', '/api/auth/verify', { email: USER.email, code: unverified.data.devCode });
    check('이메일 인증 완료 (세션 발급)', verify.status === 200 && verify.data.user &&
      verify.data.user.email === USER.email, 'status=' + verify.status);
    check('첫 가입자에게 admin 부여', verify.data && verify.data.user && verify.data.user.role === 'admin',
      verify.data && verify.data.user && verify.data.user.role);
    check('인증 시 세션 쿠키 발급', /bw_session=/.test(verify.cookie), verify.cookie.slice(0, 40));
    const adminCookie = verify.cookie;

    /* 3. 인증된 계정 중복 가입 거부 */
    const dup = await call('POST', '/api/auth/signup', USER);
    check('중복 이메일 거부 (409)', dup.status === 409 && dup.data.code === 'EMAIL_EXISTS',
      'status=' + dup.status);

    /* 4. 약한 비밀번호 거부 */
    const weak = await call('POST', '/api/auth/signup', {
      name: '약한', email: 'weak' + stamp + '@example.com', password: '123',
      question: 'q', answer: 'a'
    });
    check('8자 미만 비밀번호 거부', weak.status === 400 && weak.data.code === 'WEAK_PASSWORD',
      weak.data && weak.data.code);

    /* 5. 세션 확인 */
    const me = await call('GET', '/api/auth/me', undefined, adminCookie);
    check('세션 유지 (/api/auth/me)', me.data && me.data.user && me.data.user.email === USER.email,
      me.data && me.data.user && me.data.user.email);

    /* 6. 로그인 실패 → 잠금 */
    const bad1 = await call('POST', '/api/auth/login', { email: USER.email, password: 'wrong-pass-1' });
    const bad2 = await call('POST', '/api/auth/login', { email: USER.email, password: 'wrong-pass-2' });
    check('잘못된 비밀번호 거부', bad1.status === 401 && bad1.data.code === 'INVALID_CREDENTIALS',
      bad1.data && bad1.data.code);

    /* 7. 정상 로그인 (새 세션) */
    const login = await call('POST', '/api/auth/login', { email: USER.email, password: USER.password });
    check('로그인 성공', login.status === 200 && login.data.user && login.data.user.email === USER.email,
      'status=' + login.status);
    check('로그인 후 최근 접속 시각 갱신', !!(login.data.user && login.data.user.lastLoginAt),
      login.data.user && login.data.user.lastLoginAt);
    const userCookie = login.cookie;

    /* 8. 로그인 오류 응답 */
    const ghost = await call('POST', '/api/auth/login', { email: 'none' + stamp + '@example.com', password: 'abcdefgh1' });
    check('없는 계정 로그인 거부', ghost.status === 401, 'status=' + ghost.status);

    /* 9. 비밀번호 변경 */
    const changed = await call('POST', '/api/auth/password/change', {
      currentPassword: USER.password, newPassword: 'newpass9999'
    }, userCookie);
    check('비밀번호 변경 성공', changed.status === 200 && changed.data.ok === true,
      'status=' + changed.status);

    const oldLogin = await call('POST', '/api/auth/login', { email: USER.email, password: USER.password });
    check('변경 후 이전 비밀번호로 로그인 불가', oldLogin.status === 401, 'status=' + oldLogin.status);

    /* 10. 비밀번호 찾기 (보안 질문) */
    const q = await call('POST', '/api/auth/reset/question', { email: USER.email });
    check('보안 질문 반환', q.status === 200 && q.data.question === USER.question,
      q.data && q.data.question);

    const qMiss = await call('POST', '/api/auth/reset/question', { email: 'nope' + stamp + '@example.com' });
    check('미가입 이메일 거부 (404)', qMiss.status === 404, 'status=' + qMiss.status);

    const badAnswer = await call('POST', '/api/auth/reset/verify', {
      email: USER.email, answer: '서해', newPassword: 'resetpass11'
    });
    check('잘못된 답변 거부', badAnswer.status === 401 && badAnswer.data.code === 'BAD_ANSWER',
      badAnswer.data && badAnswer.data.code);

    const reset = await call('POST', '/api/auth/reset/verify', {
      email: USER.email, answer: USER.answer, newPassword: 'resetpass11'
    });
    check('보안 질문으로 비밀번호 재설정', reset.status === 200 && reset.data.ok === true,
      'status=' + reset.status);

    const relogin = await call('POST', '/api/auth/login', { email: USER.email, password: 'resetpass11' });
    check('재설정된 비밀번호로 로그인', relogin.status === 200, 'status=' + relogin.status);

    /* 11. 재설정 시 기존 세션 만료 */
    const stale = await call('GET', '/api/auth/me', undefined, userCookie);
    check('재설정 후 이전 세션 무효', stale.data && stale.data.user === null,
      JSON.stringify(stale.data));

    /* 12. 관리자 조회 — 계정/기록이 DB에 남는지 */
    const users = await call('GET', '/api/users', undefined, relogin.cookie);
    check('관리자 계정 목록 조회', users.status === 200 && Array.isArray(users.data.users) &&
      users.data.users.some(u => u.email === USER.email), 'count=' + (users.data.users || []).length);

    const logs = await call('GET', '/api/logs?limit=200', undefined, relogin.cookie);
    const actions = (logs.data.logs || []).map(l => l.action);
    check('인증 기록 저장 (가입/로그인/재설정)', logs.status === 200 &&
      ['signup', 'login', 'password_reset'].every(a => actions.includes(a)),
      actions.slice(0, 8).join(','));

    /* 13. 비관리자 접근 거부 */
    const second = await call('POST', '/api/auth/signup', {
      name: '운영자', email: 'operator' + stamp + '@example.com', password: 'operator12',
      question: '좋아하는 음식은?', answer: '김밥'
    });
    const secondVerify = await call('POST', '/api/auth/verify', {
      email: 'operator' + stamp + '@example.com', code: second.data.devCode
    });
    const secondRole = secondVerify.data && secondVerify.data.user && secondVerify.data.user.role;
    check('두 번째 가입자는 operator', secondRole === 'operator', secondRole);
    const forbidden = await call('GET', '/api/users', undefined, secondVerify.cookie);
    check('비관리자 계정 목록 거부 (403)', forbidden.status === 403, 'status=' + forbidden.status);

    /* 13-b. 감지·경보 이벤트 저장 */
    const noAuth = await call('GET', '/api/events');
    check('이벤트 조회는 로그인 필요 (401)', noAuth.status === 401, 'status=' + noAuth.status);

    const saveEvents = await call('POST', '/api/events', {
      events: [
        { message: '[경고] 경계선 밖에 사람 2명이 있습니다.', kind: 'alert', camera: '카메라 1', count: 2 },
        { message: '', kind: 'info' },
        { message: '[안내] 열화상 카메라 연결', kind: 'info', snapshot: 'data:image/png;base64,AAAA' }
      ]
    }, relogin.cookie);
    check('이벤트 저장 (유효 2건 · 빈 메시지 1건 무시)',
      saveEvents.status === 201 && saveEvents.data.saved === 2 && saveEvents.data.skipped === 1,
      JSON.stringify(saveEvents.data));

    const allEvents = await call('GET', '/api/events?limit=10', undefined, relogin.cookie);
    const list = (allEvents.data && allEvents.data.events) || [];
    check('관리자는 전체 기록 조회 (scope=all)', allEvents.data.scope === 'all', allEvents.data.scope);
    check('이벤트 저장 순서·필드 보존',
      list.length === 2 && list[0].message === '[안내] 열화상 카메라 연결' &&
      list[1].kind === 'alert' && list[1].camera === '카메라 1' && list[1].email === USER.email,
      JSON.stringify(list.map(e => e.kind + ':' + e.message.slice(0, 12))));
    check('스냅샷(data URL)은 DB에 저장하지 않음',
      !list[0].payload || list[0].payload.snapshot === undefined,
      JSON.stringify(list[0].payload));

    const ownEvents = await call('GET', '/api/events?limit=10', undefined, secondVerify.cookie);
    check('비관리자는 본인 기록만 조회 (scope=own)',
      ownEvents.data.scope === 'own' && (ownEvents.data.events || []).length === 0,
      ownEvents.data.scope + '/' + (ownEvents.data.events || []).length);

    const stats = await call('GET', '/api/stats', undefined, relogin.cookie);
    const s = stats.data && stats.data.stats;
    check('요약 통계 (계정·기록·경보·오늘)',
      !!s && s.users >= 2 && s.events === 2 && s.alerts === 1 && s.todayEvents === 2 && s.todayAlerts === 1,
      JSON.stringify(s));

    const clearDenied = await call('POST', '/api/events/clear', undefined, secondVerify.cookie);
    check('기록 비우기는 관리자만 (403)', clearDenied.status === 403, 'status=' + clearDenied.status);

    const cleared = await call('POST', '/api/events/clear', undefined, relogin.cookie);
    const afterClear = await call('GET', '/api/events?limit=10', undefined, relogin.cookie);
    check('관리자 기록 비우기',
      cleared.data.deleted === 2 && (afterClear.data.events || []).length === 0,
      'deleted=' + cleared.data.deleted);

    /* 14. 로그아웃 */
    const logout = await call('POST', '/api/auth/logout', undefined, relogin.cookie);
    const afterLogout = await call('GET', '/api/auth/me', undefined, relogin.cookie);
    check('로그아웃 후 세션 제거', logout.status === 200 && afterLogout.data.user === null,
      JSON.stringify(afterLogout.data));

    /* 15. 정적 파일 서빙 + DB 파일 비노출 */
    const indexRes = await fetch(BASE + '/');
    check('index.html 서빙', indexRes.status === 200 &&
      (indexRes.headers.get('content-type') || '').includes('text/html'));
    const dbRes = await fetch(BASE + '/data/beachwatch.db');
    check('DB 파일 외부 비노출 (404)', dbRes.status === 404, 'status=' + dbRes.status);
    const srvRes = await fetch(BASE + '/server.js');
    check('server.js 소스 비노출 (404)', srvRes.status === 404, 'status=' + srvRes.status);
    const jsRes = await fetch(BASE + '/js/bundle.js');
    check('정적 리소스 서빙 (js/bundle.js)', jsRes.status === 200, 'status=' + jsRes.status);
  } catch (err) {
    check('점검 중 예외 없음', false, err.message);
  } finally {
    await stop(proc);
    [dbFile, dbFile + '-wal', dbFile + '-shm'].forEach(f => { if (fs.existsSync(f)) fs.unlinkSync(f); });
  }

  const failed = results.filter(r => !r.ok);
  console.log('\n=== API 점검 결과: ' + (results.length - failed.length) + '/' + results.length + ' 통과 ===');
  if (failed.length) {
    failed.forEach(f => console.log(' - ' + f.name + ' :: ' + f.detail));
    process.exit(1);
  }
  process.exit(0);
})().catch(err => { console.error('점검 스크립트 오류:', err); process.exit(2); });
