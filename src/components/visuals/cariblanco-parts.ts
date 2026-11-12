/**
 * The cariblanco (white-faced capuchin, Cebus imitator) as inner SVG
 * markup, shared by every drawing of it (`Cariblanco.astro`, the founder
 * portraits, the service sketches).
 *
 * Colours, all set by the parent:
 *  - `currentColor`  the black body, limbs, tail and cap;
 *  - `--cb-hood`     the cream hood: head, shoulders and chest;
 *  - `--cb-face`     the bare pink face and inner ears;
 *  - `--cb-ring`     a thin outline where a limb crosses the body (the
 *                    ground colour), so arms read against the torso;
 *  - `--cb-edge`     an outline round the hood, for light grounds where
 *                    cream on mist would disappear (default: none).
 */

/** Eyes and mouth are near-black on every ground. */
const INK = '#12160d';

/** Hood, ears, cap, face, nose and mouth: everything but the eyes. */
export const HEAD_ART =
  '<g fill="var(--cb-hood)" stroke="var(--cb-edge, none)" stroke-width="1.4" paint-order="stroke"><circle cx="-18.5" cy="1" r="5.5"/><circle cx="18.5" cy="1" r="5.5"/>' +
  '<path d="M-17 -5 C-19 -19 -10 -25 0 -25 C10 -25 19 -19 17 -5 C19 9 11 20 0 21 C-11 20 -19 9 -17 -5 Z"/></g>' +
  '<circle cx="-18.5" cy="1" r="2.6" fill="var(--cb-face)"/><circle cx="18.5" cy="1" r="2.6" fill="var(--cb-face)"/>' +
  '<path fill="currentColor" d="M-14.5 -12 C-14 -23 14 -23 14.5 -12 C10 -15.5 5.5 -15 0 -10 C-5.5 -15 -10 -15.5 -14.5 -12 Z"/>' +
  '<path fill="var(--cb-face)" d="M-10.5 -4 C-10.5 -9.5 -5.5 -11 0 -8 C5.5 -11 10.5 -9.5 10.5 -4 C11.5 6 6 13.5 0 13.5 C-6 13.5 -11.5 6 -10.5 -4 Z"/>' +
  `<circle cx="-1.3" cy="3.6" r=".85" fill="${INK}"/><circle cx="1.3" cy="3.6" r=".85" fill="${INK}"/>` +
  `<path d="M-3 8.2 Q0 9.8 3 8.2" stroke="${INK}" stroke-width="1" stroke-linecap="round" fill="none"/>`;

/** Id of the shared head definition (see `CariblancoDefs.astro`). */
export const HEAD_ID = 'cb-head';

/** A heart-shaped vine leaf, hanging from its stalk at the origin. */
export const LEAF_ART = '<path d="M0 0 C-4 -2 -7 -8 -4 -13 C-2 -15 0 -14 0 -12 C0 -14 2 -15 4 -13 C7 -8 4 -2 0 0 Z"/>';

/** Id of the shared leaf definition. */
export const LEAF_ID = 'cb-leaf';

/**
 * The head, facing out, centred on (0, 0), about 48 wide with the ears.
 * Black cap with a widow's peak, cream hood, pink face. The face is a
 * `<use>` of the page's one shared definition, which keeps a page with a
 * dozen monkeys small; colours still inherit through it. The eyes are
 * drawn here, so open eyes (in `.cb__eyes`) can blink.
 */
export function head(eyes: 'open' | 'shut' = 'open'): string {
  const face =
    eyes === 'open'
      ? `<g class="cb__eyes" fill="${INK}"><circle cx="-4.6" cy="-2.6" r="2.5"/><circle cx="4.6" cy="-2.6" r="2.5"/>` +
        '<circle cx="-3.9" cy="-3.4" r=".8" fill="#fff"/><circle cx="5.3" cy="-3.4" r=".8" fill="#fff"/></g>'
      : `<path d="M-7 -2.5 Q-4.6 -0.5 -2.2 -2.5 M2.2 -2.5 Q4.6 -0.5 7 -2.5" stroke="${INK}" stroke-width="1.3" stroke-linecap="round" fill="none"/>`;
  return `<use href="#${HEAD_ID}"/>` + face;
}

/**
 * The head placed at (x, y), scaled and turned. The placement is on an
 * outer group; animations rotate the inner `.cb__head` about its centre,
 * so a CSS transform-origin never moves the placement.
 */
export const headAt = (x: number, y: number, scale = 1, turn = 0, eyes: 'open' | 'shut' = 'open'): string =>
  `<g transform="translate(${x} ${y}) rotate(${turn}) scale(${scale})"><g class="cb__head">${head(eyes)}</g></g>`;

/** A limb or tail: a round-capped stroke in the body colour. */
export const limb = (d: string, width = 7): string =>
  `<path d="${d}" stroke="currentColor" stroke-width="${width}" stroke-linecap="round" fill="none"/>`;

/** A limb drawn over the body, with a thin outline in the ground colour. */
export const arm = (d: string, width = 7): string =>
  `<path d="${d}" stroke="var(--cb-ring)" stroke-width="${width + 3}" stroke-linecap="round" fill="none"/>` + limb(d, width);

/** A hand (or foot): a small round in the body colour. */
export const hand = (x: number, y: number, r = 4): string => `<circle cx="${x}" cy="${y}" r="${r}" fill="currentColor"/>`;
