/**
 * Topographic contour lines, like the survey of a forested hillside.
 * Rings are computed at build time from a few "peaks", so no image is
 * authored by hand. Used two ways:
 *  - inline, by `Contours.astro`, where the lines draw in on load;
 *  - as cacheable static files (`/decor/contours-<preset>.svg`), for
 *    placements that repeat on every page and do not animate.
 */
import { smoothClosedPath, wobblyRing } from './geometry';

interface Peak {
  /** Centre, in viewBox units (0–1000 × 0–600). */
  readonly x: number;
  readonly y: number;
  /** Number of rings and the gap between them. */
  readonly rings: number;
  readonly step: number;
  /** Phase offset so peaks do not share a shape. */
  readonly seed: number;
}

export const contourPresets = {
  hero: [
    { x: 760, y: 250, rings: 14, step: 34, seed: 1.3 },
    { x: 120, y: 560, rings: 9, step: 38, seed: 4.1 },
  ],
  band: [
    { x: 880, y: 120, rings: 12, step: 36, seed: 2.2 },
    { x: 180, y: 520, rings: 7, step: 40, seed: 5.6 },
  ],
  footer: [{ x: 500, y: 620, rings: 16, step: 30, seed: 3.4 }],
} as const satisfies Record<string, readonly Peak[]>;

export type ContourPreset = keyof typeof contourPresets;

/** Presets that are also published as static files under `/decor/`. */
export const staticContourPresets = ['band', 'footer'] as const satisfies readonly ContourPreset[];
export type StaticContourPreset = (typeof staticContourPresets)[number];

export function contourFileUrl(preset: StaticContourPreset): string {
  return `/decor/contours-${preset}.svg`;
}

export const contourPresetNames = Object.keys(contourPresets) as ContourPreset[];

export const CONTOUR_VIEWBOX = { width: 1000, height: 600 } as const;

/**
 * Points per ring. 18 keeps the hand-drawn wobble (the highest harmonic is
 * 9 waves a ring) while keeping each path about half the size of a denser
 * sampling.
 */
const SAMPLES = 18;

export interface ContourLine {
  readonly d: string;
  /** Every fifth ring is an index contour, drawn a little heavier. */
  readonly index: boolean;
  /** Draw-in delay in seconds, so the rings appear from the peak out. */
  readonly delay: number;
}

function ringPath(peak: Peak, k: number): string {
  return smoothClosedPath(
    wobblyRing({
      cx: peak.x,
      cy: peak.y,
      radius: 26 + k * peak.step,
      sx: 1.45,
      sy: 0.82,
      samples: SAMPLES,
      wobble: (a) =>
        1 +
        0.16 * Math.sin(3 * a + peak.seed + k * 0.22) +
        0.08 * Math.sin(5 * a - peak.seed * 1.7 + k * 0.15) +
        0.04 * Math.sin(9 * a + k * 0.4),
    }),
  );
}

export function contourLines(preset: ContourPreset): ContourLine[] {
  return contourPresets[preset].flatMap((peak, p) =>
    Array.from({ length: peak.rings }, (_, k) => ({
      d: ringPath(peak, k),
      index: k % 5 === 4,
      delay: Math.round((p * 0.25 + k * 0.07) * 100) / 100,
    })),
  );
}

/**
 * A standalone SVG file of a preset. Lines are drawn at full strength;
 * the page sets the overall strength with CSS `opacity` on the element
 * that shows it, so one file serves every placement.
 */
export function contourSvgDocument(preset: ContourPreset, color: string): string {
  const { width, height } = CONTOUR_VIEWBOX;
  const paths = contourLines(preset)
    .map((line) =>
      line.index
        ? `<path d="${line.d}" stroke-width="1.3"/>`
        : `<path d="${line.d}" stroke-width="0.8" opacity="0.625"/>`,
    )
    .join('');
  return (
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}" preserveAspectRatio="xMidYMid slice">` +
    `<style>path{vector-effect:non-scaling-stroke}</style>` +
    `<g fill="none" stroke="${color}">${paths}</g></svg>`
  );
}
