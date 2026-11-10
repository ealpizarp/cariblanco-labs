import { type Locale, htmlLang, getMessages } from '@/i18n';
import { localizePath, routes } from '@/i18n/paths';
import { getServices } from './services';
import { site } from './site';

/**
 * JSON-LD for the business. Only facts we can verify are emitted; optional
 * contact fields are added when configured. No address is included until the
 * business confirms whether it has a public physical location.
 */
export function businessJsonLd(
  siteUrl: URL,
  ogImageUrl: URL,
  locale: Locale,
): Record<string, unknown> {
  const t = getMessages(locale);
  const home = new URL(localizePath(routes.home, locale), siteUrl).href;
  const data: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': new URL('#business', siteUrl).href,
    name: site.name,
    url: home,
    description: t.meta.siteDescription,
    image: ogImageUrl.href,
    inLanguage: htmlLang(locale),
    areaServed: { '@type': 'Country', name: 'Costa Rica' },
    founder: site.founders.map((person, index) => ({
      '@type': 'Person',
      name: person.name,
      jobTitle: t.meta.founderJobTitles[index] ?? t.meta.founderJobTitle,
    })),
    knowsAbout: [...t.meta.knowsAbout],
  };

  if (site.contact.email !== null) data['email'] = site.contact.email;
  if (site.contact.whatsappNumber !== null) data['telephone'] = `+${site.contact.whatsappNumber}`;

  const sameAs = Object.values(site.social).filter((url): url is string => url !== null);
  if (sameAs.length > 0) data['sameAs'] = sameAs;

  return data;
}

export interface BreadcrumbCrumb {
  readonly name: string;
  readonly path: string;
}

/** BreadcrumbList for inner pages. Home is always the first crumb. */
export function breadcrumbJsonLd(
  siteUrl: URL,
  crumbs: readonly BreadcrumbCrumb[],
  locale: Locale,
): Record<string, unknown> {
  const home = new URL(localizePath(routes.home, locale), siteUrl).href;
  const itemListElement = [
    { '@type': 'ListItem', position: 1, name: site.name, item: home },
    ...crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 2,
      name: crumb.name,
      item: new URL(crumb.path, siteUrl).href,
    })),
  ];

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement,
  };
}

/**
 * The services as a catalog of Service entries offered by the business.
 * No prices: every job is scoped and quoted in writing.
 */
export function servicesJsonLd(siteUrl: URL, locale: Locale): Record<string, unknown> {
  const t = getMessages(locale);
  const servicios = localizePath(routes.servicios, locale);

  return {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name: t.meta.servicesCatalogName,
    inLanguage: htmlLang(locale),
    itemListElement: getServices(locale).map((service, index) => ({
      '@type': 'Service',
      name: service.name,
      description: service.summary,
      url: new URL(`${servicios}#${service.id}`, siteUrl).href,
      position: index + 1,
      areaServed: { '@type': 'Country', name: 'Costa Rica' },
      provider: { '@id': new URL('#business', siteUrl).href },
    })),
  };
}

/** Escapes a JSON payload for safe inlining in a <script> element. */
export function serializeJsonLd(data: Record<string, unknown>): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}
