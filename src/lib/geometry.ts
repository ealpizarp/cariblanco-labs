/**
 * Small build-time geometry helpers for the hand-drawn SVG visuals
 * (contour lines, growth rings). Everything here runs in Node during the
 * build; nothing is shipped to the browser.
 */

export type Point = readonly [number, number];

/**
 * Closed Catmull-Rom spline through `points`, as an SVG path of cubic
 * Bézier segments. `digits` is the decimal precision of the output; the
 * default of 0 keeps the markup small, which is plenty for viewBoxes
 * measured in hundreds of units.
 */
export function smoothClosedPath(points: readonly Point[], digits = 0): string {
  const n = points.length;
  if (n === 0) return '';
  const at = (i: number): Point => points[((i % n) + n) % n] ?? [0, 0];
  const f = (value: number): string => {
    const fixed = value.toFixed(digits);
    // "-0" and "0.0" carry no information; keep the output canonical.
    return Number(fixed) === 0 ? '0' : fixed;
  };

  const [x0, y0] = at(0);
  let d = `M${f(x0)} ${f(y0)}`;
  for (let i = 0; i < n; i += 1) {
    const p0 = at(i - 1);
    const p1 = at(i);
    const p2 = at(i + 1);
    const p3 = at(i + 2);
    const c1x = p1[0] + (p2[0] - p0[0]) / 6;
    const c1y = p1[1] + (p2[1] - p0[1]) / 6;
    const c2x = p2[0] - (p3[0] - p1[0]) / 6;
    const c2y = p2[1] - (p3[1] - p1[1]) / 6;
    d += `C${f(c1x)} ${f(c1y)} ${f(c2x)} ${f(c2y)} ${f(p2[0])} ${f(p2[1])}`;
  }
  return `${d}Z`;
}

export interface WobblyRingOptions {
  /** Centre. */
  readonly cx: number;
  readonly cy: number;
  /** Base radius before wobble and stretch. */
  readonly radius: number;
  /** Horizontal and vertical stretch of the ellipse. */
  readonly sx: number;
  readonly sy: number;
  /** Number of points sampled around the ring. */
  readonly samples: number;
  /** Radial multiplier for the angle `a` (1 = perfect ellipse). */
  readonly wobble: (a: number) => number;
}

/** Points of a closed, slightly irregular ellipse. */
export function wobblyRing(options: WobblyRingOptions): Point[] {
  const { cx, cy, radius, sx, sy, samples, wobble } = options;
  const points: Point[] = [];
  for (let i = 0; i < samples; i += 1) {
    const a = (i / samples) * Math.PI * 2;
    const r = radius * wobble(a);
    points.push([cx + Math.cos(a) * r * sx, cy + Math.sin(a) * r * sy]);
  }
  return points;
}
