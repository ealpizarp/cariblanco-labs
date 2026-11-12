import { getMessages, type Locale } from '@/i18n';

import type { GlyphName } from '@/components/visuals/LineGlyph.astro';

export type ServiceId =
  | 'sitio'
  | 'tienda'
  | 'asistente'
  | 'rediseno'
  | 'correo'
  | 'medida'
  | 'medicion'
  | 'seguridad'
  | 'capacitacion'
  | 'diagnostico'
  | 'cuidado';

/**
 * Where a service sits on the services page:
 *  - lead:  what most clients come for; its own section and drawing.
 *  - more:  further services, as cards.
 *  - start: the way in for anyone unsure (the diagnosis), at the close.
 *  - base:  monthly care, which everything else runs on.
 */
export type ServiceTier = 'lead' | 'more' | 'start' | 'base';

/** The line drawing that belongs to a service, where it has one. */
export type SketchId = 'site' | 'shop' | 'assistant';

export interface ServiceFact {
  readonly id: ServiceId;
  readonly tier: ServiceTier;
  readonly sketch: SketchId | null;
  /** The small line icon for a card, where the service is shown as one. */
  readonly glyph: GlyphName | null;
}

/** Locale-agnostic order and layout facts. Copy lives in `src/i18n`. */
export const serviceFacts: readonly ServiceFact[] = [
  { id: 'sitio', tier: 'lead', sketch: 'site', glyph: null },
  { id: 'tienda', tier: 'lead', sketch: 'shop', glyph: null },
  { id: 'asistente', tier: 'lead', sketch: 'assistant', glyph: null },
  { id: 'rediseno', tier: 'more', sketch: null, glyph: 'move' },
  { id: 'correo', tier: 'more', sketch: null, glyph: 'mail' },
  { id: 'medida', tier: 'more', sketch: null, glyph: 'code' },
  { id: 'medicion', tier: 'more', sketch: null, glyph: 'chart' },
  { id: 'seguridad', tier: 'more', sketch: null, glyph: 'key' },
  { id: 'capacitacion', tier: 'more', sketch: null, glyph: 'learn' },
  { id: 'diagnostico', tier: 'start', sketch: null, glyph: 'lens' },
  { id: 'cuidado', tier: 'base', sketch: null, glyph: null },
];

export interface Service extends ServiceFact {
  readonly name: string;
  readonly summary: string;
  readonly purpose: string;
  readonly support: string;
  readonly includes: readonly string[];
  /** Third-party costs the client pays directly, in their own name. */
  readonly separate: readonly string[];
}

export function getServices(locale: Locale): readonly Service[] {
  const copy = getMessages(locale).services.items;
  return serviceFacts.map((fact) => ({ ...fact, ...copy[fact.id] }));
}

