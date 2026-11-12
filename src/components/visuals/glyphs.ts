/**
 * Small marks of the cariblanco language, as inner SVG markup centred on
 * (0, 0). Fill (and stroke for the leaf) comes from the parent.
 */

/** A vine leaf, pointing up from its stalk at the origin; 12 × 16. */
export const LEAF =
  '<path d="M0 7 C-6 4 -7 -3 0 -9 C7 -3 6 4 0 7 Z"/><path d="M0 7 V-6" fill="none" stroke-width="0.9"/>';
export const LEAF_VIEWBOX = '-7.5 -10 15 18';

/**
 * A capuchin's hand print: palm, four fingers and a thumb set apart,
 * fingers up. For the ownership stamp and the founders' mark.
 */
export const HAND_PRINT =
  '<path d="M-4.6 1 C-5 -2 -2.5 -3.4 0 -3.4 C2.5 -3.4 5 -2 4.6 1 C4.6 5 2.4 7.4 0 7.4 C-2.4 7.4 -4.6 5 -4.6 1 Z"/>' +
  '<rect x="-4.6" y="-10" width="2" height="6.4" rx="1"/>' +
  '<rect x="-1.9" y="-11.2" width="2" height="7.4" rx="1"/>' +
  '<rect x="0.8" y="-10.8" width="2" height="7" rx="1"/>' +
  '<rect x="3.4" y="-9" width="1.9" height="5.6" rx="0.95"/>' +
  '<rect x="-9" y="-2.6" width="1.9" height="5.6" rx="0.95" transform="rotate(-48 -8 0)"/>';
export const HAND_VIEWBOX = '-10 -12 18 20';
