/*
 * Beach Watch — E2E 점검 (이메일 발송 검증 · FormSubmit)
 * ==================================================================
 * 무엇을 검사하나
 *   1) 앱을 실제 헤드리스 Chrome 으로 열어 초기화 오류가 없는지
 *   2) 내장 자가진단(SelfTest) 전 항목 통과 여부
 *   3) 수신자(이름 + 이메일)를 UI로 "등록"만 하면 이메일이 "발송"되는지
 *      — Service ID/Public Key 같은 추가 입력 없이 동작함을 확인한다.
 *      — fetch 를 가로채(스텁) FormSubmit 로 나가는 POST 를 검증하므로
 *        실제 자격 증명/인터넷 없이도 파이프라인 전체를 확인할 수 있다.
 *
 * 준비물
 *   - Node.js 18+
 *   - Google Chrome (또는 CHROME_PATH 환경변수로 실행 파일 경로 지정)
 *   - playwright-core :  npm i -D playwright-core
 *
 * 실행
 *   node tests/e2e-email.js
 * ==================================================================
 */
'use strict';

const http = require('http');
const fs = require('fs');
const path = require('path');

let chromium;
try { ({ chromium } = require('playwright-core')); }
catch (e) {
  console.error('playwright-core 가 필요합니다:  npm i -D playwright-core');
  process.exit(3);
}

const ROOT = process.argv[2] || path.join(__dirname, '..');
const CHROME_CANDIDATES = [
  process.env.CHROME_PATH,
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe'
].filter(Boolean);
const CHROME = CHROME_CANDIDATES.find(p => fs.existsSync(p));

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml', '.ico': 'image/x-icon', '.txt': 'text/plain; charset=utf-8'
};

function startServer(root) {
  return new Promise(resolve => {
    const server = http.createServer((req, res) => {
      let rel = decodeURIComponent(req.url.split('?')[0]);
      if (rel === '/' || rel === '') rel = '/index.html';
      const file = path.join(root, rel);
      if (!file.startsWith(root)) { res.writeHead(403); res.end('forbidden'); return; }
      fs.readFile(file, (err, data) => {
        if (err) { res.writeHead(404); res.end('not found'); return; }
        res.writeHead(200, { 'Content-Type': MIME[path.extname(file).toLowerCase()] || 'application/octet-stream' });
        res.end(data);
      });
    });
    server.listen(0, '127.0.0.1', () => resolve(server));
  });
}

const results = [];
function check(name, ok, detail) {
  results.push({ name, ok: !!ok, detail: detail || '' });
  console.log((ok ? '  [PASS] ' : '  [FAIL] ') + name + (detail ? '  → ' + detail : ''));
}

