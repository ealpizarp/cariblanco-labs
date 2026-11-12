/**
 * The shape of a vine's rope, shared by `Vine.astro` (which draws it) and
 * anything that places things on it (the hero's troop sits, hangs and
 * walks on its branch), so both agree on where the rope is.
 *
 * Units are the vine's viewBox units: x runs 0..span, y down from the top.
 * The rope sags `sag` in the middle and undulates `wave` up and down,
 * `waves` times across, starting at `phase` (radians).
 */
export interface RopeShape {
  readonly span: number;
  readonly top: number;
  readonly sag: number;
  readonly wave: number;
  readonly waves: number;
  readonly phase: number;
}

/** Height of the rope at a fraction t (0..1) of the way across. */
export function ropeY(t: number, shape: RopeShape): number {
  return shape.top + shape.sag * 4 * t * (1 - t) + shape.wave * Math.sin(2 * Math.PI * shape.waves * t + shape.phase);
}

/** Lowest point of the rope (largest y), for fitting the viewBox. */
export function ropeBottom(shape: RopeShape, samples = 200): number {
  let bottom = -Infinity;
  for (let i = 0; i <= samples; i++) bottom = Math.max(bottom, ropeY(i / samples, shape));
  return bottom;
}

/** Slope angle of the rope at t, in degrees. */
export function ropeAngle(t: number, shape: RopeShape): number {
  const dt = 0.001;
  const dy = ropeY(Math.min(1, t + dt), shape) - ropeY(Math.max(0, t - dt), shape);
  const dx = shape.span * (Math.min(1, t + dt) - Math.max(0, t - dt));
  return (Math.atan2(dy, dx) * 180) / Math.PI;
}

/**
 * The rope as one smooth SVG path: sampled points joined with cubic
 * curves (Catmull-Rom), rounded to a tenth of a unit. `dy` shifts it down and
 * `dPhase` shifts the wave, for a second strand that twists round it.
 */
export function ropePath(shape: RopeShape, { dy = 0, dPhase = 0, samples = 16 } = {}): string {
  const s = { ...shape, phase: shape.phase + dPhase };
  const pts = Array.from({ length: samples + 1 }, (_, i) => {
    const t = i / samples;
    return [t * shape.span, ropeY(t, s) + dy] as const;
  });
  const r = (v: number): string => String(Math.round(v * 10) / 10);
  let d = `M${r(pts[0]![0])} ${r(pts[0]![1])}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[Math.max(0, i - 1)]!;
    const p1 = pts[i]!;
    const p2 = pts[i + 1]!;
    const p3 = pts[Math.min(pts.length - 1, i + 2)]!;
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += ` C${r(c1[0]!)} ${r(c1[1]!)} ${r(c2[0]!)} ${r(c2[1]!)} ${r(p2[0])} ${r(p2[1])}`;
  }
  return d;
}
