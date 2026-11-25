'use strict';

const assert = require('assert');

global.window = {};
global.document = { baseURI: 'http://localhost/' };
require('../js/lego-detector');

const row = (cx, cy, w, h, objectness, classScore) => [cx, cy, w, h, objectness, classScore];
const output = new Float32Array([
  ...row(320, 320, 100, 100, 0.9, 0.9),
  ...row(322, 321, 100, 100, 0.8, 0.9), // overlaps first box; NMS should drop it
  ...row(100, 100, 40, 40, 0.4, 0.8) // below the default confidence threshold
]);

const boxes = window.LegoDetector._decodeOutput(
  output,
  640,
  480,
  { scale: 1, padX: 0, padY: 80 }
);

assert.strictEqual(boxes.length, 1, 'NMS and confidence threshold should leave one box');
assert.strictEqual(boxes[0].kind, 'lego');
assert.ok(Math.abs(boxes[0].score - 0.81) < 1e-6);
assert.deepStrictEqual(boxes[0].bbox, [270, 190, 100, 100]);
console.log('Lego detector output decoding passed');
