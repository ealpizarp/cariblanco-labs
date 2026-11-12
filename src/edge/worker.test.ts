import assert from 'node:assert/strict';
import { describe, it } from 'vitest';
import worker, { type AssetEnv } from './worker';

/** A stand-in for the static assets binding that records what it served. */
function assets(): AssetEnv & { served: string[] } {
  const served: string[] = [];
  return {
    served,
    ASSETS: {
      fetch: (request) => {
        served.push(new URL(request.url).pathname);
        return Promise.resolve(new Response('asset', { status: 200 }));
      },
    },
  };
}

const get = (path: string, cookie?: string): Request =>
  new Request(`https://cariblancolabs.com${path}`, cookie ? { headers: { cookie } } : {});

describe('edge worker', () => {
  it('sends / to Spanish by default, without caching', async () => {
    const env = assets();
    const response = await worker.fetch(get('/'), env);
    assert.equal(response.status, 302);
    assert.equal(response.headers.get('location'), '/es/');
    assert.match(response.headers.get('set-cookie') ?? '', /fw_locale=es;.*Secure/);
    assert.equal(response.headers.get('cache-control'), 'private, no-store');
    assert.deepEqual(env.served, []);
  });

  it('sends / to the language in the cookie', async () => {
    const response = await worker.fetch(get('/', 'fw_locale=en'), assets());
    assert.equal(response.headers.get('location'), '/en/');
  });

  it('keeps the query string on unprefixed page redirects', async () => {
    const response = await worker.fetch(get('/servicios?utm=x', 'fw_locale=en'), assets());
    assert.equal(response.status, 301);
    assert.equal(response.headers.get('location'), '/en/services/?utm=x');
  });

  it('passes prefixed pages through untouched, with no cookie', async () => {
    const env = assets();
    const response = await worker.fetch(get('/en/services/'), env);
    assert.equal(response.status, 200);
    assert.equal(response.headers.get('set-cookie'), null);
    assert.deepEqual(env.served, ['/en/services/']);
  });

  it('passes unknown paths to the assets (which serve the 404 page)', async () => {
    const env = assets();
    await worker.fetch(get('/nope/'), env);
    assert.deepEqual(env.served, ['/nope/']);
  });
});
