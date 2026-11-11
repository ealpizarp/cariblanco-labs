import { getMessages, type Locale } from '@/i18n';

export type ServiceId = 'sitio' | 'tienda' | 'asistente' | 'cuidado';

/** The line drawing that belongs to a service, where it has one. */
export type SketchId = 'site' | 'shop' | 'assistant';

export interface ServiceFact {
  readonly id: ServiceId;
  /**
   * Lead services are what a client chooses and get their own section and
   * drawing. The rest is the base every lead service runs on.
   */
  readonly lead: boolean;
  readonly sketch: SketchId | null;
}

/** Locale-agnostic order and layout facts. Copy lives in `src/i18n`. */
export const serviceFacts: readonly ServiceFact[] = [
  { id: 'sitio', lead: true, sketch: 'site' },
  { id: 'tienda', lead: true, sketch: 'shop' },
  { id: 'asistente', lead: true, sketch: 'assistant' },
  { id: 'cuidado', lead: false, sketch: null },
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

