/**
 * Business facts used across the site (metadata, structured data, footer,
 * calls to action). Anything marked TODO is unknown and must be confirmed
 * with the business before launch. Components treat `null` as "not
 * configured" and omit the corresponding UI rather than showing a fake value.
 *
 * User-facing sentences live in `src/i18n`. This file keeps names, IDs, and
 * contact fields that do not change with language.
 */

export interface ContactInfo {
  /**
   * WhatsApp number in international format, digits only (no "+", spaces or
   * dashes), e.g. "50688887777".
   * TODO(business): confirm the WhatsApp Business number.
   */
  readonly whatsappNumber: string | null;
  /** TODO(business): confirm the public contact email. */
  readonly email: string | null;
  /**
   * Unused for UI. Opening hours belong in `src/i18n` as `contact.hoursValue`.
   * TODO(business): confirm response/opening hours, then set hoursValue in both languages.
   */
  readonly hours: string | null;
}

export interface SocialLinks {
  /** TODO(business): confirm public profile URLs, or leave null to hide. */
  readonly linkedin: string | null;
  readonly instagram: string | null;
  readonly facebook: string | null;
}

export interface Founder {
  readonly name: string;
  /** University the founder graduated from (official name, any language). */
  readonly alumniOf?: string;
}

export interface SiteConfig {
  readonly name: string;
  /** ISO 3166-1 alpha-2. */
  readonly country: 'CR';
  /** In the order they are named on the site. */
  readonly founders: readonly Founder[];
  readonly contact: ContactInfo;
  readonly social: SocialLinks;
}

export const site: SiteConfig = {
  name: 'Cariblanco Labs',
  country: 'CR',
  founders: [
    { name: 'Erick Alpízar Prendas', alumniOf: 'Tecnológico de Costa Rica' },
    { name: 'Ernesto Pocasangre', alumniOf: 'Tecnológico de Costa Rica' },
  ],
  contact: {
    whatsappNumber: '50684047487',
    email: null,
    hours: null,
  },
  social: {
    linkedin: null,
    instagram: null,
    facebook: null,
  },
};

/**
 * Builds a wa.me deep link, or returns null when no number is configured so
 * callers can fall back to another contact path instead of a broken link.
 */
export function whatsappUrl(message: string): string | null {
  const number = site.contact.whatsappNumber;
  if (number === null) return null;

  const url = new URL(`https://wa.me/${number}`);
  url.searchParams.set('text', message);
  return url.toString();
}

/**
 * The WhatsApp number as people read it: "+506 8404 7487" for Costa Rican
 * numbers (country code, then 4 + 4 digits); other numbers as "+digits".
 */
export function formatWhatsapp(number: string): string {
  const local = number.startsWith('506') ? number.slice(3) : null;
  if (local !== null && local.length === 8) return `+506 ${local.slice(0, 4)} ${local.slice(4)}`;
  return `+${number}`;
}

/** Builds a mailto: link, or null when no email is configured. */
export function emailUrl(subject: string): string | null {
  const email = site.contact.email;
  if (email === null) return null;

  return `mailto:${email}?subject=${encodeURIComponent(subject)}`;
}
