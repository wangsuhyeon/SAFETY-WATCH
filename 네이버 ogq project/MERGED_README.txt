# Merged File Integration Report
Generated: 10/07/2026 10:22:59

## Extra Files
- block1.txt (6615 bytes)
- block2.txt (6942 bytes)  
- tmp_tail.txt (209 bytes)
- x (56495 bytes, data file)


--- BLOCK1.TXT ---

const ArduinoThermal = {
  port: null,
  reader: null,
  keepReading: false,
  threshold: 37.5,
  currentTemp: 0.0,

  init() {
    const btnConnect = document.getElementById('btnConnectArduino');
    const btnDisconnect = document.getElementById('btnDisconnectArduino');
    const tuner = document.getElementById('tunerThermalThreshold');
    const tunerOut = document.getElementById('outThermalThreshold');

    if (tuner && tunerOut) {
      tuner.addEventListener('input', (e) => {
        this.threshold = parseFloat(e.target.value);
        tunerOut.textContent = this.threshold.toFixed(1) + '°C';
      });
    }

    if (btnConnect) {
      btnConnect.addEventListener('click', () => this.connect());
    }
    if (btnDisconnect) {
      btnDisconnect.addEventListener('click', () => this.disconnect());
    }
  },

  async connect() {
    if (!('serial' in navigator)) {
      alert('이 브라우저는 Web Serial API를 지원하지 않습니다. Chrome 또는 Edge 브라우저를 사용해 주세요.');
      if (typeof Diagnostics !== 'undefined') Diagnostics.countError('Web Serial API 미지원 브라우저');
      return;
    }

    try {
      this.port = await navigator.serial.requestPort();
      await this.port.open({ baudRate: 9600 });
      
      this.keepReading = true;
      const btnConnect = document.getElementById('btnConnectArduino');
      const btnDisconnect = document.getElementById('btnDisconnectArduino');
      if (btnConnect) btnConnect.disabled = true;
      if (btnDisconnect) btnDisconnect.disabled = false;
      
      const thermalState = document.getElementById('thermalState');
      if (thermalState) {
        thermalState.textContent = 'CONNECTED';
        thermalState.className = 'state';
      }

      if (typeof Diagnostics !== 'undefined') Diagnostics.log('아두이노 열화상 카메라 연결 성공 (BaudRate: 9600)', 'ok');
      this.readSerialLoop();
    } catch (err) {
      if (typeof Diagnostics !== 'undefined') Diagnostics.countError('아두이노 연결 실패: ' + err.message);
    }
  },

  async readSerialLoop() {
    const textDecoder = new TextDecoderStream();
    this.port.readable.pipeTo(textDecoder.writable);
    const reader = textDecoder.readable.getReader();
    this.reader = reader;

    let buffer = '';

    try {
      while (this.keepReading) {
        const { value, done } = await reader.read();
        if (done) break;
        if (value) {
          buffer += value;
          const lines = buffer.split('\n');
          buffer = lines.pop();

          for (const line of lines) {
            this.handleData(line.trim());
          }
        }
      }
    } catch (err) {
      if (typeof Diagnostics !== 'undefined') Diagnostics.countError('시리얼 통신 수신 오류: ' + err.message);
    } finally {
      reader.releaseLock();
    }
  },

  handleData(rawLine) {
    if (!rawLine) return;
    let temp = null;

    if (rawLine.startsWith('{') && rawLine.endsWith('}')) {
      try {
        const data = JSON.parse(rawLine);
        temp = parseFloat(data.temp || data.max || data.temperature);
      } catch (e) {}
    } else {
      const match = rawLine.match(/[-+]?[0-9]*\.?[0-9]+/);
      if (match) {
        temp = parseFloat(match[0]);
      }
    }

    if (temp !== null && !isNaN(temp)) {
      this.currentTemp = temp;
      this.updateUI(temp);
    }
  },

  updateUI(temp) {
    const tempEl = document.getElementById('thermalCurrentTemp');
    const statusEl = document.getElementById('thermalStatusTag');
    const thermalState = document.getElementById('thermalState');

    if (tempEl) tempEl.textContent = temp.toFixed(1) + '°C';

    const isHigh = temp >= this.threshold;

    if (statusEl) {
      statusEl.textContent = isHigh ? '고온 감지!' : '정상';
      statusEl.style.color = isHigh ? '#e05142' : '#07374a';
    }

    if (thermalState) {
      thermalState.textContent = isHigh ? 'OVERHEAT' : 'NORMAL';
      thermalState.className = isHigh ? 'state alert' : 'state';
    }

    if (isHigh) {
      const camera = typeof focusedCamera === 'function' ? focusedCamera() : { name: '열화상 센서' };
      if (typeof pushEvent === 'function') {
        pushEvent(`[열화상 이상] ${temp.toFixed(1)}°C 고온 감지 (기준: ${this.threshold}°C)`, 'error', {
          camera: camera.name || '열화상 센서'
        });
      }
      if (typeof playSiren === 'function') playSiren('critical');
      if (typeof Speaker !== 'undefined' && Speaker.speak) {
        Speaker.speak(`열화상 센서 고온 감지. 현재 온도 ${temp.toFixed(1)}도입니다.`);
      }
    }
  },

  async disconnect() {
    this.keepReading = false;
    if (this.reader) {
      await this.reader.cancel();
    }
    if (this.port) {
      await this.port.close();
      this.port = null;
    }

    const btnConnect = document.getElementById('btnConnectArduino');
    const btnDisconnect = document.getElementById('btnDisconnectArduino');
    if (btnConnect) btnConnect.disabled = false;
    if (btnDisconnect) btnDisconnect.disabled = true;

    const thermalState = document.getElementById('thermalState');
    if (thermalState) {
      thermalState.textContent = 'DISCONNECTED';
      thermalState.className = 'state';
    }

    if (typeof Diagnostics !== 'undefined') Diagnostics.log('아두이노 연결 해제 완료', 'info');
  }
};

