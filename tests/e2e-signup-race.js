'use strict';

/* ============================================================
   SAFETY WATCH — 회원가입 경합(SQLITE_BUSY) E2E 점검
   ------------------------------------------------------------
   증상: 회원가입 시 "서버 오류가 발생했습니다. 잠시 후 다시 시도하세요."
   원인 가설: node:sqlite 는 기본 busy_timeout = 0 이라, 같은 DB 파일을
   쓰는 제2 프로세스(npm test 서버, 두 번째 server.js, 동기화 도구 등)가
   쓰기 잠금을 잡고 있는 순간의 쓰기가 즉시 "database is locked"로 실패한다.
   - users INSERT 실패 → 409 오안내(이미 가입된 이메일)
   - 세션 INSERT / BEGIN IMMEDIATE 실패 → 500 SERVER_ERROR → 화면에 서버 오류 문구

   점검 방식
   (1) 결정적(deterministic) 잠금 점검:
       제2 프로세스가 쓰기 잠금을 잡은 채 유지하는 동안 회원가입을 요청한다.
       - 수정 전(busy_timeout=0): 즉시 "database is locked" → HTTP 500 (재현)
       - 수정 후(busy_timeout=5000): 잠금이 풀릴 때까지 기다렸다가 201
   (2) 확률적(realistic) 부하 점검:
       제2 프로세스들이 실제 두 번째 서버 수준의 간헐적 쓰기(쓰기 1회 +
       1~4ms 휴식)를 하는 동안 API 8건 + 실제 헤드리스 Chrome UI 가입을
       수행한다. 통과 기준: 모든 가입 성공, 서버 오류 문구 미발생.

   실행: npm run test:race   (또는 node tests/e2e-signup-race.js)
   원인 재현용 서버 지정: BW_RACE_SERVER=... (busy_timeout 없는 사본)
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
const PORT = 3142;
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

/* 제2 프로세스: 실제 두 번째 서버/테스트 프로세스 수준의 밀도로
   같은 DB 에 간헐적 쓰기(쓰기 1회 + 1~4ms 휴식).
   - 잠금 충돌은 드물지 않게 일어나지만, 상대가 "무한 재시도 스핀"이 아니므로
     busy_timeout 을 적용한 서버는 잠시 기다렸다 쓰기 잠금을 정상 확보할 수 있다. */
const HAMMER_SRC = `
const { DatabaseSync } = require('node:sqlite');
const db = new DatabaseSync(process.argv[1]);
db.exec('CREATE TABLE IF NOT EXISTS hammer (id INTEGER PRIMARY KEY AUTOINCREMENT, v TEXT)');
let n = 0;
function sleep(ms) { const t = Date.now() + ms; while (Date.now() < t) {} }
for (;;) {
  try {
    db.exec("INSERT INTO hammer(v) VALUES('x')");
    if (++n % 3 === 0) db.exec('DELETE FROM hammer');
  } catch (e) { /* busy: 잠시 후 재시도 */ }
  sleep(1 + Math.floor(Math.random() * 4));
}
`;

/* 결정적 잠금 점검용 제2 프로세스: stdin 명령으로 쓰기 잠금을 잡고/놓는다.
   - 'hold'    : BEGIN IMMEDIATE + INSERT 로 쓰기 잠금을 잡은 뒤 'holding' 통보
   - 'release' : COMMIT 으로 잠금 해제한 뒤 'released' 통보
   stdin/stdout 한 줄 프로토콜로 동기화하므로 경합 재현이 결정적이다. */
const HOLDER_SRC = `
const { DatabaseSync } = require('node:sqlite');
const db = new DatabaseSync(process.argv[1]);
db.exec('PRAGMA busy_timeout = 5000');
db.exec('CREATE TABLE IF NOT EXISTS lockprobe (id INTEGER PRIMARY KEY, v TEXT)');
function readLine() {
  const buf = Buffer.alloc(1);
  let line = '';
  for (;;) {
    const n = require('fs').readSync(0, buf, 0, 1, null);
    if (n === 0) return null;
    const ch = buf.toString('utf8', 0, 1);
    if (ch === '\\n') return line;
    line += ch;
  }
}
process.stdout.write('ready\\n');
for (;;) {
  const cmd = readLine();
  if (cmd === null || cmd === 'exit') break;
  if (cmd === 'hold') {
    db.exec('BEGIN IMMEDIATE');
    db.exec("INSERT INTO lockprobe(v) VALUES('hold')");
    process.stdout.write('holding\\n');
  } else if (cmd === 'release') {
    db.exec('COMMIT');
    process.stdout.write('released\\n');
  }
}
`;

