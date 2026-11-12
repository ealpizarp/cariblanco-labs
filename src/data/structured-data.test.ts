import assert from 'node:assert/strict';
import { describe, it } from 'vitest';
import { servicesJsonLd } from './structured-data';
import { serviceFacts } from './services';

describe('servicesJsonLd', () => {
  for (const locale of ['es', 'en'] as const) {
    it(`lists every service without a price (${locale})`, () => {
      const catalog = servicesJsonLd(new URL('https://cariblancolabs.com'), locale);
      const items = catalog['itemListElement'] as Array<Record<string, unknown>>;
      assert.equal(items.length, serviceFacts.length);
      for (const item of items) {
        assert.equal(item['@type'], 'Service');
        assert.equal('price' in item, false);
        assert.equal('priceSpecification' in item, false);
        assert.equal(typeof item['name'], 'string');
        assert.ok((item['url'] as string).includes('#'));
      }
    });
  }
});
