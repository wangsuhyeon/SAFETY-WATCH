'use strict';
/* 배포 사이트 가입 흐름 재현 점검 (일회성) */
const fs = require('fs');
let chromium;
try { ({ chromium } = require('playwright-core')); } catch (e) { console.error('playwright-core 필요'); process.exit(3); }

const CHROME_CANDIDATES = [
  process.env.CHROME_PATH,
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe'
].filter(Boolean);
const CHROME = CHROME_CANDIDATES.find(p => fs.existsSync(p));

(async () => {
  const BASE = 'https://safety-watch-oh5o.onrender.com';
  const browser = await chromium.launch({ executablePath: CHROME, headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', e => errors.push('pageerror: ' + String(e).slice(0, 200)));
  page.on('console', m => { if (m.type() === 'error') errors.push('console: ' + m.text().slice(0, 200)); });

  await page.goto(BASE + '/', { waitUntil: 'domcontentloaded', timeout: 90000 });
  await page.waitForFunction(() => window.AuthUI && window.AuthUI.isReady(), null, { timeout: 30000 });

  await page.click('#authButton');
  await page.click('#authTabSignup');
  await page.fill('#signupName', '배포 재현점검');
  await page.fill('#signupEmail', 'deploy-repro@example.com');
  await page.fill('#signupPassword', 'repro12345');
  await page.fill('#signupPasswordConfirm', 'repro12345');
  await page.selectOption('#signupQuestion', 'authQuestionPet');
  await page.fill('#signupAnswer', '재현');

  const respPromise = page.waitForResponse(r => r.url().includes('/api/auth/signup'), { timeout: 30000 })
    .catch(() => null);
  await page.click('#signupSubmit');
  const resp = await respPromise;
  console.log('signup 응답:', resp ? resp.status() + ' ' + JSON.stringify((await resp.json().catch(() => null)) || {}).slice(0, 200) : '응답 없음(30초 초과)');

  await page.waitForTimeout(2000);
  const state = await page.evaluate(() => ({
    user: window.AuthUI.state.user,
    verifyVisible: !document.querySelector('#authViewVerify').hidden,
    verifyEmail: (document.querySelector('#verifyEmailText') || {}).textContent,
    notice: (document.querySelector('#authNotice') || {}).textContent,
    signupError: (document.querySelector('#signupError') || {}).textContent,
    submitDisabled: document.querySelector('#signupSubmit') && document.querySelector('#signupSubmit').disabled
  }));
  console.log('화면 상태:', JSON.stringify(state, null, 2));
  console.log('콘솔/페이지 오류:', errors.length ? errors.slice(0, 5).join(' | ') : '없음');
  await browser.close();
})().catch(e => { console.error('점검 오류:', e.message); process.exit(1); });
