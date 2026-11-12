/**
 * The pizote's head and tail, as inner SVG markup, shared by every drawing
 * of it (`Pizote.astro`, the founder portraits). Coordinates are the
 * walking pose's: the head faces right, snout tip at (221, 97); the tail
 * stands up from the rump at about (70, 82).
 *
 * Colours: `currentColor` for the body, `--pz-ring` for the tail rings and
 * inner ear, `--pz-mark` for the face marks.
 */

/** Head, facing right; the snout tip is at (221, 97). Shared by every pose. */
export const head = (eyes: 'open' | 'shut' = 'open') => `
  <path fill="currentColor" d="M150 76 C156 68 168 64 178 68 C188 72 194 80 202 86 C208 90 214 92 219 93 C223 94 223 99 219 100 C211 102 202 103 194 104 C186 106 178 112 166 116 C156 118 148 110 148 98 C147 90 147 82 150 76 Z"/>
  <circle cx="164" cy="66" r="7" fill="currentColor"/>
  <circle cx="164" cy="66" r="3" fill="var(--pz-ring)" opacity=".5"/>
  <g fill="var(--pz-mark)">
    <path d="M176 76 C181 74 186 76 189 79 C185 80 180 79 176 76 Z"/>
    <path d="M178 92 C183 92 188 94 191 97 C186 98 181 96 178 92 Z"/>
    ${eyes === 'open' ? '<circle cx="182" cy="84" r="4"/>' : ''}
    <path d="M200 96 C207 97 213 98 218 99 C212 101 205 101 199 100 Z"/>
  </g>
  ${
    eyes === 'open'
      ? '<circle cx="182.5" cy="84" r="2.6" fill="#12160d"/>'
      : '<path d="M177 84 C180 87 184 87 187 84" stroke="#12160d" stroke-width="2" stroke-linecap="round" fill="none"/>'
  }
  <circle cx="220.5" cy="96.5" r="2.8" fill="#12160d"/>`;

/** Tail held up from the rump, with four rings (bands follow its edges). */
export const TAIL = `
  <path fill="currentColor" d="M66 84 C58 66 52 46 52 28 C52 18 55 10 60 5 C64 9 65 16 64 26 C63 42 68 60 80 78 Z"/>
  <path fill="var(--pz-ring)" opacity=".75" d="M54 14.9 L52.6 20.5 L64.4 20.2 L64.1 14.8 Z M52 29.6 L52.3 35.4 L64 34.1 L63.9 28.7 Z M53.5 44.5 L54.6 50.2 L66.2 47.9 L65 42.6 Z M56.8 59.1 L58.5 64.6 L70.7 61 L68.7 56 Z"/>`;
