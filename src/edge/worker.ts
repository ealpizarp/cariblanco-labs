import { LOCALE_COOKIE } from '../i18n/locales';
import { serializeLocaleCookie } from '../i18n/cookie';
import { applyLocaleNav } from '../i18n/locale-nav';

export interface AssetEnv {
  readonly ASSETS: { fetch: (request: Request) => Promise<Response> };
}

/**
 * Cookie-aware locale redirects in front of Cloudflare static assets.
 * `/` and unprefixed URLs go to the visitor's language; everything else is
 * passed through untouched, so responses stay cacheable. Pages record the
 * chosen language themselves (see BaseLayout), so the worker does not
 * set cookies on ordinary responses.
 *
 * `wrangler.jsonc` only runs this worker for page routes; hashed assets
 * under `/_astro/` and the static decor files are served directly.
 * `astro dev` uses `src/edge/dev-locale.ts` for the same decisions.
 */
export default {
  async fetch(request: Request, env: AssetEnv): Promise<Response> {
    const url = new URL(request.url);
    const decision = applyLocaleNav(url.pathname, url.search, request.headers.get('cookie'));

    if (decision === null) {
      return env.ASSETS.fetch(request);
    }

    return new Response(null, {
      status: decision.status,
      headers: {
        Location: decision.location,
        'Set-Cookie': serializeLocaleCookie(
          LOCALE_COOKIE,
          decision.locale,
          url.protocol === 'https:',
        ),
        // Depends on the cookie, so shared caches must not reuse it.
        'Cache-Control': 'private, no-store',
        Vary: 'Cookie',
      },
    });
  },
};
