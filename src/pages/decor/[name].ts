/**
 * Static contour backgrounds, one cacheable file per preset, e.g.
 * `/decor/contours-footer.svg`. Pages tint them with CSS `opacity`.
 */
import type { APIRoute, GetStaticPaths } from 'astro';
import { contourFileUrl, contourSvgDocument, staticContourPresets, type StaticContourPreset } from '@/lib/contours';

/** Lichen-300, the contour ink on moss. Mirrors `--color-lichen-300` in tokens.css. */
const INK = '#c5d063';

export const getStaticPaths = (() =>
  staticContourPresets.map((preset) => ({
    params: { name: contourFileUrl(preset).replace('/decor/', '') },
    props: { preset },
  }))) satisfies GetStaticPaths;

export const GET: APIRoute<{ preset: StaticContourPreset }> = ({ props }) =>
  new Response(contourSvgDocument(props.preset, INK), {
    headers: { 'Content-Type': 'image/svg+xml' },
  });
