# Cariblanco Labs website

Static marketing site for Cariblanco Labs (formerly Foresta Works), a Costa Rica studio that builds and looks after websites, and can add an intelligent assistant (on the site, WhatsApp or social media), for businesses and organizations. Built with [Astro](https://astro.build) 7 and strict TypeScript.

Costa Rican Spanish lives at `/es/`; English at `/en/`. There is no database, CMS, authentication, or server-side rendering.

## Stack

| Layer | Choice |
| --- | --- |
| Site | Astro 7, static output, TypeScript (`astro/tsconfigs/strict` plus extra flags) |
| Runtime | Node.js 22.12 or newer (see `.nvmrc`) |
| i18n | `es` (html `es-CR`) default, `en`. Default locale is prefixed. Slugs differ by language. |
| Fonts | Fontsource at build time: Newsreader (serif), Instrument Sans (sans), JetBrains Mono (labels, tags) |
| Images | No photos ship today; the drawings are inline SVG built at compile time. `astro:assets` + sharp generate the Open Graph image. |
| Tests | Vitest (`npm test`) for logic; `npm run verify` for the built site |
| Deploy | Cloudflare Workers: static `dist/` plus `src/edge/worker.ts`. Wrangler is not a project dependency; use `npx wrangler`. |

## Requirements

- Node.js 22.12 or newer.

## Run locally

From this directory:

```bash
nvm use          # 22.12+
npm install
npm run dev      # http://localhost:4321
```

| Command | What it does |
| --- | --- |
| `npm install` | Install dependencies. |
| `npm run dev` | Development server at `http://localhost:4321`. |
| `npm run check` | Typecheck and Astro diagnostics. |
| `npm test` | Tests for routes, locale cookie/nav, the edge worker, contact URLs, JSON-LD, and the SVG geometry. |
| `npm run lint:unused` | [knip](https://knip.dev): unused files, exports and dependencies. |
| `npm run build` | Write the static site to `dist/`. |
| `npm run verify` | Check `dist/`: internal links and `#anchors`, one `h1`, canonical, hreflang, and a 120 KB HTML budget per page. |
| `npm run ci` | Everything above, in the order CI runs it (`.github/workflows/ci.yml`). |
| `npm run preview` | Serve `dist/` to review the production build. |

The first build downloads fonts from Fontsource and caches them under `node_modules/.astro/fonts`. That download needs network; later builds reuse the cache.

## Languages and URLs

Every page lives under `/es/…` or `/en/…`. Public slugs follow the language:

| Page | Spanish | English |
| --- | --- | --- |
| Home | `/es/` | `/en/` |
| Services | `/es/servicios/` | `/en/services/` |
| Automation | `/es/automatizacion/` | `/en/automation/` |
| Process | `/es/proceso/` | `/en/process/` |
| About | `/es/nosotros/` | `/en/about/` |
| Contact | `/es/contacto/` | `/en/contact/` |

Copy lives in `src/i18n/es.ts` (Costa Rican *usted*) and `src/i18n/en.ts`.

Facts that do not change with language (business name, founder, contact IDs, the order of the services) live in `src/data/`. Every inner page in both languages comes from one route, `src/pages/[locale]/[slug].astro`: it builds the slugs from `routeSlugs` in `src/i18n/paths.ts` and picks the page body from `src/templates/`. To add a page, add it to `routes`/`routeSlugs` and to the `templates` map in that file.

### Locale cookie

`/` and legacy URLs without a locale prefix (`/servicios`, `/services`, …) redirect using the `fw_locale` cookie:

- In `astro dev`: Vite integration `src/edge/dev-locale.ts`.
- On Cloudflare: `src/edge/worker.ts`. Redirects are `private, no-store` and `Vary: Cookie`, since they depend on the cookie.

The cookie itself is written in one place: an inline script in `BaseLayout.astro`, on every page load, so whichever language a visitor last read is remembered. The worker does not touch ordinary responses.

No cookie means Spanish. `astro.config.ts` only fixes cross-language slugs (`/en/servicios/` → `/en/services/`). Unprefixed URLs are **not** pinned to Spanish at build time; if they were, the cookie could not choose English.

In `astro dev`, `src/edge/dev-locale.ts` is inserted at the front of Vite’s middleware stack so it can read the request `Cookie` header. Astro middleware on prerendered pages does not see `Cookie` reliably, which is why the Vite integration exists.

`src/pages/index.astro` builds `/index.html`, a last-resort cookie/localStorage redirect for `/` if the worker is not in front of the assets.

## Layout

```
astro.config.ts             site URL, i18n, fonts, sitemap, cross-slug redirects
vitest.config.ts            `@/` alias for tests
knip.json                   unused-code check (`npm run lint:unused`)
wrangler.jsonc              dist/ assets + locale worker (page routes only)
.github/workflows/ci.yml    check, test, knip, build, verify on every PR
scripts/verify-dist.mjs     checks on the built site
public/                     favicon, webmanifests, `_headers` (caching, security)
src/
  assets/images/            Open Graph source image
  data/                     business facts, services, navigation, JSON-LD
  edge/dev-locale.ts        cookie redirects in `astro dev`
  edge/worker.ts            cookie redirects on Cloudflare
  i18n/                     locales, slugs, dictionaries, static paths
  layouts/BaseLayout.astro  <head>, SEO, fonts, header and footer, locale cookie
  lib/                      build-time geometry and contour generation
  pages/index.astro         fallback redirect for `/`
  pages/[locale]/           home, plus `[slug].astro` for every inner page
  pages/decor/              static contour backgrounds (`/decor/contours-*.svg`)
  templates/                page bodies
  components/
    sections/               page sections; long ones split into folders
                            (`about/`, `automation/`)
    scenes/process/         the five process scenes and the ownership deed
    visuals/                drawings (Contours inline, Terrain as cached file)
    ui/                     buttons, headers, labels
  styles/                   tokens and global CSS
```

### The cariblanco

The brand animal is the cariblanco (white-faced capuchin, *Cebus
imitator*): black body and long prehensile tail, cream hood, black cap,
pink face. It lives in the vines, so the vine is the other half of the
language. Shapes are drawn once (`src/components/visuals/cariblanco-parts.ts`)
and posed by `Cariblanco.astro`:

| Pose | Where |
|---|---|
| `head` | Wordmark (tilts on hover) and `public/favicon.svg` |
| `hang` (`swing`, `look`) | Under the hero's branch (two hold points), 404, About troop |
| `leap` | Between the hero's two hold points: wind-up, arc over the branch, catch and swing |
| `walk` | Along the home steps' vine when it scrolls in |
| `sit` (`hold`, `think`, `curious`) | The hero troop (mother and young, thinker, one with a stone), on the home phone, on the contact form, the troop on `CtaBand`'s liana, the service drawings, About traits, services close |
| `sleep` | On its branch in the automation after-hours section |
| `peek` | Footer, mobile menu, the shop drawing's bag |
| busts | Founder portraits (`FounderPortraits.astro`) |

Supporting motifs: `Vine.astro` (a drape across a width, or a hanging
liana) replaces plain connector lines and is what the monkeys hang from,
walk on and sit on; `glyphs.ts` has the vine leaf (breadcrumb separator)
and the hand print (ownership stamp, founders' mark); the rule in
`Plate.astro` section labels is a vine tendril.

The cariblanco keeps its own colours on every ground: fur
(`--color-fur`), `--cb-hood` and `--cb-face`. `--cb-ring` is a thin
outline round every body part: the ground colour on light, and a pale
line on dark (pass `onDark`), which is what makes black fur read on moss.
`--cb-edge` outlines the hood where cream would sit on cream. All of it
is `aria-hidden`; animations stop under reduced motion and pause
off-screen. The head and the vine leaf are defined once per page
(`CariblancoDefs.astro`) and referenced with `<use>`, to keep the HTML
inside the size budget.

The palette comes from the animal (see `src/styles/tokens.css`): fur for
dark sections, hood cream for the page and its sheets, face blush as the
soft warm note (founder portraits, the About commitments band, text
selection), with the canopy around it: moss line work, leaf green as the
accent on dark, poró for emphasis.

### Performance notes

- **Contour lines.** `src/lib/contours.ts` computes them at build time. The hero, services band and automation band draw them inline (`Contours.astro`) so they can animate. The footer, mobile menu and closing band repeat on every page, so they use `Terrain.astro`, which points at a static `/decor/contours-*.svg` file the browser caches once.
- **Looping animations** pause while their section is off-screen (`src/scripts/motion.ts`), and none run under reduced motion.
- **Caching.** `public/_headers` marks `/_astro/*` (hashed file names) as immutable. The worker only runs for page URLs (`run_worker_first` in `wrangler.jsonc`), so assets are served straight from the edge.
- **Fonts.** Only weights that some page renders are configured. Check before adding a weight: the build downloads and ships every configured file.

## Unconfirmed business facts

Anything the business has not confirmed is `null` in `src/data/site.ts` (or the matching i18n field) and marked `TODO(business)` or `TODO(assets)`. While a field is `null`, the matching UI is omitted rather than filled with a placeholder:

- **WhatsApp** (`contact.whatsappNumber`): WhatsApp buttons and the contact form.
- **Email** (`contact.email`).
- **Hours** (`contact.hoursValue` in both i18n dictionaries).
- **Social** (`social.linkedin`, `social.instagram`, `social.facebook`).
- **Official logo**: text wordmark (`Wordmark.astro`) and `public/favicon.svg`.
- **Street address**: omitted from JSON-LD until a public location is confirmed.

The services shown on the home and services pages are listed in `src/data/services.ts` (`serviceFacts`: order, which three are lead services with a drawing); their copy is under `services.items` in each dictionary. No prices are published.

`ContactPanel.astro` logs a console warning in dev and builds when neither WhatsApp nor email is set.

## Contact form

There is no form backend. When a WhatsApp number is configured, the form is a `GET` to `https://wa.me/<number>`: the message travels in the `text` query parameter and WhatsApp opens with it ready. Nothing is stored here. The form is not rendered until a number exists.

## Deploy on Cloudflare Workers

```bash
npm run build
npx wrangler login      # once
npx wrangler deploy
```

`wrangler.jsonc` serves `dist/` and runs `src/edge/worker.ts` for page URLs, so `/` and legacy URLs respect the saved language. Its `name` must match the Worker that Cloudflare Workers Builds deploys (`foresta-works`). There are no secrets in this repository.

`dist/` is gitignored. Do not deploy a stale `dist/` folder: run `npm run build` immediately before `npx wrangler deploy`.
