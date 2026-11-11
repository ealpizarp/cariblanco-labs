import { en } from './en';
import { es } from './es';
import { getLocale, type Locale } from './locales';
import { localizePath } from './paths';

export {
  defaultLocale,
  hrefLang,
  htmlLang,
  locales,
  LOCALE_COOKIE,
  toOpenGraphLocale,
  type Locale,
} from './locales';
export { localizePath, routes, switchLocalePath, type RouteKey } from './paths';
export { localeStaticPaths } from './static-paths';

export type Messages = typeof es;

export function getMessages(locale: Locale): Messages {
  return locale === 'en' ? en : es;
}

export function interpolate(template: string, vars: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => vars[key] ?? '');
}

export function useI18n(
  astro: { currentLocale?: string | undefined; url: URL },
  override?: Locale,
) {
  const locale = override ?? getLocale(astro.currentLocale, astro.url.pathname);
  const t = getMessages(locale);
  return {
    locale,
    t,
    path: (href: string) => localizePath(href, locale),
  };
}