window.addEventListener('DOMContentLoaded', () => {
  ArduinoThermal.init();
});
}

/* 개발자 도구·자동화 테스트에서 접근할 수 있도록 최소한만 노출한다. */
window.BeachWatch = {
  state, CONFIG, IMPACT, PRESETS, SITE_PRESETS,
  selfTest: () => SelfTest.run(),
  stressTest: count => runStressTest(count),
  carryTracks,
  computeImpact, crossesAboveLine, isInDangerZone, pointInPolygon, abovePolyline,
  polylineYAt, simplifyPoints, insertIndexFor, setZoneMode, applyZoneToAll, polygonToPolyline, smoothPath,
  normalizeContact, contactsForLevel, buildAlertPayload, shouldSendNow,
  clusterObservations, suppressDuplicates, shouldMergeObservations, trackCandidates,
  classifyScene: stats => SceneAnalyzer.classify(stats),
  addCamera, removeCamera, focusCamera, setSiteType,
  resolveStreamKind, validateStreamUrl,
  /* v7 */
  withinWatchHours, parseHhMm, watchHoursActive, buildVoiceMessage, typingInField,
  NorthStar, refreshNorthStar, acknowledgeAlert,
  setZoneAngle, rotatePoints, fitPointsInView, translatePointsToHeight, centroidOf, normalizeAngle,
  setPanelHint, resetZoneBase,
  toggleControlRoom, nudgeZonePoint, selectNextZonePoint,
  OfflineCache, prepareOffline, Speaker, captureSnapshot
};

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
else init();
/* ══════════════════════════════════════════════════════════════════
   32. MLX9064X 열화상 카메라 센서 연동 및 스마트 튜브 사출 제어
   ══════════════════════════════════════════════════════════════════ */



--- BLOCK2.TXT ---

