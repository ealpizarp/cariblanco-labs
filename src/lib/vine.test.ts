import assert from 'node:assert/strict';
import { describe, it } from 'vitest';
import { ropeAngle, ropeBottom, ropePath, ropeY, type RopeShape } from './vine';

const flat: RopeShape = { span: 1000, top: 10, sag: 0, wave: 0, waves: 1, phase: 0 };
const bough: RopeShape = { span: 1000, top: 30, sag: 0, wave: 8, waves: 1.65, phase: 0.85 };

describe('vine rope', () => {
  it('is level without sag or wave', () => {
    assert.equal(ropeY(0, flat), 10);
    assert.equal(ropeY(0.5, flat), 10);
    assert.equal(ropeAngle(0.3, flat), 0);
  });

  it('sags by `sag` in the middle', () => {
    assert.equal(ropeY(0.5, { ...flat, sag: 20 }), 30);
  });

  it('finds the lowest point of a wavy rope', () => {
    const low = ropeBottom(bough);
    assert.ok(low <= bough.top + bough.wave + 1e-9);
    for (let i = 0; i <= 50; i++) assert.ok(ropeY(i / 50, bough) <= low + 1e-6);
  });

  it('draws a path from end to end through the rope', () => {
    const d = ropePath(bough);
    assert.match(d, /^M0 [\d.]+ C/);
    assert.ok(d.endsWith(` 1000 ${Math.round(ropeY(1, bough) * 10) / 10}`));
    assert.equal(d.split(' C').length - 1, 16);
  });
});
