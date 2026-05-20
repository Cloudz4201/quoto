# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed
- Hero section top padding reduced so content sits closer to the top of the viewport.
- Header now includes a full mobile hamburger menu (visible on screens < 640px) with all nav links and a "Get the app" CTA — previously the entire nav was hidden on mobile with no fallback.
- Added "Pricing" link to site navigation pointing to `/#pricing`.
- Google Play badge replaced with a custom inline SVG component (`GooglePlayBadge.tsx`) that matches the App Store badge's 3:1 aspect ratio exactly. Both badges now render at `h-12 w-auto` with identical bounding boxes, fixing the persistent height/width mismatch on mobile (stacked) and desktop (side-by-side). Previously the official Google Play PNG had a 2.59:1 ratio with internal padding, which made the two badges visually skewed at every sizing approach.
- Pricing plan CTAs replaced with proper styled buttons — previously used store image badges which conveyed the wrong intent and had no visual effect from applied classes.

### Added
- `Testimonials` section with 3 AI-generated realistic tradie avatar photos and authentic quote copy (Jake Morrison – Electrician, Dean Hartley – Plumber, Sarah Nguyen – Painter), placed after "How it works".
- `Pricing` section with Starter (free), Pro ($19/mo) and Team ($49/mo) plans, a "Most popular" badge on Pro, and feature checklists — placed between Testimonials and the integrations callout.
- Tradie avatar images (`src/assets/testimonials/`) generated to match real on-the-job photography.
- Four bespoke 3D feature illustrations (`quotes-in-a-minute`, `built-for-tradies`, `track-every-quote`, `plays-nice-with-stack`) in `src/assets/features/`, matching the Quoto indigo-on-cream brand palette.
- Three bespoke 3D step illustrations (`01-build-the-quote`, `02-send-it-instantly`, `03-sync-with-your-tools`) in `src/assets/steps/`, sharing the same indigo-on-cream style as the feature illustrations.
- Quoto "Q" site favicon and Apple touch icon (`public/favicon.png`, `public/apple-touch-icon.png`), registered via the root route head.
- Brand logos for the six integration partners (Xero, ServiceM8, MYOB, QuickBooks, Tradify, Stripe) in `public/integrations/`.
- SEO-focused blog at `/blog`, with a listing page and dynamic post pages at `/blog/$slug`. Per-post canonical URLs, OpenGraph and Twitter card tags, plus Article and BreadcrumbList JSON-LD structured data injected via the route head.
- Three launch articles: "Quoto vs ServiceM8: a fair comparison for tradies", "Quoto vs Tradify: which quoting app fits your day on the tools?", and the pillar guide "The best quoting apps for Australian tradies in 2026" — all internally cross-linked for SEO.
- Typed content-block system (`src/data/blog/types.ts`) supporting paragraphs, headings, lists, TL;DR boxes, callouts, comparison tables and CTAs, so future posts stay structurally consistent without writing fresh JSX each time.
- Blog navigation links in the site Header and Footer.
- Blog index and post URLs are now included in `sitemap.xml`, pulled dynamically from the post registry with `lastmod` dates.
- Central site config at `src/lib/site.ts` (`SITE_URL`, `SITE_NAME`, locale, theme colour, support email, `absoluteUrl()` helper) — single place to swap the production origin.
- Organization and WebSite JSON-LD structured data on the root route head; SoftwareApplication JSON-LD on the homepage; BreadcrumbList JSON-LD on every blog post.
- Web app manifest (`public/manifest.json`) with theme/background colours and icons, linked from the root head.
- `theme-color`, `og:locale`, `og:image` defaults, Apple mobile-web-app meta tags and a `robots` meta directive added to the root head for better mobile chrome and richer search/social previews.
- Stable public OG image (`public/og-image.jpg`) so social cards always fetch a non-hashed URL.

### Changed
- Replaced the header logo image (`src/assets/quoto-logo.png`) with the new Quoto "Q" mark, so the top-left of every page now matches the favicon and app icon.
- Redesigned the "Built to win more work" features section on the landing page: each card now leads with its illustration in a soft inset panel above the title and description, replacing the previous small SVG icon. Layout remains a compact 4-up grid with the existing hover lift.
- Redesigned the "How it works" section: each of the three step cards now leads with its illustration in a soft inset panel, with the step number, title and description below. Cards picked up the same hover lift as the feature cards for a consistent feel.
- Integrations strip and "Works with the tools you already use" cards now display the real partner logos in their brand colours instead of plain text labels.
- Replaced the hand-rolled App Store / Google Play SVG buttons in `StoreButtons` with the official Apple and Google badges (`public/stores/app-store-badge.svg`, `public/stores/google-play-badge.png`), bringing the download CTAs into compliance with Apple's and Google's brand guidelines.
- Replaced the bundled Tradify logo SVG with the official square Tradify app icon (`public/integrations/tradify.png`) so the integrations row reads more consistently with the other partner marks.
- Homepage, blog index, blog posts, privacy policy and terms pages now emit **absolute** canonical URLs and OG URLs via the new `SITE_URL` config, which is what Google, Facebook, X and LinkedIn prefer.
- Homepage meta description rewritten for stronger keyword coverage; the deprecated `keywords` meta has been removed (Google ignores it and it can read as low-quality).
- Root `<html lang>` switched from `"en"` to `"en-AU"` to signal the target locale.
- `sitemap.xml` entries now use the absolute `SITE_URL` for `<loc>` values.
- `robots.txt` upgraded with a `Sitemap:` directive, a comment header, and a `Disallow: /__debug` rule so the dev debug surface stays out of indexes.

### Removed
- Dropped the `@lovable.dev/vite-tanstack-config` build wrapper and rewrote `vite.config.ts` to call `tanstackStart`, `viteReact`, `tailwindcss`, `tsConfigPaths` and `@cloudflare/vite-plugin` directly. This also removes the transitive `lovable-tagger`, `@lovable.dev/vite-plugin-dev-server-bridge` and `@lovable.dev/vite-plugin-hmr-gate` packages (53 packages total), eliminates Lovable's dev-only DOM tagging from the JSX pipeline, and makes the toolchain fully vendor-neutral.
- Deleted the `.lovable/` metadata folder, the `@lovable.dev/vite-tanstack-config` entry in `bunfig.toml`, and the stale `bun.lock` (which still referenced lovable packages — `package-lock.json` regenerated cleanly via `npm install`).
