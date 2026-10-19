'use strict';
(function () {
  async function request(pathname, options) {
    const opts = options || {};
    let res;
    try {
      res = await fetch(pathname, {
        method: opts.method || 'POST', credentials: 'same-origin',
        headers: opts.body ? { 'Content-Type': 'application/json' } : undefined,
        body: opts.body ? JSON.stringify(opts.body) : undefined,
        keepalive: !!opts.keepalive
      });
    } catch (cause) {
      const error = new Error('계정 서버에 연결할 수 없습니다. 잠시 후 다시 시도하세요.');
      error.code = 'NO_SERVER'; throw error;
    }
    let data;
    try { data = await res.json(); } catch {}
    if (!res.ok || !data || data.ok === false) {
      const error = new Error(data && data.message || '계정 서버의 응답을 확인할 수 없습니다.');
      error.code = data && data.code || ([404, 405, 501].includes(res.status) ? 'NO_SERVER' : 'SERVER_ERROR');
      error.status = res.status;
      throw error;
    }
    return data;
  }
  async function saveEvents(events, ownerId, keepalive) {
    if (!window.AuthUI || !window.AuthUI.state.user || window.AuthUI.state.user.id !== ownerId) return;
    await request('/api/events', { body: { events }, keepalive });
  }
  window.BeachWatchBackend = { request, saveEvents };
})();