function waitLine(proc, want, timeoutMs) {
  return new Promise((resolve, reject) => {
    let buf = '';
    const onData = d => {
      buf += d;
      let idx;
      while ((idx = buf.indexOf('\n')) >= 0) {
        const line = buf.slice(0, idx).trim();
        buf = buf.slice(idx + 1);
        if (line === want) { cleanup(); resolve(line); return; }
      }
    };
    const timer = setTimeout(() => { cleanup(); reject(new Error('대기 시간 초과: ' + want)); }, timeoutMs || 10000);
    function cleanup() {
      clearTimeout(timer);
      proc.stdout.removeListener('data', onData);
    }
    proc.stdout.on('data', onData);
  });
}

(async () => {
  if (!CHROME) { console.error('Chrome/Edge 실행 파일을 찾을 수 없습니다. CHROME_PATH 로 지정하세요.'); process.exit(3); }

  const dbFile = path.join(os.tmpdir(), 'beachwatch-race-' + Date.now() + '.db');
  const cleanup = [dbFile, dbFile + '-wal', dbFile + '-shm'];
  /* BW_RACE_SERVER 로 원인 재현용 서버(예: busy_timeout 없는 사본)를 지정할 수 있다 */
  const serverFile = process.env.BW_RACE_SERVER || path.join(ROOT, 'server.js');

  const server = spawn(process.execPath, [serverFile], {
    env: { ...process.env, PORT: String(PORT), BW_DB: dbFile },
    stdio: ['ignore', 'pipe', 'pipe']
  });
  let stderr = '';
  server.stderr.on('data', d => { stderr += d; });

  let ready = false;
  for (let i = 0; i < 50 && !ready; i++) {
    try { ready = (await fetch(BASE + '/api/health')).ok; }
    catch (e) { await new Promise(r => setTimeout(r, 200)); }
  }
  if (!ready) {
    console.error('서버 기동 실패\n' + stderr);
    await stop(server);
    process.exit(2);
  }

  const signupBody = (tag, i) => JSON.stringify({
    name: '경합 점검자' + i,
    email: tag + Date.now() + '.' + i + '@example.com',
    password: 'beachwatch12',
    passwordConfirm: 'beachwatch12',
    question: '가장 좋아하는 바다는?',
    answer: '동해'
  });

  let holder = null;
  let browser = null;
  const hammers = [];
  try {
    /* ── (1) 결정적 잠금 점검 ─────────────────────────────────
       제2 프로세스가 쓰기 잠금을 350ms 동안 유지하는 동안 가입을 요청한다.
       busy_timeout=0 이면 즉시 실패(500), 적용되면 대기 후 성공(201). */
    holder = spawn(process.execPath, ['-e', HOLDER_SRC, dbFile], { stdio: ['pipe', 'pipe', 'ignore'] });
    await waitLine(holder, 'ready', 15000);
    holder.stdin.write('hold\n');
    await waitLine(holder, 'holding', 15000);

    const held = fetch(BASE + '/api/auth/signup', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: signupBody('locked', 0)
    });
    const holdStart = Date.now();
    await new Promise(r => setTimeout(r, 350));   /* 잠금 유지 중 두 번째 프로세스가 대기하도록 */
    holder.stdin.write('release\n');
    await waitLine(holder, 'released', 15000);

    const heldRes = await held;
    const heldData = await heldRes.json().catch(() => null);
    check('쓰기 잠금 유지 중 회원가입 성공(대기 후 201)', heldRes.status === 201,
      'HTTP ' + heldRes.status + ' ' + JSON.stringify(heldData && { code: heldData.code, message: heldData.message }) +
      ' (잠금 ' + (Date.now() - holdStart) + 'ms 대기)');

    holder.stdin.write('exit\n');
    await stop(holder);
    holder = null;

    /* ── (2) 확률적 부하: 실제 두 번째 서버 수준의 간헐적 쓰기 ── */
    hammers.push(
      spawn(process.execPath, ['-e', HAMMER_SRC, dbFile], { stdio: 'ignore' }),
      spawn(process.execPath, ['-e', HAMMER_SRC, dbFile], { stdio: 'ignore' }),
      spawn(process.execPath, ['-e', HAMMER_SRC, dbFile], { stdio: 'ignore' })
    );

    /* 2-1) API 레벨: 경합 중에도 모든 가입이 201 이어야 한다 */
    const apiFailures = [];
    for (let i = 0; i < 8; i++) {
      const res = await fetch(BASE + '/api/auth/signup', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: signupBody('race', i)
      });
      let data = null;
      try { data = await res.json(); } catch (e) { data = null; }
      if (res.status !== 201 || !data || data.ok !== true) {
        apiFailures.push('#' + i + ' HTTP ' + res.status + ' ' + JSON.stringify(data && { code: data.code, message: data.message }));
      }
    }
    check('경합 중 API 회원가입 8건 전부 성공', apiFailures.length === 0,
      apiFailures.slice(0, 3).join(' | ') || '모두 201');

    /* 2-2) UI 레벨: 실제 브라우저에서 회원가입 — 보고된 오류 문구 재현 여부 */
    browser = await chromium.launch({ executablePath: CHROME, headless: true, args: ['--no-sandbox'] });
    const page = await browser.newPage();
    await page.goto(BASE + '/', { waitUntil: 'domcontentloaded', timeout: 60000 });
    await page.waitForFunction(() => window.AuthUI && window.AuthUI.isReady(), null, { timeout: 20000 });
    await page.click('#authButton');
    await page.click('#authTabSignup');

    const seenErrors = [];
    let signedUp = false;
    for (let i = 0; i < 6 && !signedUp; i++) {
      await page.fill('#signupName', 'UI 경합자' + i);
      await page.fill('#signupEmail', 'uirace' + Date.now() + '.' + i + '@example.com');
      await page.fill('#signupPassword', 'beachwatch12');
      await page.fill('#signupPasswordConfirm', 'beachwatch12');
      await page.selectOption('#signupQuestion', 'authQuestionPet');
      await page.fill('#signupAnswer', '동해');
      await page.click('#signupSubmit');
      try {
        await page.waitForFunction(
          () => window.AuthUI.state.user || document.querySelector('#signupError').classList.contains('on'),
          null, { timeout: 15000 }
        );
      } catch (e) { /* 타임아웃 */ }

      const outcome = await page.evaluate(() => ({
        user: window.AuthUI.state.user ? window.AuthUI.state.user.email : null,
        error: document.querySelector('#signupError').textContent.trim()
      }));
      if (outcome.error) seenErrors.push(outcome.error);
      if (outcome.user) signedUp = true;
      else {
        /* 실패 → 게스트 상태 그대로이므로 바로 재시도 */
        await page.click('#authTabSignup').catch(() => {});
      }
    }

    check('경합 중 브라우저 UI 회원가입 성공', signedUp);
    check('보고된 서버 오류 문구 미발생', seenErrors.length === 0,
      seenErrors.slice(0, 2).join(' | ') || '오류 없음');
    if (seenErrors.some(t => t.indexOf('서버 오류가 발생했습니다') >= 0)) {
      check('재현 확인(서버 오류 문구)', false, '사용자 보고 증상과 동일하게 재현됨');
    }
  } catch (err) {
    check('점검 중 예외 없음', false, err.message);
  } finally {
    if (holder) { try { holder.stdin.write('exit\n'); } catch (e) {} await stop(holder); }
    await Promise.all(hammers.map(stop));
    if (browser) await browser.close();
    await stop(server);
    cleanup.forEach(f => { if (fs.existsSync(f)) fs.unlinkSync(f); });
  }

  if (stderr.trim()) {
    console.log('\n--- 서버 stderr (진단) ---');
    console.log(stderr.trim().split('\n').slice(0, 12).join('\n'));
  }

  const failed = results.filter(r => !r.ok);
  console.log('\n=== 회원가입 경합 E2E 결과: ' + (results.length - failed.length) + '/' + results.length + ' 통과 ===');
  if (failed.length) {
    failed.forEach(f => console.log(' - ' + f.name + ' :: ' + f.detail));
    process.exit(1);
  }
  process.exit(0);
})().catch(err => { console.error('경합 점검 스크립트 오류:', err); process.exit(2); });
