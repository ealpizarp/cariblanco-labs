import { locales } from './locales';

/** Builds `/es/…` and `/en/…` from a single page file under `src/pages/[locale]/`. */
export function localeStaticPaths() {
  return locales.map((locale) => ({ params: { locale } }));
}
