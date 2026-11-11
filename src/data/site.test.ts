import assert from 'node:assert/strict';
import { describe, it } from 'vitest';
import { emailUrl, formatWhatsapp, site, whatsappUrl } from './site';

describe('contact URLs', () => {
  it('builds a wa.me link with the message, or null when no number is set', () => {
    const number = site.contact.whatsappNumber;
    assert.equal(whatsappUrl('Hola'), number === null ? null : `https://wa.me/${number}?text=Hola`);
  });

  it('builds a mailto link, or null when no email is set', () => {
    const url = emailUrl('Consulta');
    if (site.contact.email === null) assert.equal(url, null);
    else assert.ok(url?.startsWith(`mailto:${site.contact.email}`));
  });
});

describe('formatWhatsapp', () => {
  it('groups Costa Rican numbers as +506 XXXX XXXX', () => {
    assert.equal(formatWhatsapp('50684047487'), '+506 8404 7487');
  });

  it('falls back to +digits for other numbers', () => {
    assert.equal(formatWhatsapp('15551234567'), '+15551234567');
  });
});
