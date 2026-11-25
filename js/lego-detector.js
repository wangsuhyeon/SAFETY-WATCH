'use strict';

/* Experimental single-class Lego detector (YOLOv7 exported to ONNX). */
(function () {
  const SIZE = 640;
  const SCORE_THRESHOLD = 0.42;
  const NMS_THRESHOLD = 0.45;
  const MAX_BOXES = 30;
  const MODEL_URL = new URL('../models/lego/lego-yolov7.onnx', document.baseURI).href;
  const ORT_BASE = 'https://cdn.jsdelivr.net/npm/onnxruntime-web@1.20.1/dist/';
  let sessionPromise = null;
  let canvas = null;
  let context = null;
  let activeProvider = 'wasm';

  function sourceSize(source) {
    return {
      width: source.videoWidth || source.naturalWidth || source.width || 0,
      height: source.videoHeight || source.naturalHeight || source.height || 0
    };
  }

  function overlap(a, b) {
    const left = Math.max(a.bbox[0], b.bbox[0]);
    const top = Math.max(a.bbox[1], b.bbox[1]);
    const right = Math.min(a.bbox[0] + a.bbox[2], b.bbox[0] + b.bbox[2]);
    const bottom = Math.min(a.bbox[1] + a.bbox[3], b.bbox[1] + b.bbox[3]);
    const area = Math.max(0, right - left) * Math.max(0, bottom - top);
    const total = a.bbox[2] * a.bbox[3] + b.bbox[2] * b.bbox[3] - area;
    return total > 0 ? area / total : 0;
  }

  function suppress(candidates) {
    const sorted = candidates.sort((a, b) => b.score - a.score);
    const kept = [];
    while (sorted.length && kept.length < MAX_BOXES) {
      const best = sorted.shift();
      kept.push(best);
      for (let i = sorted.length - 1; i >= 0; i--) {
        if (overlap(best, sorted[i]) > NMS_THRESHOLD) sorted.splice(i, 1);
      }
    }
    return kept;
  }

  function decodeOutput(data, width, height, transform, minScore) {
    const threshold = typeof minScore === 'number' ? minScore : SCORE_THRESHOLD;
    const candidates = [];
    for (let i = 0; i + 5 < data.length; i += 6) {
      const score = data[i + 4] * data[i + 5];
      if (!Number.isFinite(score) || score < threshold ||
          !Number.isFinite(data[i]) || !Number.isFinite(data[i + 1]) ||
          !Number.isFinite(data[i + 2]) || !Number.isFinite(data[i + 3])) continue;

      const cx = data[i], cy = data[i + 1], boxW = data[i + 2], boxH = data[i + 3];
      const x1 = Math.max(0, (cx - boxW / 2 - transform.padX) / transform.scale);
      const y1 = Math.max(0, (cy - boxH / 2 - transform.padY) / transform.scale);
      const x2 = Math.min(width, (cx + boxW / 2 - transform.padX) / transform.scale);
      const y2 = Math.min(height, (cy + boxH / 2 - transform.padY) / transform.scale);
      if (x2 <= x1 || y2 <= y1) continue;
      candidates.push({
        class: 'lego',
        kind: 'lego',
        score,
        bbox: [x1, y1, x2 - x1, y2 - y1]
      });
    }
    return suppress(candidates);
  }

  function ensureCanvas() {
    if (canvas) return;
    canvas = document.createElement('canvas');
    canvas.width = SIZE;
    canvas.height = SIZE;
    context = canvas.getContext('2d', { willReadFrequently: true, alpha: false });
  }

  async function load() {
    if (sessionPromise) return sessionPromise;
    if (!window.ort || !window.ort.InferenceSession) throw new Error('ONNX Runtime Web unavailable');
    window.ort.env.wasm.wasmPaths = ORT_BASE;
    window.ort.env.wasm.numThreads = 1;
    sessionPromise = (async () => {
      const options = { graphOptimizationLevel: 'all' };
      if (navigator.gpu) {
        try {
          const session = await window.ort.InferenceSession.create(MODEL_URL, Object.assign({}, options, {
            executionProviders: ['webgpu']
          }));
          activeProvider = 'webgpu';
          return session;
        } catch (error) { /* 미지원 연산 또는 장치면 WASM으로 재시도 */ }
      }
      const session = await window.ort.InferenceSession.create(MODEL_URL, Object.assign({}, options, {
        executionProviders: ['wasm']
      }));
      activeProvider = 'wasm';
      return session;
    })().catch(error => {
      sessionPromise = null;
      throw error;
    });
    return sessionPromise;
  }

  async function detect(source, minScore) {
    const session = await load();
    const size = sourceSize(source);
    if (!size.width || !size.height) return [];

    ensureCanvas();
    context.fillStyle = 'rgb(114,114,114)';
    context.fillRect(0, 0, SIZE, SIZE);
    const scale = Math.min(SIZE / size.width, SIZE / size.height);
    const drawW = size.width * scale;
    const drawH = size.height * scale;
    const padX = (SIZE - drawW) / 2;
    const padY = (SIZE - drawH) / 2;
    context.drawImage(source, padX, padY, drawW, drawH);

    const rgba = context.getImageData(0, 0, SIZE, SIZE).data;
    const planeSize = SIZE * SIZE;
    const input = new Float32Array(planeSize * 3);
    for (let pixel = 0, rgb = 0; pixel < planeSize; pixel++, rgb += 4) {
      input[pixel] = rgba[rgb] / 255;
      input[planeSize + pixel] = rgba[rgb + 1] / 255;
      input[planeSize * 2 + pixel] = rgba[rgb + 2] / 255;
    }

    const tensor = new window.ort.Tensor('float32', input, [1, 3, SIZE, SIZE]);
    const result = await session.run({ [session.inputNames[0]]: tensor });
    const predictions = result[session.outputNames[0]];
    return decodeOutput(predictions.data, size.width, size.height, { scale, padX, padY }, minScore);
  }

  window.LegoDetector = {
    load,
    detect,
    isReady: () => Boolean(sessionPromise),
    backend: () => activeProvider,
    _decodeOutput: decodeOutput
  };
})();