const ArduinoThermal = {
  port: null,
  reader: null,
  keepReading: false,
  threshold: 34.0,       // 생체 열원 판별 임계값 (야외 표면 온도 감안 기본 34.0°C)
  currentTemp: 0.0,
  lastDeployTime: 0,     // 튜브 사출 중복 방지 타이머
  deployCooldown: 10000, // 튜브 사출 쿨타임 (10초)

  init() {
    const btnConnect = document.getElementById('btnConnectArduino');
    const btnDisconnect = document.getElementById('btnDisconnectArduino');
    const tuner = document.getElementById('tunerThermalThreshold');
    const tunerOut = document.getElementById('outThermalThreshold');

    if (tuner && tunerOut) {
      tuner.value = this.threshold;
      tunerOut.textContent = this.threshold.toFixed(1) + '°C';
      tuner.addEventListener('input', (e) => {
        this.threshold = parseFloat(e.target.value);
        tunerOut.textContent = this.threshold.toFixed(1) + '°C';
      });
    }

    if (btnConnect) btnConnect.addEventListener('click', () => this.connect());
    if (btnDisconnect) btnDisconnect.addEventListener('click', () => this.disconnect());
  },

  async connect() {
    if (!('serial' in navigator)) {
      alert('이 브라우저는 Web Serial API를 지원하지 않습니다. Chrome 또는 Edge 브라우저를 사용해 주세요.');
      if (typeof Diagnostics !== 'undefined') Diagnostics.countError('Web Serial API 미지원 브라우저');
      return;
    }

    try {
      this.port = await navigator.serial.requestPort();
      // MLX9064X 고속 스트리밍에 맞춘 115200 BaudRate
      await this.port.open({ baudRate: 115200 });
      
      this.keepReading = true;
      const btnConnect = document.getElementById('btnConnectArduino');
      const btnDisconnect = document.getElementById('btnDisconnectArduino');
      if (btnConnect) btnConnect.disabled = true;
      if (btnDisconnect) btnDisconnect.disabled = false;
      
      const thermalState = document.getElementById('thermalState');
      if (thermalState) {
        thermalState.textContent = 'CONNECTED';
        thermalState.className = 'state';
      }

      if (typeof Diagnostics !== 'undefined') Diagnostics.log('MLX9064X 열화상 카메라 연결 성공 (115200 BaudRate)', 'ok');
      this.readSerialLoop();
    } catch (err) {
      if (typeof Diagnostics !== 'undefined') Diagnostics.countError('아두이노 연결 실패: ' + err.message);
    }
  },

  // 아두이노로 튜브 사출 제어 명령 전송 ('T' 문자 송신)
  async sendCommand(cmd) {
    if (this.port && this.port.writable) {
      try {
        const encoder = new TextEncoder();
        const writer = this.port.writable.getWriter();
        await writer.write(encoder.encode(cmd));
        writer.releaseLock();
        if (typeof Diagnostics !== 'undefined') Diagnostics.log(`아두이노 명령 전송 [${cmd}]: 튜브 사출 모터 작동`, 'ok');
      } catch (e) {
        if (typeof Diagnostics !== 'undefined') Diagnostics.countError('명령 전송 실패: ' + e.message);
      }
    }
  },

  async readSerialLoop() {
    const textDecoder = new TextDecoderStream();
    this.port.readable.pipeTo(textDecoder.writable);
    const reader = textDecoder.readable.getReader();
    this.reader = reader;

    let buffer = '';

    try {
      while (this.keepReading) {
        const { value, done } = await reader.read();
        if (done) break;
        if (value) {
          buffer += value;
          const lines = buffer.split('\n');
          buffer = lines.pop(); // 완전하지 않은 마지막 줄은 다음 버퍼로 유지

          for (const line of lines) {
            this.handleData(line.trim());
          }
        }
      }
    } catch (err) {
      if (typeof Diagnostics !== 'undefined') Diagnostics.countError('열화상 데이터 수신 오류: ' + err.message);
    } finally {
      reader.releaseLock();
    }
  },

  handleData(rawLine) {
    if (!rawLine || rawLine.startsWith('ERR:')) return;
    let temp = null;

    // JSON 형식 지원: {"max": 36.8} 또는 {"temp": 36.8}
    if (rawLine.startsWith('{') && rawLine.endsWith('}')) {
      try {
        const data = JSON.parse(rawLine);
        temp = parseFloat(data.max || data.temp || data.temperature);
      } catch (e) {}
    } else {
      // 일반 숫자 텍스트 파싱
      const match = rawLine.match(/[-+]?[0-9]*\.?[0-9]+/);
      if (match) temp = parseFloat(match[0]);
    }

    if (temp !== null && !isNaN(temp)) {
      this.currentTemp = temp;
      this.evaluateDualCondition(temp);
    }
  },

  // 일반 카메라(AI 객체 인식/위험구역)와 MLX9064X 열화상(체온) 교차 검증
  evaluateDualCondition(maxTemp) {
    const tempEl = document.getElementById('thermalCurrentTemp');
    const statusEl = document.getElementById('thermalStatusTag');
    const thermalState = document.getElementById('thermalState');

    if (tempEl) tempEl.textContent = maxTemp.toFixed(1) + '°C';

    const isHumanTemp = maxTemp >= this.threshold; // 설정 체온 이상 감지 여부
    const camera = typeof focusedCamera === 'function' ? focusedCamera() : { riskCount: 0, name: '카메라' };
    const isInsideDangerZone = camera.riskCount > 0; // AI 비전 기반 위험 구역 내 인원 존재 여부[cite: 2]

    if (statusEl) {
      statusEl.textContent = isHumanTemp ? '열원(사람) 확인' : '비생체(저온)';
      statusEl.style.color = isHumanTemp ? '#e05142' : '#07374a';
    }

    if (thermalState) {
      thermalState.textContent = isHumanTemp ? 'HUMAN_DETECTED' : 'NORMAL';
      thermalState.className = isHumanTemp ? 'state alert' : 'state';
    }

    const now = Date.now();

    // ★ 복합 조건: 위험 구역 침범 + MLX9064X 생체 열원 동시 충족
    if (isInsideDangerZone && isHumanTemp) {
      // 사이렌 경보 울림
      if (typeof playSiren === 'function') playSiren('critical');

      // 쿨타임(10초) 경과 확인 후 튜브 사출 명령 전송
      if (now - this.lastDeployTime > this.deployCooldown) {
        this.lastDeployTime = now;
        this.sendCommand('T'); // 아두이노로 'T' 신호 전송

        if (typeof pushEvent === 'function') {
          pushEvent(`[익사 위험군 확정] 위험 구역 내 인원(${camera.riskCount}명) 및 MLX9064X 생체 열원(${maxTemp.toFixed(1)}°C) 검증 완료 → 튜브 사출 작동!`, 'error', {
            camera: camera.name
          });
        }

        if (typeof Speaker !== 'undefined' && Speaker.speak) {
          Speaker.speak('익사 위험군 확인. 구명 튜브를 투척합니다.');
        }
      }
    } 
    // 열원만 감지되고 위험 구역에는 들어오지 않은 경우
    else if (isHumanTemp) {
      if (typeof pushEvent === 'function' && Math.random() < 0.05) {
        pushEvent(`[열화상 감지] 생체 열원(${maxTemp.toFixed(1)}°C) 감지 (위험 구역 외곽)`, 'info');
      }
    }
  },

  async disconnect() {
    this.keepReading = false;
    if (this.reader) await this.reader.cancel();
    if (this.port) {
      await this.port.close();
      this.port = null;
    }

    const btnConnect = document.getElementById('btnConnectArduino');
    const btnDisconnect = document.getElementById('btnDisconnectArduino');
    if (btnConnect) btnConnect.disabled = false;
    if (btnDisconnect) btnDisconnect.disabled = true;

    const thermalState = document.getElementById('thermalState');
    if (thermalState) {
      thermalState.textContent = 'DISCONNECTED';
      thermalState.className = 'state';
    }

    if (typeof Diagnostics !== 'undefined') Diagnostics.log('아두이노 연결 해제 완료', 'info');
  }
};

window.addEventListener('DOMContentLoaded', () => {
  ArduinoThermal.init();
});



--- TMP_TAIL.TXT ---

?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧??
   32. MLX9064X ?댄솕??移대찓???쇱꽌 ?곕룞 諛??ㅻ쭏???쒕툕 ?ъ텧 ?쒖뼱
   ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧 */
