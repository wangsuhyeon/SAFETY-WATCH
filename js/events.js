'use strict';

/* ============================================================
   Beach Watch — 이벤트 저장 (서버 DB 연동)
   ------------------------------------------------------------
   · bundle.js 의 pushEvent() 를 감싸서, 화면에 뜨는 감지·경보
     이벤트를 서버의 events 테이블에 함께 저장한다.
   · 서버가 없으면 조용히 무시한다(정적 실행 시에도 화면은 그대로).
   · 개인정보 보호: 스냅샷(data URL)·큰 문자열은 보내지 않는다.
   ============================================================ */

(function () {
  const MAX_QUEUE = 200;    // 네트워크가 끊겨도 여기까지만 들고 있는다
  const MAX_BATCH = 10;     // 한 번에 보내는 건수
  const FLUSH_MS = 4000;    // 모아서 보내는 주기

  const queue = [];
  const stats = { sent: 0, dropped: 0, failed: 0 };
  let timer = null;
  let online = true;

  /* 서버로 보낼 수 있는 형태로만 추린다. */
  function sanitize(message, kind, extra) {
    const text = String(message == null ? '' : message).trim();
    if (!text) return null;

    const event = {
      message: text.slice(0, 500),
      kind: ['info', 'ok', 'warn', 'watch', 'alert', 'critical', 'error'].indexOf(kind) >= 0 ? kind : 'info',
      at: new Date().toISOString()
    };

    if (extra && typeof extra === 'object') {
      Object.keys(extra).forEach(key => {
        if (['snapshot', 'image', 'dataUrl', 'at', 'label'].indexOf(key) >= 0) return;
        const value = extra[key];
        if (value === null || value === undefined) return;
        if (typeof value === 'string') event[key] = value.slice(0, 300);
        else if (typeof value === 'number' || typeof value === 'boolean') event[key] = value;
      });
    }
    return event;
  }

  function schedule() {
    if (timer) return;
    timer = setTimeout(flush, FLUSH_MS);
  }

  function enqueue(message, kind, extra) {
    const event = sanitize(message, kind, extra);
    if (!event) return;
    if (queue.length >= MAX_QUEUE) {
      queue.shift();
      stats.dropped += 1;
    }
    queue.push(event);
    schedule();
  }

  async function flush(useKeepalive) {
    if (timer) { clearTimeout(timer); timer = null; }
    if (!queue.length) return;

    const batch = queue.splice(0, MAX_BATCH);
    try {
      const res = await fetch('/api/events', {
        method: 'POST',
        credentials: 'same-origin',
        headers: { 'content-type': 'application/json' },
        keepalive: !!useKeepalive,
        body: JSON.stringify({ events: batch })
      });
      if (!res.ok) throw new Error('HTTP ' + res.status);
      stats.sent += batch.length;
      online = true;
    } catch (e) {
      /* 서버가 없는 정적 실행이거나 일시적 오류 — 큐를 비워 메모리를 지킨다. */
      stats.dropped += batch.length;
      stats.failed += 1;
      online = false;
    }

    if (queue.length) schedule();
  }

  function install() {
    if (typeof window.pushEvent !== 'function') return false;

    const original = window.pushEvent;
    window.pushEvent = function (message, kind, extra) {
      const result = original.apply(this, arguments);
      try { enqueue(message, kind, extra); } catch (e) { /* 저장 실패는 화면과 무관 */ }
      return result;
    };

    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') flush(true);
    });
    window.addEventListener('pagehide', () => flush(true));
    return true;
  }

  if (!install()) {
    /* 아직 pushEvent 가 없으면 준비되는 대로 붙인다. */
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', install);
    else window.addEventListener('load', install);
  }

  /* 개발자 도구·자동 점검용 */
  window.BeachWatchEvents = {
    flush,
    queue: () => queue.slice(),
    stats: () => Object.assign({ online }, stats),
    isWrapped: () => typeof window.pushEvent === 'function'
  };
})();
