# Popova Šapka — On-Mountain Brand Placements

A single-page partnership prospectus for on-mountain advertising inventory at Popova Šapka ski resort, built to be visually indistinguishable from [popovashapka.com.mk](https://popovashapka.com.mk/en/). Sold by BS Suite, the resort's official advertising partner. Content is transcribed verbatim from the "On-Mountain Brand Placements" partnership prospectus, adapted into a proposal-led (no public pricing) format and fully localized into English, Macedonian and Albanian.

Static-exported Next.js 16 app — no server, no database, deployable to any static host.

## Stack

Next.js 16.2 (App Router, `output: 'export'`) · React 19.2 · TypeScript 6.0 (strict) · Tailwind CSS v4.3 · CSS Modules · GSAP 3.15 + ScrollTrigger · Lenis 1.3 · Motion for React (mobile nav only) · Radix UI (Dialog) · class-variance-authority · Vitest + React Testing Library · Playwright + axe-core · pnpm.

## Getting started

```bash
pnpm install
pnpm dev              # http://localhost:3000
```

## Commands

| Command | What it does |
|---|---|
| `pnpm dev` | Dev server with hot reload |
| `pnpm build` | Optimizes images, then runs `next build` → static export to `/out` |
| `pnpm preview` | Serves the built `/out` on `http://localhost:4173` |
| `pnpm lint` | ESLint (flat config — Next, TypeScript, React, React Hooks, jsx-a11y) |
| `pnpm typecheck` | `tsc --noEmit`, strict mode |
| `pnpm test` | Vitest unit tests (`tests/unit`) |
| `pnpm test:e2e` | Playwright e2e + accessibility tests against `/out` — **run `pnpm build` first** |
| `pnpm format` | Prettier (with Tailwind class sorting) |
| `pnpm optimize-images` | Re-runs the image pipeline standalone (hash-aware; safe to re-run anytime) |

## Deployment

The output of `pnpm build` is a fully static site in `/out` — upload it as-is to any static host:

- **Vercel / Netlify / Cloudflare Pages**: point the build command at `pnpm build` and the output directory at `out`.
- **cPanel / any file-based host**: copy the contents of `/out` into the public web root (or a subfolder — see below).
- **Subfolder deployment** (e.g. `example.com/placements/`): set `NEXT_PUBLIC_BASE_PATH=/placements` before building. All internal asset/image/canonical/hreflang/JSON-LD/language-switcher URLs pick this up automatically via `lib/utils.ts`'s `assetUrl()`, `lib/image-loader.ts`, and `lib/metadata.ts` — every raw string reference in the codebase is routed through `assetUrl()` rather than hardcoded, specifically so this env var is the only thing that needs to change for a subfolder launch.
- **Canonical/OG domain**: set `NEXT_PUBLIC_SITE_URL` to the real deployment domain's **origin only** (no path — `assetUrl()` supplies the subfolder) before building. Used for `metadataBase`, canonical URL, JSON-LD `url`, and Open Graph/Twitter image URLs — defaults to a placeholder otherwise.

No environment variables are required for a root-domain deploy.

### This launch: `popovashapka.com.mk/partnership/`

This prospectus is deployed as a subsection of the resort's own live site, not its own domain, and not at the domain root (the resort's real homepage stays exactly as it is). The handoff `/out` build was produced with:

```bash
NEXT_PUBLIC_SITE_URL=https://popovashapka.com.mk NEXT_PUBLIC_BASE_PATH=/partnership pnpm build
```

(On Windows in Git Bash, prefix with `MSYS_NO_PATHCONV=1` — MSYS otherwise rewrites the leading-slash `/partnership` value into a Windows filesystem path before Next ever sees it.)

