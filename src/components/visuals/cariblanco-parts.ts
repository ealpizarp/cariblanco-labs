/**
 * The cariblanco (white-faced capuchin, Cebus imitator) as inner SVG
 * markup, shared by every drawing of it (`Cariblanco.astro`, the founder
 * portraits, the service sketches).
 *
 * Colours, all set by the parent:
 *  - `currentColor`  the black body, limbs, tail and cap;
 *  - `--cb-hood`     the cream hood: head, shoulders and chest;
 *  - `--cb-face`     the bare pink face and inner ears;
 *  - `--cb-ring`     a thin outline round every body part. On light
 *                    grounds it is the ground colour (it only shows where
 *                    a limb crosses the body); on dark grounds it is a
 *                    pale line, so the black animal reads;
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

/** How far the outline shows outside a shape, in drawing units. */
const RING = 1.5;

/**
 * A limb or tail: a round-capped stroke in the body colour, optionally
 * ending in a hand. A slightly wider stroke in `--cb-ring` goes under it,
 * so the limb reads where it crosses the body, and the whole animal keeps
 * an outline on dark grounds. The drawing's root group must set
 * `fill="none"` and `stroke-linecap="round"` (once, to keep markup small).
 */
export function limb(d: string, width = 7, hand?: readonly [x: number, y: number, r?: number]): string {
  const [hx, hy, hr = 4] = hand ?? [0, 0, 0];
  const under =
    `<path d="${d}" stroke="var(--cb-ring)" stroke-width="${width + RING * 2}"/>` +
    (hand ? `<circle cx="${hx}" cy="${hy}" r="${hr + RING}" fill="var(--cb-ring)"/>` : '');
  const over =
    `<path d="${d}" stroke="currentColor" stroke-width="${width}"/>` +
    (hand ? `<circle cx="${hx}" cy="${hy}" r="${hr}" fill="currentColor"/>` : '');
  return under + over;
}

/** A filled body shape in the body colour, with the same outline. */
export const body = (shape: string): string =>
  `<g fill="currentColor" stroke="var(--cb-ring)" stroke-width="${RING * 2}" paint-order="stroke">${shape}</g>`;

/** A patch of the cream hood over the body (shoulders, chest). */
export const hood = (d: string): string => `<path fill="var(--cb-hood)" d="${d}"/>`;

/**
 * The parts of each pose that never move on their own: defined once per
 * page (`CariblancoDefs.astro`) and placed with `<use>`. Colours here
 * must be attributes (CSS variables are fine): class rules do not reach
 * inside a `<use>`. Tails, heads,
 * eyes, walking legs and any arm that changes stay in each drawing, where
 * animations can reach them.
 */
export const CORES = {
  /** Seated: body, feet, hood and the left arm resting in the lap. */
  'cb-sit':
    body(
      '<path d="M31 54 C29 42 40 38 50 38 C60 38 71 42 69 54 L73 92 C74 106 64 114 50 114 C36 114 26 106 27 92 Z"/>' +
        '<ellipse cx="37" cy="108" rx="12" ry="8"/><ellipse cx="63" cy="108" rx="12" ry="8"/>',
    ) +
    hood('M32 48 C37 41 63 41 68 48 C66 62 58 70 50 72 C42 70 34 62 32 48 Z') +
    limb('M34 56 C28 70 34 84 46 88', 7, [46, 88]),
  /** Hanging: tail and hand on the vine, legs, body and hood. */
  'cb-hang':
    limb('M56 82 C66 70 68 46 62 26 C58 14 64 6 70 10 C75 14 70 20 66 16', 5) +
    limb('M38 58 C32 44 32 26 36 13', 7, [36, 12]) +
    limb('M42 104 C40 116 40 126 42 136') +
    limb('M58 104 C61 116 62 124 66 132') +
    body('<path d="M33 62 C31 50 41 46 50 46 C59 46 69 50 67 62 L69 90 C70 102 61 108 50 108 C39 108 30 102 31 90 Z"/>') +
    hood('M34 56 C39 49 61 49 66 56 C64 69 57 76 50 78 C43 76 36 69 34 56 Z'),
  /** Leaping: all of it but the head. */
  'cb-leap':
    limb('M44 50 C30 54 18 50 12 38 C6 26 12 14 22 16 C30 18 28 28 22 26', 5) +
    limb('M52 56 C40 66 28 72 16 74') +
    limb('M54 52 C42 56 30 56 18 54') +
    body('<path d="M44 50 C46 38 64 32 84 34 C100 36 112 42 112 52 C112 62 98 66 82 64 C64 62 46 62 44 50 Z"/>') +
    hood('M96 38 C106 38 114 44 114 54 C106 60 98 60 92 56 C90 50 91 42 96 38 Z') +
    limb('M104 46 C116 40 128 32 142 26', 7, [143, 25, 3.8]) +
    limb('M104 54 C118 54 132 50 146 44', 7, [147, 43, 3.8]),
  /** Tails (each drawing wraps its tail in a group that can sway). */
  'cb-sit-tail': limb('M38 108 C26 116 22 130 26 142 C29 150 38 150 38 143 C38 138 33 138 32 141', 5),
  'cb-walk-tail': limb('M24 50 C10 46 4 32 10 20 C14 11 25 13 23 21 C22 26 17 25 17 21', 5),
  /** A seated monkey's right arm: in the lap, scratching its head, or
      holding up a stone. */
  'cb-arm-lap': limb('M66 56 C72 70 66 84 54 88', 7, [54, 88]),
  'cb-arm-think': limb('M66 56 C80 46 80 26 68 14', 7, [66, 13]),
  'cb-arm-stone':
    limb('M66 56 C80 50 84 36 78 26', 7, [78, 25]) + '<ellipse cx="80" cy="18" rx="6.5" ry="5.5" fill="var(--color-fern-400)"/>',
  /** Walking: body and hood (the legs move, so they are not here). */
  'cb-walk':
    body('<path d="M20 50 C20 38 38 32 60 33 C80 34 96 40 96 52 C96 62 82 66 60 65 C38 66 20 62 20 50 Z"/>') +
    hood('M80 37 C90 38 97 44 96 54 C90 60 82 62 76 58 C73 50 75 42 80 37 Z'),
} as const;

/** A `<use>` of one of the cores. */
export const core = (id: keyof typeof CORES): string => `<use href="#${id}"/>`;