(async () => {
  if (!CHROME) { console.error('Chrome/Edge 실행 파일을 찾을 수 없습니다. CHROME_PATH 로 지정하세요.'); process.exit(3); }

  const server = await startServer(ROOT);
  const base = 'http://127.0.0.1:' + server.address().port;
  console.log('serving', ROOT, 'at', base);

  const browser = await chromium.launch({ executablePath: CHROME, headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();

  const pageErrors = [];
  page.on('pageerror', e => pageErrors.push(String(e)));
  page.on('console', m => { if (m.type() === 'error') pageErrors.push('console: ' + m.text()); });

  // 앱 스크립트보다 먼저: FormSubmit fetch 가로채기 + Notification 무력화
  await page.addInitScript(() => {
    window.__emailPosts = [];
    const origFetch = window.fetch ? window.fetch.bind(window) : null;
    window.fetch = function (url, opts) {
      const u = typeof url === 'string' ? url : (url && url.url) || '';
      if (u.indexOf('formsubmit.co') !== -1) {
        let body = null;
        try { body = JSON.parse((opts && opts.body) || '{}'); } catch (e) { body = {}; }
        window.__emailPosts.push({ url: u, body });
        return Promise.resolve({ ok: true, status: 200, json: () => Promise.resolve({ success: 'true' }) });
      }
      return origFetch ? origFetch(url, opts) : Promise.reject(new Error('no fetch'));
    };
    function FakeNotification() {}
    FakeNotification.permission = 'denied';
    FakeNotification.requestPermission = () => Promise.resolve('denied');
    window.Notification = FakeNotification;
  });

  await page.goto(base + '/index.html', { waitUntil: 'domcontentloaded', timeout: 60000 });

  try {
    await page.waitForFunction(() => window.BeachWatch && window.BeachWatch.state, null, { timeout: 60000 });
    check('앱 초기화 (window.BeachWatch 생성)', true);
  } catch (e) {
    check('앱 초기화 (window.BeachWatch 생성)', false, e.message);
    console.log('pageErrors:', pageErrors.join('\n'));
    await browser.close(); server.close(); process.exit(1);
  }

  // 1) 내장 자가진단
  const st = await page.evaluate(() => window.BeachWatch.selfTest());
  check('내장 SelfTest 통과 (' + st.passed + '/' + st.total + ')', st.failures.length === 0,
    st.failures.join(' | '));

  // 2) 수신자 등록 (이름 + 이메일만, UI 조작) — Service ID 등 입력 없음
  await page.click('#settingsButton');
  await page.click('#addContact');
  await page.fill('#contactName', 'E2E 담당자');
  await page.fill('#contactEmail', 'e2e@example.com');
  await page.click('#contactSave');

  const contactState = await page.evaluate(() => {
    const c = window.BeachWatch.state.contacts.find(x => x.email === 'e2e@example.com');
    return c ? { name: c.name, email: c.email, onDuty: c.onDuty } : null;
  });
  check('수신자 등록됨 (state.contacts)', contactState && contactState.email === 'e2e@example.com',
    JSON.stringify(contactState));

  // 이메일 발송 준비 상태 (이메일 수신자가 있으면 true — 별도 키 입력 불필요)
  const configured = await page.evaluate(() => window.BeachWatch.emailConfigured());
  check('이메일 발송 준비됨 (수신자만으로 true)', configured === true);

  // 3) 설정의 "테스트 이메일 보내기"
  await page.evaluate(() => { window.__emailPosts.length = 0; });
  await page.click('#emailTestSend');
  await page.waitForFunction(() => window.__emailPosts.length >= 1, null, { timeout: 8000 }).catch(() => {});

  let posts = await page.evaluate(() => window.__emailPosts);
  check('테스트 발송: FormSubmit POST 호출됨', posts.length >= 1, 'posts=' + posts.length);
  if (posts.length) {
    const p = posts[posts.length - 1];
    check('  └ 수신자 이메일로 전송(엔드포인트)',
      p.url.indexOf('/ajax/e2e%40example.com') !== -1 || p.url.indexOf('/ajax/e2e@example.com') !== -1, p.url);
    check('  └ 본문에 to_email 포함', p.body && p.body.to_email === 'e2e@example.com', p.body && p.body.to_email);
  }

  // 4) 실제 경보 경로 (notifyRecipients 와 동일한 sendEmail)
  await page.evaluate(() => { window.__emailPosts.length = 0; });
  await page.evaluate(() => {
    const BW = window.BeachWatch;
    const contact = BW.state.contacts.find(c => c.email === 'e2e@example.com');
    const payload = BW.buildAlertPayload({ name: '카메라 1', zoneMode: 'line' }, 'alert', 2, 4, contact, false);
    return BW.sendEmail(contact, payload);
  });
  await page.waitForFunction(() => window.__emailPosts.length >= 1, null, { timeout: 8000 }).catch(() => {});
  posts = await page.evaluate(() => window.__emailPosts);
  check('경보 경로: sendEmail 이 FormSubmit POST 호출', posts.length >= 1, 'posts=' + posts.length);
  if (posts.length) {
    const p = posts[posts.length - 1];
    check('  └ 경보 본문에 메시지 포함', p.body && p.body.message && p.body.message.length > 0,
      p.body && String(p.body.message).slice(0, 40));
    check('  └ 긴급 발송 제목 설정(_subject)', p.body && !!p.body._subject, p.body && p.body._subject);
  }

  // 5) 치명적 오류 없음
  const fatal = pageErrors.filter(e => !/formsubmit|Failed to load resource|net::ERR_ABORTED|tensorflow|tfjs|favicon/i.test(e));
  check('콘솔/페이지 치명 오류 없음', fatal.length === 0, fatal.join(' | '));

  await browser.close();
  server.close();

  const failed = results.filter(r => !r.ok);
  console.log('\n=== E2E 결과: ' + (results.length - failed.length) + '/' + results.length + ' 통과 ===');
  if (failed.length) {
    console.log('실패 항목:');
    failed.forEach(f => console.log(' - ' + f.name + (f.detail ? ' :: ' + f.detail : '')));
    process.exit(1);
  }
  process.exit(0);
})().catch(err => { console.error('E2E 스크립트 오류:', err); process.exit(2); });