The repo's own `tests/e2e` suite runs against a root-path build (`playwright.config.ts` serves `/out` at the domain root, matching the no-basePath default), so it wasn't re-run verbatim against this subfolder build. Instead this specific `/partnership`-configured `/out` was validated directly: staged under a local `partnership/` folder and served so its URL structure matched production, then checked for zero non-2xx responses and zero console/page errors across `/`, `/mk/`, `/sq/` on both desktop and mobile viewports, a zero-violation axe-core scan on all three routes, working desktop+mobile language switching (including inside the mobile nav panel), correct `mailto:`/`tel:` hrefs, and a Lighthouse run (Performance 99, Accessibility 100, Best Practices 100, SEO 100 — unchanged from the root-path build).

Whoever uploads `/out` should copy its contents into a `partnership/` directory under the resort's web root, so that `.../partnership/index.html` etc. resolve at `https://popovashapka.com.mk/partnership/`. Do **not** rebuild without these two env vars — a plain `pnpm build` produces a root-relative export that will 404 on every asset once served from a subfolder.

## Project structure

```
app/
  (en)/           Root layout (html lang="en") + page — served at "/"
  (mk)/mk/        Root layout (html lang="mk") + page — served at "/mk/"
  (sq)/sq/        Root layout (html lang="sq") + page — served at "/sq/"
  globals.css, icon.png, apple-icon.png
components/
  HomePage.tsx    Shared section assembly, used by all three locale pages
  StructuredData.tsx  Locale-aware JSON-LD (Organization/WebSite/Service)
  layout/         SiteShell, Header, MobileNav, Footer, LanguageSwitcher, SmoothScrollProvider, SkipLink
  ui/             Button, StatCard, SectionEyebrow, ImageFrame, PlacementBadge, ResortImage, Pill, RibbonButton, RevealSection
  sections/       One component per section (S01 Hero … S12 Contact) — see numbering below
  decorative/     GhostNumeral, GhostScript, MountainRidgeSVG, DashedTrailSVG, DiagonalStreaks
data/             Typed, locale-keyed content — navigation, site, hero, stats, opportunity, audience,
                  mandate, inventory, placements, ticket-office, formats, takeover, gallery, contact, next-steps
lib/              i18n.ts (locales/paths), metadata.ts (per-locale SEO), fonts.ts, animations.ts, gsap.ts,
                  use-scroll-reveal.ts, use-hero-timeline.ts, reduced-motion.ts, view-transition.ts,
                  utils.ts (cn/assetUrl), image-loader.ts, image-config.mjs
scripts/          optimize-images.mjs — sharp prebuild step (WebP variants + blur placeholders)
public/assets/    Source images (+ /optimized, generated) and the two logo lockups
tests/unit/       Vitest + RTL
tests/e2e/        Playwright (navigation, anchors, CTAs, responsive, reduced-motion, accessibility, i18n)
```

### Sections (renumbered after the pricing/inventory-page revision)

01 Opportunity · 02 Who sees it · 03 The mandate · 04 The inventory · 05–08 Placements (piste billboards, lift pylon banners, lift station, chairlift seats) · 09 Ticket office (featured full-width placement) · 10 Formats & care · 11 Exclusive takeover · 12 The mountain (gallery) · Contact (closing section, unnumbered by design).

The Map, Packages ("The Numbers"), and rates/annex sections from the original prospectus layout have been removed entirely (components, data files, anchors, tests) as part of moving the page to a proposal-led model — see "Content & data model" below.

## Content & data model

Every section's copy, figures and image references live in `data/*.ts` as **`Record<Locale, T>`** typed objects — one object per file holding the English, Macedonian and Albanian copy side by side. Components are purely presentational: they take a `locale` prop and index into the data, so there is exactly one copy of every section component and every layout component, never three.

**No public pricing.** All €-figures, CPM rates, package tiers and the à-la-carte annex from the original prospectus have been removed. CTAs are proposal-focused ("Request a proposal", "Reserve your category", "Contact BS Suite") rather than price-driven. `tests/unit/content.test.ts` and `tests/e2e/i18n.spec.ts` both assert that no `€` or pricing terminology appears anywhere in the rendered output, in any of the three languages.

## Internationalization

