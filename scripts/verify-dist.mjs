#!/usr/bin/env node
/**
 * Checks the built site in ./dist, after `npm run build`:
 *  - every internal link and `#anchor` resolves to a built page and an id;
 *  - every indexable page has one <h1>, a canonical URL, and an hreflang
 *    link for each language plus x-default;
 *  - no page's HTML is over the size budget (inline SVG creeps up quietly).
 *
 * Plain Node, no dependencies: the HTML is our own build output, so simple
 * attribute matching is enough. Exits non-zero with a list of problems.
 */
import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const DIST = fileURLToPath(new URL('../dist/', import.meta.url));
/** Uncompressed HTML per page. The home page is the largest, at ~90 KB. */
const HTML_BUDGET_BYTES = 120 * 1024;
const LOCALES = ['es', 'en'];

if (!existsSync(DIST)) {
  console.error('dist/ not found. Run `npm run build` first.');
  process.exit(1);
}

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });
}

const files = walk(DIST);
const htmlFiles = files.filter((file) => file.endsWith('.html'));

/** URL path (`/es/servicios/`) for a built HTML file. */
const urlFor = (file) => '/' + relative(DIST, file).replace(/index\.html$/, '').replace(/\\/g, '/');

const pages = new Map(htmlFiles.map((file) => [urlFor(file), readFileSync(file, 'utf8')]));
const assets = new Set(files.map((file) => '/' + relative(DIST, file).replace(/\\/g, '/')));
const isRedirectStub = (html) => /<meta http-equiv="refresh"/i.test(html) && html.length < 2000;
const idsOf = (html) => new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]));

const problems = [];
const report = (page, message) => problems.push(`${page}: ${message}`);

for (const [page, html] of pages) {
  if (isRedirectStub(html)) continue;

  if (html.length > HTML_BUDGET_BYTES) {
    report(page, `HTML is ${(html.length / 1024).toFixed(0)} KB (budget ${HTML_BUDGET_BYTES / 1024} KB)`);
  }

  const indexable = !/<meta name="robots" content="noindex/.test(html);
  if (indexable) {
    const h1s = html.match(/<h1[\s>]/g)?.length ?? 0;
    if (h1s !== 1) report(page, `expected one <h1>, found ${h1s}`);
    if (!/<link rel="canonical" href="https?:\/\//.test(html)) report(page, 'missing absolute canonical URL');
    for (const lang of [...LOCALES.map((l) => (l === 'es' ? 'es-CR' : l)), 'x-default']) {
      if (!html.includes(`hreflang="${lang}"`)) report(page, `missing hreflang="${lang}"`);
    }
  }

  // Internal links: href="/…" (not protocol-relative) and same-page "#…".
  const pageIds = idsOf(html);
  for (const [, href] of html.matchAll(/\shref="([^"]+)"/g)) {
    if (href.startsWith('#')) {
      if (href.length > 1 && !pageIds.has(decodeURIComponent(href.slice(1)))) report(page, `broken anchor ${href}`);
      continue;
    }
    if (!href.startsWith('/') || href.startsWith('//')) continue;

    const [pathAndQuery, hash] = href.split('#');
    const path = (pathAndQuery ?? '/').split('?')[0] ?? '/';
    const target = pages.get(path) ?? pages.get(`${path}/`);
    if (target === undefined) {
      if (!assets.has(path)) report(page, `broken link ${href}`);
      continue;
    }
    if (hash && !isRedirectStub(target) && !idsOf(target).has(decodeURIComponent(hash))) {
      report(page, `broken anchor ${href}`);
    }
  }
}

const checked = [...pages.values()].filter((html) => !isRedirectStub(html)).length;
if (problems.length > 0) {
  console.error(`verify-dist: ${problems.length} problem(s) in ${checked} pages\n`);
  for (const problem of problems) console.error(`  ${problem}`);
  process.exit(1);
}
console.log(`verify-dist: ${checked} pages OK (links, anchors, h1, canonical, hreflang, size budget)`);
