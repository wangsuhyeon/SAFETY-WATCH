'use strict';

/* ============================================================
   SAFETY WATCH — 배포 환경 E2E 점검
   실행: node tests/e2e-deployed.js https://<주소>.onrender.com
   ------------------------------------------------------------
   배포된 주소에서 다음을 검증한다.
   1. 웹 페이지 · 정적 번들 로드 (아두이노/열화상 Web Serial 연동 코드 포함)
   2. /api/health — SQLite/Postgres DB 연결
   3. 회원가입 → 계정 생성 + 세션 발급 (DB 쓰기)
   4. 정상 로그인
   5. 연결/감지 이벤트가 DB에 저장되는지

   ※ 실제 USB 하드웨어(아두이노/MLX90640)는 브라우저 Web Serial로
     사용자 PC에 직접 연결되므로, 원격 E2E는 "연결 이벤트가 DB에
     기록되는 경로"를 검증한다. 세션 → 기록 조회까지의
     전체 흐름은 로컬 npm test 에서 검증한다.
   ============================================================ */

const BASE = (process.argv[2] || '').replace(/\/+$/, '');
if (!/^https?:\/\//.test(BASE)) {
  console.error('사용법: node tests/e2e-deployed.js https://<배포주소>');
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

/* Render 무료 플랜은 유휴 시 슬립 → 첫 요청이 수십 초 걸릴 수 있다. */
async function warmUp() {
  for (let i = 0; i < 8; i++) {
    try {
      const r = await fetch(BASE + '/api/health', { signal: AbortSignal.timeout(45000) });
      if (r.status < 500) return r;
    } catch (e) { /* 재시도 */ }
    await new Promise(r => setTimeout(r, 3000));
  }
  return null;
}

(async () => {
  console.log('\n=== E2E 점검 대상: ' + BASE + ' ===\n');

  /* 0. 웜업 */
  const warm = await warmUp();
  check('서버 응답 (슬립 해제 포함)', !!warm, warm ? 'HTTP ' + warm.status : '기동 없음');

  /* 1. 정적 페이지 · 아두이노/열화상 연동 코드 */
  try {
    const index = await fetch(BASE + '/', { signal: AbortSignal.timeout(30000) });
    check('웹 페이지 로드 (index.html)', index.status === 200 &&
      (index.headers.get('content-type') || '').includes('text/html'), 'HTTP ' + index.status);

    const bundle = await fetch(BASE + '/js/bundle.js', { signal: AbortSignal.timeout(30000) });
    const js = await bundle.text();
    check('정적 번들 로드 (js/bundle.js)', bundle.status === 200, 'HTTP ' + bundle.status);
    check('아두이노 연동 코드 포함 (Web Serial)',
      js.includes("navigator.serial") && js.includes('ArduinoThermal'),
      js.includes('navigator.serial') ? 'requestPort/연결/해제 경로 있음' : '없음');
    check('열화상(MLX90640) 처리 코드 포함',
      js.includes('MLX90640') || js.includes('heatFrame'), '');

    const eventsJs = await fetch(BASE + '/js/events.js', { signal: AbortSignal.timeout(30000) });
    const evSrc = await eventsJs.text();
    check('이벤트 → DB 저장 연동 로드 (js/events.js)', eventsJs.status === 200 &&
      evSrc.includes('saveEvents') && evSrc.includes('pushEvent'),
      'HTTP ' + eventsJs.status);

    const backendJs = await fetch(BASE + '/js/backend.js', { signal: AbortSignal.timeout(30000) });
    const beSrc = await backendJs.text();
    check('백엔드 API 연동 로드 (js/backend.js · /api/events)', backendJs.status === 200 &&
      beSrc.includes('/api/events'), 'HTTP ' + backendJs.status);
  } catch (err) {
    check('정적 리소스 점검', false, err.message);
  }

  /* 2. DB 헬스 */
  const health = await call('GET', '/api/health');
  check('DB 연결 (sqlite/postgres)', health.status === 200 && health.data && health.data.ok === true &&
    (health.data.db === 'sqlite' || health.data.db === 'postgres'), JSON.stringify(health.data));

  /* 3. 테스트 계정 가입 (DB 쓰기 · 세션 발급) */
  const stamp = Date.now();
  const USER = {
    name: 'E2E 점검봇',
    email: 'e2e-deploy-' + stamp + '@example.com',
    password: 'e2epass1234',
    passwordConfirm: 'e2epass1234',
    question: 'E2E 테스트 질문?',
    answer: '렌더'
  };
  const signup = await call('POST', '/api/auth/signup', USER);
  check('테스트 계정 가입 (계정 생성)', signup.status === 201 && signup.data &&
    signup.data.ok === true && signup.data.user && signup.data.user.email === USER.email,
    'status=' + signup.status);
  check('가입 시 세션 쿠키 발급', /bw_session=/.test(signup.cookie), signup.cookie.slice(0, 40));

  const healthAfterSignup = await call('GET', '/api/health');
  check('DB에 계정 기록 저장',
    healthAfterSignup.data && healthAfterSignup.data.users > (health.data.users || 0),
    'users ' + (health.data.users || 0) + ' → ' + (healthAfterSignup.data && healthAfterSignup.data.users));

  /* 4. 정상 로그인 */
  const login = await call('POST', '/api/auth/login', { email: USER.email, password: USER.password });
  check('가입한 계정으로 로그인 (200)', login.status === 200 && login.data.ok === true &&
    login.data.user && login.data.user.email === USER.email,
    login.status + '/' + (login.data && login.data.code));

  /* 5. 연결/감지 이벤트는 로그인 없이도 기록된다 (계정 연결은 로그인 후) */
  const events = [
    { message: '[E2E] 아두이노(열화상 카메라) 시리얼 포트 연결 — 9600 Baud · 전송률 자동 감지 완료', kind: 'ok', camera: 'MLX90640' },
    { message: '[E2E] 열화상 감지 생체 열원(36.5°C) 감지 (위험 구역 외곽)', kind: 'info', camera: 'MLX90640' },
    { message: '[E2E] [경고] 경계선 밖에 사람 1명이 있습니다.', kind: 'alert', camera: '카메라 1', count: 1 }
  ];
  const save = await call('POST', '/api/events', { events });
  check('연결/감지 이벤트 저장 (3건)', save.status === 201 && save.data.saved === 3,
    JSON.stringify(save.data));

  const failed = results.filter(r => !r.ok);
  console.log('\n=== 결과: ' + (results.length - failed.length) + '/' + results.length + ' 통과' +
    (failed.length ? ' — 실패 항목 있음' : ' — 전부 통과') + ' ===\n');
  console.log('※ 배포 환경에서는 이벤트 조회(로그인 세션)까지는 검증하지 않는다.');
  console.log('  전체 흐름(가입 → 세션 → 기록 지속성)은 로컬 npm test 에서 검증된다.\n');
  if (failed.length) {
    failed.forEach(f => console.log(' - ' + f.name + ' :: ' + f.detail));
    process.exit(1);
  }
})().catch(err => { console.error('점검 스크립트 오류:', err); process.exit(2); });