Three fully-translated, statically-generated routes: English (default, unprefixed, at `/`), Macedonian (`/mk/`), Albanian (`/sq/`). Implemented with Next's "multiple root layouts via route groups" pattern — `app/(en)/layout.tsx`, `app/(mk)/mk/layout.tsx` and `app/(sq)/sq/layout.tsx` each declare their own `<html lang="…">`, so every route gets a correct language attribute without a runtime i18n library or client-side translation service. Everything is baked into the static export at build time.

- `lib/i18n.ts` — the `Locale` type, the locale list, and `localePath()` for building locale-correct hrefs.
- `lib/metadata.ts` — builds `<title>`, description, canonical URL and `hreflang` alternates (including `x-default`) per locale, generated once so the three routes never drift out of sync with each other's alternates.
- `data/navigation.ts`'s `getLanguageLinks()` powers the language switcher (visible in the header on desktop, and in the mobile nav panel), which links between this site's own three routes and marks the active one with `aria-current="page"`.
- Resort subpage links (Home/About Us/Gallery/News/Contact) point at the resort's own verified `/en/` URLs in all three locales — only the visible label is translated — since Macedonian/Albanian slugs for those external subpages aren't confirmed.

## Assets

Every photograph and the logo are real assets extracted directly from the source prospectus PDF (`popovasapka/Sunny Hill - Presentation.pdf`) at native resolution via PyMuPDF, then processed with Pillow/sharp — nothing is a stock photo or AI-generated placeholder. Specifically:

- The 18 placement/ticket-office/takeover/gallery photographs and the hero image are the prospectus's own embedded photography, each used at its full natural aspect ratio (no fixed-height crops) so ads, lift structures, signage and scenery are never cropped out.
- `logo-navy.png` / `logo-white.png` are both derived from the single highest-resolution logo mark in the deck (recolored, alpha-preserved) so the two lockups are pixel-identical in proportion.
- The six gallery photos and two smaller placement photos were upscaled 2× (Lanczos + unsharp mask) since their source resolution was low relative to their on-page display size.

### Image pipeline (static-export-safe)

