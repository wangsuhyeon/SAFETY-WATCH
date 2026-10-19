'use strict';

/* ============================================================
   Beach Watch — 계정 UI (로그인 · 회원가입 · 비밀번호 찾기)
   ------------------------------------------------------------
   · Express API와 SQLite, HttpOnly 세션 쿠키를 사용합니다.
   ============================================================ */

(function () {
  const $ = sel => document.querySelector(sel);

  /* 다국어: bundle.js 의 tr() 이 있으면 그대로 쓰고, 없으면 대체 문구를 쓴다. */
  function tr(key, fallback) {
    try {
      if (typeof window.tr === 'function') {
        const value = window.tr(key);
        if (value && value !== key) return value;
      }
    } catch (e) { /* 사전이 없는 환경 */ }
    return fallback !== undefined ? fallback : key;
  }

  /* 서버 오류 코드 → 화면 문구 키 */
  const ERROR_KEYS = {
    EMAIL_EXISTS: 'errAuthEmailExists',
    INVALID_CREDENTIALS: 'errAuthInvalidCredentials',
    WEAK_PASSWORD: 'errAuthWeakPassword',
    PASSWORD_MISMATCH: 'errAuthPasswordMismatch',
    LOCKED: 'errAuthLocked',
    NOT_FOUND: 'errAuthNotFound',
    BAD_ANSWER: 'errAuthBadAnswer',
    INVALID_EMAIL: 'errAuthInvalidEmail',
    INVALID_NAME: 'errAuthInvalidName',
    INVALID_QUESTION: 'errAuthInvalidQuestion',
    INVALID_ANSWER: 'errAuthInvalidAnswer',
    MISSING: 'errAuthMissing',
    RATE_LIMIT: 'errAuthRateLimit',
    SAME_PASSWORD: 'errAuthSamePassword',
    PAYLOAD_TOO_LARGE: 'errAuthTooLarge',
    SERVER_ERROR: 'errAuthServer',
    BAD_JSON: 'errAuthServer',
    FORBIDDEN: 'errAuthServer',
    SESSION_REQUIRED: 'errAuthSessionRequired',
    NO_SERVER: 'errAuthOffline'
  };

  const PRESET_QUESTIONS = ['authQuestionPet', 'authQuestionFood', 'authQuestionSchool', 'authQuestionTrip', 'authQuestionNick'];

  const state = {
    user: null,
    online: true,
    resetEmail: '',
    resetQuestion: ''
  };

  /* 서버에서 받아 둔 마지막 값 — 언어를 바꿔도 다시 그릴 수 있게 보관한다. */
  const cache = { stats: null, events: null, users: null };

  const els = {};
  let initialized = false;

  /* ── 서버 통신 ─────────────────────────────────────────── */

  async function api(pathname, options) {
    return window.BeachWatchBackend.request(pathname, options);
  }

  function errorText(err) {
    const key = err && ERROR_KEYS[err.code];
    if (key) return tr(key, (err && err.message) || '');
    return (err && err.message) || tr('errAuthServer');
  }

  /* ── 화면 도우미 ───────────────────────────────────────── */

  function notice(message, kind) {
    if (!els.notice) return;
    els.notice.textContent = message || '';
    els.notice.className = 'dialog-error' + (message ? ' on' : '') + (kind === 'ok' ? ' ok' : '');
  }

  function fieldError(element, message) {
    if (!element) return;
    element.textContent = message || '';
    element.classList.toggle('on', !!message);
  }

  function busy(button, isBusy) {
    if (!button) return;
    button.disabled = !!isBusy;
    button.setAttribute('aria-busy', isBusy ? 'true' : 'false');
  }

  function logEvent(text) {
    try {
      if (typeof window.pushEvent === 'function') window.pushEvent(text, 'info');
    } catch (e) { /* 이벤트 로그를 쓸 수 없는 화면 */ }
  }

  function formatDate(value) {
    if (!value) return tr('authNever', '—');
    const date = new Date(value);
    if (isNaN(date.getTime())) return String(value);
    let locale = 'ko-KR';
    try {
      if (typeof window.activeLocale === 'function') locale = window.activeLocale().locale || locale;
    } catch (e) { /* 기본 로케일 */ }
    try {
      return date.toLocaleString(locale, { dateStyle: 'medium', timeStyle: 'short' });
    } catch (e) {
      return date.toLocaleString();
    }
  }

  function showView(which) {
    if (els.viewLogin) els.viewLogin.hidden = which !== 'login';
    if (els.viewAccount) els.viewAccount.hidden = which !== 'account';
    if (els.viewReset) els.viewReset.hidden = which !== 'reset';
    notice('');
    if (which === 'login') showAuthTab('login');
  }

  function showAuthTab(which) {
    const isLogin = which !== 'signup';
    if (els.loginForm) els.loginForm.hidden = !isLogin;
    if (els.signupForm) els.signupForm.hidden = isLogin;
    if (els.tabLogin) {
      els.tabLogin.setAttribute('aria-selected', String(isLogin));
      els.tabLogin.setAttribute('aria-pressed', String(isLogin));
    }
    if (els.tabSignup) {
      els.tabSignup.setAttribute('aria-selected', String(!isLogin));
      els.tabSignup.setAttribute('aria-pressed', String(!isLogin));
    }
    fieldError(els.loginError, '');
    fieldError(els.signupError, '');
    notice('');
  }

  function renderHeader() {
    if (!els.buttonLabel) return;
    if (state.user) {
      els.buttonLabel.removeAttribute('data-i18n');
      els.buttonLabel.textContent = state.user.name;
      if (els.button) els.button.title = state.user.email;
    } else {
      els.buttonLabel.setAttribute('data-i18n', 'authLoginTab');
      els.buttonLabel.textContent = tr('authLoginTab', '로그인');
      if (els.button) els.button.removeAttribute('title');
    }
  }

  function renderAccount() {
    const user = state.user;
    if (!user) return;
    if (els.accountName) els.accountName.textContent = user.name;
    if (els.accountEmail) els.accountEmail.textContent = user.email;
    if (els.accountRole) {
      els.accountRole.textContent = user.role === 'admin'
        ? tr('authRoleAdmin', 'admin')
        : tr('authRoleOperator', 'operator');
      els.accountRole.dataset.role = user.role;
    }
    if (els.accountCreated) els.accountCreated.textContent = formatDate(user.createdAt);
    if (els.accountLastLogin) els.accountLastLogin.textContent = formatDate(user.lastLoginAt);
    if (els.accountQuestion) els.accountQuestion.textContent = user.question || tr('authNever', '—');
  }

  function applyUser(user) {
    state.user = user || null;
    renderHeader();
    if (state.user) {
      renderAccount();
      loadDashboard();
    } else {
      clearDashboard();
    }
  }

  /* ── 계정 화면: 통계 · 저장된 기록 · 가입 계정 ─────────── */

  function renderStats(stats) {
    cache.stats = stats || null;
    const value = (element, number) => { if (element) element.textContent = number == null ? '0' : String(number); };
    const data = stats || {};
    value(els.statUsers, data.users);
    value(els.statEvents, data.events);
    value(els.statAlerts, data.alerts);
    value(els.statToday, data.todayAlerts);
  }

  function renderRecords(events) {
    cache.events = events || [];
    const box = els.accountEvents;
    if (!box) return;
    box.textContent = '';
    cache.events.forEach(entry => {
      const row = document.createElement('div');
      row.className = 'auth-record ' + (entry.kind || 'info');

      const when = document.createElement('time');
      when.textContent = formatDate(entry.createdAt);

      const text = document.createElement('span');
      text.textContent = entry.message;

      row.append(when, text);

      const meta = [];
      if (entry.camera) meta.push(entry.camera);
      if (entry.email) meta.push(entry.email);
      if (meta.length) {
        const small = document.createElement('small');
        small.textContent = meta.join(' · ');
        row.append(small);
      }
      box.append(row);
    });

    if (els.accountEventsEmpty) {
      els.accountEventsEmpty.hidden = cache.events.length > 0;
      els.accountEventsEmpty.textContent = tr('authRecordsEmpty');
    }
  }

  function renderUsers(users) {
    if (users == null) {
      cache.users = null;
      if (els.accountsSection) els.accountsSection.hidden = true;
      return;
    }
    cache.users = users;
    if (els.accountsSection) els.accountsSection.hidden = false;
    if (els.accountsHint) els.accountsHint.hidden = true;

    const box = els.accountUsers;
    if (!box) return;
    box.textContent = '';
    users.forEach(user => {
      const row = document.createElement('div');
      row.className = 'auth-record';

      const text = document.createElement('span');
      text.textContent = user.name + ' · ' + user.email;

      const small = document.createElement('small');
      small.textContent = (user.role === 'admin' ? tr('authRoleAdmin') : tr('authRoleOperator')) +
        ' · ' + formatDate(user.lastLoginAt);

      row.append(text, small);
      box.append(row);
    });
  }

  function showRecordsError() {
    if (els.accountEventsEmpty) {
      els.accountEventsEmpty.hidden = false;
      els.accountEventsEmpty.textContent = tr('authRecordsError');
    }
  }

  function clearDashboard() {
    cache.stats = null;
    cache.events = null;
    cache.users = null;
    if (els.accountEvents) els.accountEvents.textContent = '';
    if (els.accountUsers) els.accountUsers.textContent = '';
    if (els.accountsSection) els.accountsSection.hidden = true;
    if (els.accountEventsEmpty) {
      els.accountEventsEmpty.hidden = false;
      els.accountEventsEmpty.textContent = tr('authRecordsEmpty');
    }
    renderStats(null);
  }

  function updateDashboardChrome() {
    const scope = els.accountRecordScope;
    if (scope) {
      scope.removeAttribute('data-i18n');
      scope.textContent = state.user && state.user.role === 'admin'
        ? tr('authRecordsScopeAll')
        : tr('authRecordsScopeOwn');
    }
    if (els.recordsClear) els.recordsClear.hidden = !state.user || state.user.role !== 'admin';
  }

  async function loadDashboard() {
    if (!state.user) return;
    updateDashboardChrome();

    const jobs = [];
    jobs.push(api('/api/stats', { method: 'GET' })
      .then(data => renderStats(data.stats))
      .catch(() => renderStats(null)));
    jobs.push(api('/api/events?limit=20', { method: 'GET' })
      .then(data => renderRecords(data.events))
      .catch(() => showRecordsError()));

    if (state.user.role === 'admin') {
      jobs.push(api('/api/users', { method: 'GET' })
        .then(data => renderUsers(data.users))
        .catch(() => renderUsers(null)));
    } else {
      renderUsers(null);
    }
    await Promise.all(jobs);
  }

  async function clearRecords() {
    busy(els.recordsClear, true);
    try {
      const data = await api('/api/events/clear');
      notice(tr('authRecordsCleared') + ' (' + (data.deleted || 0) + ')', 'ok');
      await loadDashboard();
    } catch (err) {
      notice(errorText(err));
    } finally {
      busy(els.recordsClear, false);
    }
  }

  /* ── 흐름 ─────────────────────────────────────────────── */

  function resetSignupQuestionToggle() {
    if (!els.signupQuestion || !els.signupCustomWrap) return;
    els.signupCustomWrap.hidden = els.signupQuestion.value !== '__custom';
  }

  function chosenQuestion() {
    if (!els.signupQuestion) return '';
    if (els.signupQuestion.value === '__custom') {
      return els.signupQuestionCustom ? els.signupQuestionCustom.value.trim() : '';
    }
    const option = els.signupQuestion.selectedOptions && els.signupQuestion.selectedOptions[0];
    return option ? option.textContent.trim() : '';
  }

  async function refreshSession() {
    try {
      const data = await api('/api/auth/me', { method: 'GET' });
      state.online = true;
      applyUser(data.user);
    } catch (err) {
      /* 서버가 없으면(정적 실행) 게스트 상태로 조용히 둔다. */
      state.online = false;
    }
    return state.user;
  }

  async function submitLogin(event) {
    if (event) event.preventDefault();
    fieldError(els.loginError, '');
    const email = (els.loginEmail && els.loginEmail.value || '').trim();
    const password = els.loginPassword && els.loginPassword.value || '';

    if (!email || !password) return fieldError(els.loginError, tr('errAuthMissing'));

    busy(els.loginSubmit, true);
    try {
      const data = await api('/api/auth/login', { body: { email, password } });
      state.online = true;
      applyUser(data.user);
      if (els.loginPassword) els.loginPassword.value = '';
      showView('account');
      notice(tr('authSignedIn') + ' · ' + data.user.name, 'ok');
      logEvent('[계정] ' + data.user.name + ' 로그인');
    } catch (err) {
      state.online = err.code !== 'NO_SERVER';
      fieldError(els.loginError, errorText(err));
    } finally {
      busy(els.loginSubmit, false);
    }
  }

  async function submitSignup(event) {
    if (event) event.preventDefault();
    fieldError(els.signupError, '');

    const name = (els.signupName && els.signupName.value || '').trim();
    const email = (els.signupEmail && els.signupEmail.value || '').trim();
    const password = els.signupPassword && els.signupPassword.value || '';
    const passwordConfirm = els.signupPasswordConfirm && els.signupPasswordConfirm.value || '';
    const question = chosenQuestion();
    const answer = (els.signupAnswer && els.signupAnswer.value || '').trim();

    if (name.length < 2) return fieldError(els.signupError, tr('errAuthInvalidName'));
    if (!email) return fieldError(els.signupError, tr('errAuthInvalidEmail'));
    if (password.length < 8) return fieldError(els.signupError, tr('errAuthWeakPassword'));
    if (password !== passwordConfirm) return fieldError(els.signupError, tr('errAuthPasswordMismatch'));

    if (!question) return fieldError(els.signupError, tr('errAuthInvalidQuestion'));
    if (answer.length < 2) return fieldError(els.signupError, tr('errAuthInvalidAnswer'));
    busy(els.signupSubmit, true);
    try {
      const data = await api('/api/auth/signup', {
        body: { name, email, password, passwordConfirm, question, answer }
      });
      state.online = true;
      applyUser(data.user);
      if (els.signupForm) els.signupForm.reset();
      resetSignupQuestionToggle();
      showView('account');
      notice(tr('authSignupDone'), 'ok');
      logEvent('[계정] 신규 가입 · ' + data.user.email + ' (' + data.user.role + ')');
    } catch (err) {
      state.online = err.code !== 'NO_SERVER';
      fieldError(els.signupError, errorText(err));
    } finally {
      busy(els.signupSubmit, false);
    }
  }

  async function submitLogout() {
    busy(els.logoutButton, true);
    try {
      await api('/api/auth/logout');
    } catch (err) {
      busy(els.logoutButton, false);
      notice(errorText(err));
      return;
    }
    busy(els.logoutButton, false);
    const previous = state.user && state.user.name;
    applyUser(null);
    if (els.pwChangeForm) els.pwChangeForm.reset();
    showView('login');
    notice(tr('authSignedOut'), 'ok');
    if (previous) logEvent('[계정] ' + previous + ' 로그아웃');
  }

  async function submitPasswordChange(event) {
    if (event) event.preventDefault();
    fieldError(els.pwError, '');
    const currentPassword = els.pwCurrent && els.pwCurrent.value || '';
    const newPassword = els.pwNew && els.pwNew.value || '';
    if (!currentPassword || !newPassword) return fieldError(els.pwError, tr('errAuthMissing'));

    busy(els.pwSubmit, true);
    try {
      await api('/api/auth/password/change', { body: { currentPassword, newPassword } });
      if (els.pwChangeForm) els.pwChangeForm.reset();
      notice(tr('authPasswordChanged'), 'ok');
      logEvent('[계정] 비밀번호 변경');
    } catch (err) {
      fieldError(els.pwError, errorText(err));
    } finally {
      busy(els.pwSubmit, false);
    }
  }

  async function submitResetQuestion(event) {
    if (event) event.preventDefault();
    fieldError(els.resetError1, '');
    const email = (els.resetEmail && els.resetEmail.value || '').trim();
    if (!email) return fieldError(els.resetError1, tr('errAuthInvalidEmail'));

    busy(els.resetFind, true);
    try {
      const data = await api('/api/auth/reset/question', { body: { email } });
      state.resetEmail = data.email || email;
      state.resetQuestion = data.question || '';
      if (els.resetQuestionText) els.resetQuestionText.textContent = state.resetQuestion;
      if (els.resetStep1Form) els.resetStep1Form.hidden = true;
      if (els.resetStep2Form) els.resetStep2Form.hidden = false;
      fieldError(els.resetError2, '');
    } catch (err) {
      fieldError(els.resetError1, errorText(err));
    } finally {
      busy(els.resetFind, false);
    }
  }

  async function submitResetVerify(event) {
    if (event) event.preventDefault();
    fieldError(els.resetError2, '');
    const answer = (els.resetAnswer && els.resetAnswer.value || '').trim();
    if (!answer) return fieldError(els.resetError2, tr('errAuthInvalidAnswer'));
    const newPassword = els.resetNewPassword && els.resetNewPassword.value || '';
    if (newPassword.length < 8) return fieldError(els.resetError2, tr('errAuthWeakPassword'));

    busy(els.resetSubmit, true);
    try {
      await api('/api/auth/reset/verify', {
        body: { email: state.resetEmail, answer, newPassword }
      });
      if (els.resetStep2Form) els.resetStep2Form.reset();
      backToLogin();
      notice(tr('authResetDone'), 'ok');
      if (els.loginEmail && state.resetEmail) els.loginEmail.value = state.resetEmail;
      if (els.loginPassword) els.loginPassword.focus();
      logEvent('[계정] 비밀번호 재설정 · ' + state.resetEmail);
    } catch (err) {
      fieldError(els.resetError2, errorText(err));
    } finally {
      busy(els.resetSubmit, false);
    }
  }

  function showReset() {
    if (els.resetStep1Form) els.resetStep1Form.hidden = false;
    if (els.resetStep2Form) els.resetStep2Form.hidden = true;
    fieldError(els.resetError1, '');
    fieldError(els.resetError2, '');
    showView('reset');
    if (els.resetEmail && !els.resetEmail.value && els.loginEmail) {
      els.resetEmail.value = els.loginEmail.value.trim();
    }
    if (els.resetEmail) els.resetEmail.focus();
  }

  function backToLogin() {
    showView('login');
    if (els.resetStep1Form) els.resetStep1Form.hidden = false;
    if (els.resetStep2Form) els.resetStep2Form.hidden = true;
  }

  function openDialog() {
    if (!els.dialog) return;
    if (state.user) {
      renderAccount();
      showView('account');
      loadDashboard();
    } else {
      showView('login');
    }
    if (typeof els.dialog.showModal === 'function') {
      if (!els.dialog.open) els.dialog.showModal();
    } else {
      els.dialog.setAttribute('open', 'open');
    }
  }

  function closeDialog() {
    if (!els.dialog) return;
    if (typeof els.dialog.close === 'function' && els.dialog.open) els.dialog.close();
    else els.dialog.removeAttribute('open');
  }

  /* ── 초기화 ───────────────────────────────────────────── */

  function cacheElements() {
    els.dialog = $('#authDialog');
    els.button = $('#authButton');
    els.buttonLabel = $('#authButtonLabel');
    els.notice = $('#authNotice');
    els.close = $('#authClose');

    els.tabLogin = $('#authTabLogin');
    els.tabSignup = $('#authTabSignup');
    els.loginForm = $('#authLoginForm');
    els.signupForm = $('#authSignupForm');

    els.loginEmail = $('#loginEmail');
    els.loginPassword = $('#loginPassword');
    els.loginError = $('#loginError');
    els.loginSubmit = $('#loginSubmit');
    els.forgot = $('#authForgot');

    els.signupName = $('#signupName');
    els.signupEmail = $('#signupEmail');
    els.signupPassword = $('#signupPassword');
    els.signupPasswordConfirm = $('#signupPasswordConfirm');
    els.signupQuestion = $('#signupQuestion');
    els.signupQuestionCustom = $('#signupQuestionCustom');
    els.signupCustomWrap = $('#signupCustomWrap');
    els.signupAnswer = $('#signupAnswer');
    els.signupError = $('#signupError');
    els.signupSubmit = $('#signupSubmit');

    els.viewLogin = $('#authViewLogin');
    els.viewAccount = $('#authViewAccount');
    els.viewReset = $('#authViewReset');

    els.accountName = $('#accountName');
    els.accountEmail = $('#accountEmail');
    els.accountRole = $('#accountRole');
    els.accountCreated = $('#accountCreated');
    els.accountLastLogin = $('#accountLastLogin');
    els.accountQuestion = $('#accountQuestion');

    els.statUsers = $('#statUsers');
    els.statEvents = $('#statEvents');
    els.statAlerts = $('#statAlerts');
    els.statToday = $('#statToday');
    els.accountRecordScope = $('#accountRecordScope');
    els.accountEvents = $('#accountEvents');
    els.accountEventsEmpty = $('#accountEventsEmpty');
    els.accountUsers = $('#accountUsers');
    els.accountsSection = $('#accountsSection');
    els.accountsHint = $('#accountsHint');
    els.recordsRefresh = $('#eventsRefresh');
    els.recordsClear = $('#eventsClear');

    els.pwChangeForm = $('#pwChangeForm');
    els.pwCurrent = $('#pwCurrent');
    els.pwNew = $('#pwNew');
    els.pwError = $('#pwError');
    els.pwSubmit = $('#pwSubmit');
    els.logoutButton = $('#authLogout');

    els.resetStep1Form = $('#resetStep1Form');
    els.resetStep2Form = $('#resetStep2Form');
    els.resetEmail = $('#resetEmail');
    els.resetError1 = $('#resetError1');
    els.resetError2 = $('#resetError2');
    els.resetQuestionText = $('#resetQuestionText');
    els.resetAnswer = $('#resetAnswer');
    els.resetNewPassword = $('#resetNewPassword');
    els.resetFind = $('#resetFind');
    els.resetSubmit = $('#resetSubmit');
  }

  function bindEvents() {
    if (els.button) els.button.addEventListener('click', openDialog);
    if (els.close) els.close.addEventListener('click', closeDialog);
    if (els.dialog) {
      els.dialog.addEventListener('close', () => { notice(''); fieldError(els.loginError, ''); fieldError(els.signupError, ''); });
      /* 백드롭(바깥) 클릭으로 닫기 */
      els.dialog.addEventListener('click', event => { if (event.target === els.dialog) closeDialog(); });
    }

    if (els.tabLogin) els.tabLogin.addEventListener('click', () => showAuthTab('login'));
    if (els.tabSignup) els.tabSignup.addEventListener('click', () => showAuthTab('signup'));
    if (els.forgot) els.forgot.addEventListener('click', showReset);

    if (els.loginForm) els.loginForm.addEventListener('submit', submitLogin);
    if (els.signupForm) els.signupForm.addEventListener('submit', submitSignup);
    if (els.pwChangeForm) els.pwChangeForm.addEventListener('submit', submitPasswordChange);
    if (els.logoutButton) els.logoutButton.addEventListener('click', submitLogout);

    if (els.signupQuestion) els.signupQuestion.addEventListener('change', resetSignupQuestionToggle);

    if (els.recordsRefresh) els.recordsRefresh.addEventListener('click', () => loadDashboard());
    if (els.recordsClear) els.recordsClear.addEventListener('click', clearRecords);

    if (els.resetStep1Form) els.resetStep1Form.addEventListener('submit', submitResetQuestion);
    if (els.resetStep2Form) els.resetStep2Form.addEventListener('submit', submitResetVerify);
    ['#resetBack1', '#resetBack2'].forEach(sel => {
      const button = $(sel);
      if (button) button.addEventListener('click', backToLogin);
    });
  }

  function watchLanguage() {
    /* 언어를 바꾸면 동적 문구(직함·날짜)를 다시 그린다.
       data-i18n 요소는 bundle.js 의 applyLanguage 가 알아서 갱신한다. */
    try {
      const observer = new MutationObserver(() => {
        renderHeader();
        if (!state.user) return;
        renderAccount();
        updateDashboardChrome();
        if (cache.events) renderRecords(cache.events);
        if (cache.users) renderUsers(cache.users);
      });
      observer.observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
    } catch (e) { /* MutationObserver 미지원 */ }
  }

  function init() {
    cacheElements();
    if (!els.dialog || !els.button) return;
    initialized = true;
    bindEvents();
    watchLanguage();

    /* 보안 질문 목록을 사전 순서대로 정리 (혹시 비어 있으면 채운다) */
    if (els.signupQuestion && els.signupQuestion.options.length <= 1) {
      PRESET_QUESTIONS.forEach(key => {
        const option = document.createElement('option');
        option.value = key;
        option.dataset.i18n = key;
        option.textContent = tr(key);
        els.signupQuestion.appendChild(option);
      });
    }
    resetSignupQuestionToggle();


    refreshSession();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  /* 개발자 도구·자동 점검에서 쓸 수 있게 최소한만 노출한다. */
  window.AuthUI = {
    init,
    state,
    refresh: refreshSession,
    open: openDialog,
    close: closeDialog,
    logout: submitLogout,
    isReady: () => initialized
  };
})();
