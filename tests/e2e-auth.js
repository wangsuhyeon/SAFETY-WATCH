'use strict';

/* ============================================================
   SAFETY WATCH — 계정 기능 E2E 점검 (헤드리스 Chrome)
   ------------------------------------------------------------
   실제 서버(server.js)를 임시 DB로 띄운 뒤 브라우저에서
   회원가입 → 내 계정 → 비밀번호 변경 → 로그아웃 → 비밀번호 찾기
   → 새 비밀번호로 로그인 까지 UI 조작만으로 검증한다.

   준비물: Node.js 18+, Google Chrome(또는 CHROME_PATH), playwright-core
   실행:   node tests/e2e-auth.js
   ============================================================ */

const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');

let chromium;
try { ({ chromium } = require('playwright-core')); }
catch (e) {
  console.error('playwright-core 가 필요합니다:  npm i -D playwright-core');
  process.exit(3);
}

const ROOT = path.join(__dirname, '..');
const PORT = 3138;
const BASE = 'http://127.0.0.1:' + PORT;

const CHROME_CANDIDATES = [
  process.env.CHROME_PATH,
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe'
].filter(Boolean);
const CHROME = CHROME_CANDIDATES.find(p => fs.existsSync(p));

const results = [];
function check(name, ok, detail) {
  results.push({ name, ok: !!ok, detail: detail || '' });
  console.log((ok ? '  [PASS] ' : '  [FAIL] ') + name + (detail ? '  → ' + detail : ''));
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
  if (!CHROME) { console.error('Chrome/Edge 실행 파일을 찾을 수 없습니다. CHROME_PATH 로 지정하세요.'); process.exit(3); }

  const dbFile = path.join(os.tmpdir(), 'beachwatch-e2e-' + Date.now() + '.db');
  const proc = spawn(process.execPath, [path.join(ROOT, 'server.js')], {
    env: { ...process.env, PORT: String(PORT), BW_DB: dbFile },
    stdio: ['ignore', 'pipe', 'pipe']
  });
  let stderr = '';
  proc.stderr.on('data', d => { stderr += d; });

  let ready = false;
  for (let i = 0; i < 50 && !ready; i++) {
    try { ready = (await fetch(BASE + '/api/health')).ok; }
    catch (e) { await new Promise(r => setTimeout(r, 200)); }
  }
  if (!ready) {
    console.error('서버 기동 실패\n' + stderr);
    await stop(proc);
    process.exit(2);
  }

  const EMAIL = 'ui-check@example.com';
  const PASSWORD = 'beachwatch12';
  const NEW_PASSWORD = 'beachwatch34';
  const ANSWER = 'East Sea';
  let QUESTION = '';

  const browser = await chromium.launch({ executablePath: CHROME, headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  const pageErrors = [];
  page.on('pageerror', e => pageErrors.push(String(e)));
  page.on('console', m => { if (m.type() === 'error') pageErrors.push('console: ' + m.text()); });

  await page.goto(BASE + '/', { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForFunction(() => window.BeachWatch && window.BeachWatch.state, null, { timeout: 60000 });
  await page.waitForFunction(() => window.AuthUI && window.AuthUI.isReady(), null, { timeout: 20000 });

  try {
    /* 0. 다국어 사전 자가 진단 (새 계정 문자열 포함) */
    const st = await page.evaluate(() => window.BeachWatch.selfTest());
    check('SelfTest 통과 (' + st.passed + '/' + st.total + ')', st.failures.length === 0,
      st.failures.slice(0, 3).join(' | '));

    /* 1. 게스트 상태 */
    const guest = await page.evaluate(() => ({
      user: window.AuthUI.state.user,
      label: document.querySelector('#authButtonLabel').textContent
    }));
    check('초기 상태는 게스트', guest.user === null, JSON.stringify(guest));

    /* 2. 회원가입 UI — 가입하면 바로 로그인된다 */
    await page.click('#authButton');
    check('계정 다이얼로그 열림', await page.isVisible('#authDialog'));
    await page.click('#authTabSignup');
    QUESTION = (await page.textContent('#signupQuestion option[value=authQuestionPet]')).trim();
    await page.fill('#signupName', 'UI 점검자');
    await page.fill('#signupEmail', EMAIL);
    await page.fill('#signupPassword', PASSWORD);
    await page.fill('#signupPasswordConfirm', PASSWORD + '-오타');
    await page.waitForFunction(() => document.querySelector('#signupPwMatch').classList.contains('different'),
      null, { timeout: 4000 });
    const mismatchText = await page.textContent('#signupPwMatch');
    check('비밀번호 불일치 실시간 안내', mismatchText.indexOf('다릅니다') >= 0, mismatchText);
    await page.fill('#signupPasswordConfirm', PASSWORD);
    await page.waitForFunction(() => document.querySelector('#signupPwMatch').classList.contains('same'),
      null, { timeout: 4000 });
    check('일치 시 안내로 전환', true);
    await page.selectOption('#signupQuestion', 'authQuestionPet');
    await page.fill('#signupAnswer', ANSWER);
    await page.click('#signupSubmit');
    await page.waitForFunction(
      () => window.AuthUI.state.user && window.AuthUI.state.user.email === 'ui-check@example.com',
      null, { timeout: 8000 }
    );

    const afterSignup = await page.evaluate(() => ({
      user: window.AuthUI.state.user,
      accountVisible: !document.querySelector('#authViewAccount').hidden,
      name: document.querySelector('#accountName').textContent,
      question: document.querySelector('#accountQuestion').textContent,
      created: document.querySelector('#accountCreated').textContent,
      roleBadge: document.querySelector('#accountRole')
    }));
    check('가입 후 자동 로그인', !!(afterSignup.user && afterSignup.user.email === EMAIL),
      JSON.stringify(afterSignup.user && afterSignup.user.email));
    check('내 계정 화면에 이름·보안질문 표시',
      afterSignup.accountVisible && afterSignup.name === 'UI 점검자' &&
      afterSignup.question === QUESTION,
      JSON.stringify({ name: afterSignup.name, question: afterSignup.question }));
    check('프로필에 역할 배지 없음 (관리자 문구 삭제)', afterSignup.roleBadge === null, '');
    check('가입일 표시 (DB 값)', afterSignup.created && afterSignup.created.length > 0, afterSignup.created);

    /* 3. 헤더 버튼이 사용자 이름으로 바뀐다 */
    const headerLabel = await page.textContent('#authButtonLabel');
    check('헤더 버튼에 사용자 이름', headerLabel.trim() === 'UI 점검자', headerLabel);

    /* 4. DB 저장 확인 (관리자 API — 첫 가입자이므로 admin) */
    const users = await page.evaluate(async () => (await fetch('/api/users')).json());
    const saved = (users.users || []).find(u => u.email === EMAIL);
    check('DB(users 테이블)에 계정 저장', !!saved && saved.role === 'admin' && saved.question === QUESTION,
      JSON.stringify(saved && { role: saved.role, question: saved.question }));

    /* 4-b. 감지·경보 이벤트가 DB에 저장되고 계정 화면에 보인다 */
    const wired = await page.evaluate(() => ({
      module: typeof window.BeachWatchEvents === 'object',
      wrapped: typeof window.pushEvent === 'function'
    }));
    check('이벤트 저장 모듈 연결', wired.module && wired.wrapped, JSON.stringify(wired));

    await page.evaluate(() => {
      window.pushEvent('[E2E 경고] 경계선 밖에 사람 2명이 있습니다.', 'alert', { camera: '카메라 1', count: 2 });
      window.pushEvent('[E2E 안내] 열화상 카메라 연결', 'info', { camera: '열화상 센서', snapshot: 'data:image/png;base64,AAAA' });
    });

    /* 앱이 만든 다른 이벤트가 앞에 쌓여 있을 수 있으므로 큐를 모두 비운다. */
    const flushed = await page.evaluate(async () => {
      for (let i = 0; i < 20; i++) {
        await window.BeachWatchEvents.flush();
        if (!window.BeachWatchEvents.queue().length) break;
      }
      return window.BeachWatchEvents.stats();
    });
    check('이벤트가 서버로 전송됨', flushed.sent >= 2 && flushed.dropped === 0, JSON.stringify(flushed));

    let storedEvent = null;
    for (let i = 0; i < 20 && !storedEvent; i++) {
      const payload = await page.evaluate(async () => (await fetch('/api/events?limit=1')).json());
      const first = (payload.events || [])[0];
      if (first && first.message === '[E2E 안내] 열화상 카메라 연결') storedEvent = first;
      else await new Promise(r => setTimeout(r, 200));
    }
    check('DB 저장 내용 확인 (경보 포함 · 스냅샷 제외)',
      !!storedEvent && storedEvent.kind === 'info' &&
      JSON.stringify(storedEvent.payload || {}).indexOf('base64') === -1,
      JSON.stringify(storedEvent && { kind: storedEvent.kind, camera: storedEvent.camera }));

    const alertsInDb = await page.evaluate(async () => {
      const payload = await fetch('/api/events?limit=20').then(r => r.json());
      return (payload.events || []).filter(e => e.kind === 'alert' &&
        e.message.indexOf('[E2E 경고]') === 0).length;
    });
    check('경보 이벤트도 DB에 저장', alertsInDb >= 1, 'alert=' + alertsInDb);

    await page.click('#eventsRefresh');
    await page.waitForFunction(
      () => Array.from(document.querySelectorAll('#accountEvents .auth-record'))
        .some(r => r.textContent.indexOf('[E2E 경고]') >= 0),
      null, { timeout: 8000 }
    );
    const records = await page.evaluate(() => ({
      rows: Array.from(document.querySelectorAll('#accountEvents .auth-record')).map(r => r.textContent),
      alerts: document.querySelector('#statAlerts').textContent,
      events: document.querySelector('#statEvents').textContent,
      users: document.querySelector('#statUsers').textContent,
      scope: document.querySelector('#accountRecordScope').textContent,
      accountsVisible: !document.querySelector('#accountsSection').hidden,
      accountRows: document.querySelectorAll('#accountUsers .auth-record').length
    }));
    check('계정 화면에 저장된 기록 표시', records.rows.some(t => t.indexOf('[E2E 경고]') >= 0),
      (records.rows[0] || '').slice(0, 60));
    check('요약 통계 표시 (계정·기록·경보)',
      Number(records.alerts) >= 1 && Number(records.events) >= 2 && Number(records.users) >= 1,
      JSON.stringify({ alerts: records.alerts, events: records.events, users: records.users }));
    check('관리자에게 전체 범위·가입 계정 목록 표시',
      records.accountsVisible && records.accountRows >= 1,
      JSON.stringify({ scope: records.scope, rows: records.accountRows }));

    /* 5. 비밀번호 변경 */
    await page.fill('#pwCurrent', PASSWORD);
    await page.fill('#pwNew', NEW_PASSWORD);
    await page.click('#pwSubmit');
    await page.waitForFunction(
      () => document.querySelector('#authNotice').classList.contains('ok'),
      null, { timeout: 8000 }
    );
    check('비밀번호 변경 성공 안내', true);

    const logs1 = await page.evaluate(async () => (await fetch('/api/logs?limit=50')).json());
    const actions = (logs1.logs || []).map(l => l.action);
    check('인증 기록 저장 (signup/login/password_change)',
      ['signup', 'password_change'].every(a => actions.includes(a)),
      actions.slice(0, 6).join(','));

    /* 6. 로그아웃 */
    await page.click('#authLogout');
    await page.waitForFunction(() => window.AuthUI.state.user === null, null, { timeout: 8000 });
    const logoutLabel = await page.textContent('#authButtonLabel');
    check('로그아웃 후 게스트로 복귀', logoutLabel.trim().length > 0 &&
      (await page.evaluate(() => window.AuthUI.state.user === null)), logoutLabel);

    /* 7. 비밀번호 찾기 (보안 질문) */
    await page.click('#authTabLogin');
    await page.click('#authForgot');
    await page.fill('#resetEmail', EMAIL);
    await page.click('#resetFind');
    await page.waitForFunction(() => !document.querySelector('#resetStep2Form').hidden, null, { timeout: 8000 });
    const shownQuestion = await page.textContent('#resetQuestionText');
    check('보안 질문 표시', shownQuestion.trim() === QUESTION, shownQuestion);

    await page.fill('#resetAnswer', ANSWER);
    await page.fill('#resetNewPassword', 'resetpass123');
    await page.click('#resetSubmit');
    await page.waitForFunction(
      () => document.querySelector('#authNotice').classList.contains('ok'),
      null, { timeout: 8000 }
    );
    check('보안 질문으로 비밀번호 재설정', await page.isVisible('#authLoginForm'));

    /* 8. 재설정한 비밀번호로 로그인 */
    await page.fill('#loginEmail', EMAIL);
    await page.fill('#loginPassword', 'resetpass123');
    await page.click('#loginSubmit');
    await page.waitForFunction(
      () => window.AuthUI.state.user && window.AuthUI.state.user.email === 'ui-check@example.com',
      null, { timeout: 8000 }
    );
    check('재설정 비밀번호로 로그인 성공', true);

    const logs2 = await page.evaluate(async () => (await fetch('/api/logs?limit=50')).json());
    const actions2 = (logs2.logs || []).map(l => l.action);
    check('재설정 후 로그인 기록 저장', actions2.includes('password_reset') && actions2.includes('login'),
      actions2.slice(0, 5).join(','));

    /* 9. 틀린 비밀번호는 거부 */
    await page.click('#authLogout');
    await page.waitForFunction(() => window.AuthUI.state.user === null, null, { timeout: 8000 });
    await page.fill('#loginEmail', EMAIL);
    await page.fill('#loginPassword', 'definitely-wrong');
    await page.click('#loginSubmit');
    await page.waitForFunction(
      () => document.querySelector('#loginError').classList.contains('on'),
      null, { timeout: 8000 }
    );
    const loginError = await page.textContent('#loginError');
    check('잘못된 비밀번호 오류 안내', loginError.trim().length > 0, loginError);

    /* 10. 언어를 바꿔도 계정 화면 문구가 따라온다 */
    await page.evaluate(() => window.applyLanguage('en'));
    const enLabel = await page.textContent('#authButtonLabel');
    const enForgot = await page.textContent('#authForgot');
    check('영어 전환 시 계정 문구 번역', enLabel.trim() === 'Sign in' && /password/i.test(enForgot),
      enLabel + ' / ' + enForgot);
    await page.evaluate(() => window.applyLanguage('ko'));

    /* 11. 치명적 오류 없음 */
    const fatal = pageErrors.filter(e => !/Failed to load resource|net::ERR_ABORTED|tensorflow|tfjs|favicon|formsubmit/i.test(e));
    check('콘솔/페이지 치명 오류 없음', fatal.length === 0, fatal.slice(0, 3).join(' | '));
  } catch (err) {
    check('E2E 중 예외 없음', false, err.message);
  } finally {
    await browser.close();
    await stop(proc);
    [dbFile, dbFile + '-wal', dbFile + '-shm'].forEach(f => { if (fs.existsSync(f)) fs.unlinkSync(f); });
  }

  const failed = results.filter(r => !r.ok);
  console.log('\n=== 계정 E2E 결과: ' + (results.length - failed.length) + '/' + results.length + ' 통과 ===');
  if (failed.length) {
    failed.forEach(f => console.log(' - ' + f.name + ' :: ' + f.detail));
    process.exit(1);
  }
  process.exit(0);
})().catch(err => { console.error('E2E 스크립트 오류:', err); process.exit(2); });