`next/image` is used everywhere, but with a **custom loader** (`lib/image-loader.ts`) instead of the runtime Image Optimization API, since that API doesn't exist under `output: 'export'`. `scripts/optimize-images.mjs` runs as a `prebuild` step: it generates responsive WebP variants at a fixed width ladder (`lib/image-config.mjs` — the single source of truth shared by the script, the loader, and `next.config.ts`'s `deviceSizes`/`imageSizes`) plus a build-time blur placeholder, and writes `public/assets/optimized/manifest.json`. The loader reads that manifest, picks the *nearest available* width for whatever `next/image` requests, and falls back to the original `/assets/*` file if a src is missing from the manifest — so a stale or skipped prebuild degrades gracefully instead of breaking image rendering. The script is hash-aware (skips regenerating anything whose source file hasn't changed), so repeat builds are fast.

## Design tokens

CSS custom properties in `app/globals.css` are the single source of truth for color, radius, shadow, type scale and spacing — bridged into Tailwind v4 via `@theme inline`, not duplicated. A few token values were deliberately **darkened from the brief's literal hex values** where the literal value failed WCAG AA contrast in real usage (verified with axe-core + Lighthouse, not guessed):

- `--cyan-dark` (button fills) and `--cyan-darker` (text on light backgrounds) are darkened from the brief's `--cyan`, which is only ~2.3:1 against white — nowhere near the 4.5:1 required for text or button labels. The bright `--cyan` is kept for decorative graphics and for text on dark (navy) sections, where it already passes comfortably (5.5–7:1).
- `--amber-ink` (5.2:1) is a darkened variant of `--amber` used specifically where amber renders as *text* (the active nav item, the hero's script accent word); the bright `--amber` remains for the decorative underline bar.
- `--muted` was nudged slightly darker so 12px small-print captions clear 4.5:1 against `--ice`/`--card`.

The large low-opacity "ghost script" background watermark (`[data-ghost]`, e.g. "sunny" behind the S12 heading) is rendered as a pre-rasterized PNG (`public/assets/decorative/ghost-sunny.png`, alpha-scaled to 10% opacity) rather than live text, and marked `aria-hidden`/`pointer-events: none`. This keeps it out of axe/Lighthouse's text-based color-contrast evaluation entirely — it's decorative texture, not content — while preserving the exact intended visual opacity. `tests/e2e/accessibility.spec.ts` still excludes `[data-ghost]` from its axe scan as a documented, narrow exception, but this no longer costs any Lighthouse points (see Quality below).

## Motion system

Centralized in `lib/animations.ts` (easing/duration/stagger constants) and two small hooks: `use-hero-timeline.ts` (the hero's load-in sequence) and `use-scroll-reveal.ts` (everything else, driven by `data-reveal`/`data-reveal-group` attributes and a shared ScrollTrigger config). Both are wrapped in thin Client Component boundaries (`HeroMotion`, `RevealSection`) so the section components themselves stay Server Components — only the animation trigger ships as client JS, not the content. Lenis is initialized once at the root (`SmoothScrollProvider`), synced to GSAP's ticker; everything is disabled under `prefers-reduced-motion: reduce`, backed by a blanket CSS fallback.

## Quality

- `pnpm lint`, `pnpm typecheck`, `pnpm test`, `pnpm build`, `pnpm test:e2e` all pass clean (118 tests: 26 Vitest, 92 Playwright across desktop + mobile viewports and all three locale routes, including axe-core accessibility scans on `/`, `/mk/` and `/sq/`).
- Lighthouse, desktop preset, against the static `/out` build — identical across all three locales: **Performance 99, Accessibility 100, Best Practices 100, SEO 100.**
- Lighthouse, mobile preset (simulated, throttled), English route: **Performance 84, Accessibility 100, Best Practices 100, SEO 100.** CLS is 0 and TBT is 110ms in this same run — the gap is entirely in the LCP metric, which Lighthouse's Lantern simulation penalizes heavily when serving from a bare `serve out` preview server over HTTP/1.1 (no connection multiplexing, so its 40+ requests queue under simulated slow-4G). Every static host named in Deployment below (Vercel, Netlify, Cloudflare Pages) terminates HTTP/2 or HTTP/3 by default, which removes this bottleneck; it isn't present in the desktop run because the desktop network profile isn't restrictive enough to expose it.
- `content-visibility: auto` was deliberately **not** applied to lower sections. Every section's scroll-reveal is driven by GSAP ScrollTrigger, whose trigger-position calculations depend on accurate layout at `ScrollTrigger.create()` time — `content-visibility: auto`'s size-substitution behavior for off-screen content is a real risk to those calculations for a marginal gain that isn't needed here.

## Notes on the toolchain (as pinned)

- **TypeScript is pinned to `6.0.3`**, not the newer `7.x` line, because `typescript-eslint` (and therefore ESLint's TypeScript rules) doesn't yet support TypeScript 7's API. `next`/`eslint-config-next`-style versions are otherwise on their latest current release.
- **ESLint config is hand-composed** (`eslint.config.mjs`) from each plugin's native flat-config export (`@next/eslint-plugin-next`, `eslint-plugin-react`, `eslint-plugin-react-hooks`, `eslint-plugin-jsx-a11y`, `typescript-eslint`) rather than via `eslint-config-next`'s legacy shareable configs. As of this writing, bridging those through `@eslint/eslintrc`'s `FlatCompat` crashes (`Converting circular structure to JSON`) because `eslint-plugin-react` now ships a self-referencing `configs.flat` alongside its legacy config, which the old compatibility shim can't serialize. Composing the plugins directly sidesteps the bridge entirely and covers the same rule set.
- **pnpm 11** is pinned via the `packageManager` field; it requires Node ≥22 (confirmed in this environment before pinning).
