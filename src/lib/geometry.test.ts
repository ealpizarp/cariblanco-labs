import assert from 'node:assert/strict';
import { describe, it } from 'vitest';
import { smoothClosedPath, wobblyRing } from './geometry';
import { contourLines, contourPresetNames, contourSvgDocument } from './contours';

describe('smoothClosedPath', () => {
  it('returns an empty path for no points', () => {
    assert.equal(smoothClosedPath([]), '');
  });

  it('starts at the first point, has one curve per point, and closes', () => {
    const d = smoothClosedPath([
      [0, 0],
      [10, 0],
      [10, 10],
      [0, 10],
    ]);
    assert.ok(d.startsWith('M0 0C'));
    assert.equal(d.match(/C/g)?.length, 4);
    // The last segment ends back on the first point.
    assert.ok(d.endsWith(' 0 0Z'));
  });

  it('respects the requested precision and never prints -0', () => {
    const d = smoothClosedPath(
      [
        [0.04, -0.04],
        [5.55, 1.25],
        [2.5, 7.75],
      ],
      1,
    );
    assert.ok(!d.includes('-0 ') && !d.includes('-0C'));
    assert.match(d, /^M0 0C/);
  });
});

describe('wobblyRing', () => {
  it('samples a plain ellipse when the wobble is flat', () => {
    const points = wobblyRing({ cx: 50, cy: 50, radius: 10, sx: 2, sy: 1, samples: 4, wobble: () => 1 });
    assert.equal(points.length, 4);
    assert.deepEqual(points[0], [70, 50]);
    assert.ok(Math.abs((points[1]?.[1] ?? 0) - 60) < 1e-9);
  });
});

describe('contours', () => {
  it('builds every preset deterministically, with every fifth ring as an index line', () => {
    for (const preset of contourPresetNames) {
      const lines = contourLines(preset);
      assert.ok(lines.length > 0);
      assert.deepEqual(contourLines(preset), lines);
      assert.equal(lines[4]?.index, true);
      assert.equal(lines[3]?.index, false);
    }
  });

  it('writes a standalone SVG document with integer coordinates', () => {
    const svg = contourSvgDocument('footer', '#c5d063');
    assert.ok(svg.startsWith('<svg xmlns="http://www.w3.org/2000/svg"'));
    assert.ok(svg.includes('stroke="#c5d063"'));
    assert.ok(!/\d\.\d/.test(svg.replace(/stroke-width="[\d.]+"|opacity="[\d.]+"/g, '')));
  });
});
