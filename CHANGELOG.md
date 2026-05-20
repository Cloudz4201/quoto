# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Five realistic, candid documentary-style photographs (one per trade) in `src/assets/trades/` — an Australian electrician working on a residential switchboard, a plumber installing a hot water system, a landscaper laying turf in a backyard, a painter rolling a fresh wall, and a carpenter screwing down hardwood decking. Used as hero visuals on each `/for/$trade` page and on every trade card across the site.
- `image` and `imageAlt` fields on the `Trade` type, wired through `trades.ts` so the photography is a first-class part of the data model — adding a new trade is one new image + one new object literal.
- Image-led hero on every `/for/$trade` page — large rounded photo card on the right of the headline, with `fetchPriority="high"` for LCP, so the page feels bespoke from the first frame.
- `ComingSoon` section ("What's next on the toolbelt.") on the homepage, placed between `Pricing` and the integrations callout, surfacing six rock-solid roadmap features hand-picked from 2024–26 tradie reviews: **Works offline**, **Tap to Accept & sign**, **Deposit on accept**, **Smart follow-ups**, **Variations in one tap** and **Voice → quote**. Each feature was deliberately chosen to solve a recurring complaint from real tradie forums and Trustpilot/Capterra/GetApp/Software Advice reviews of competing apps (Tradify, ServiceM8, AroFlo, Fergus, simPRO, NextMinute, Jobber, Housecall Pro, Joist, Bookipi). Features that consistently cause "bloat" complaints — CRM marketing, multi-stage approvals, internal Gantt charts, per-SMS credits, online booking portals — were deliberately left off the roadmap.
- Six bespoke 3D feature illustrations (`works-offline`, `tap-to-accept`, `deposit-on-accept`, `smart-followups`, `variations-in-one-tap`, `voice-to-quote`) in `src/assets/coming-soon/`, matching the existing soft 3D claymorphism style (indigo on cream) used across the Features and Steps illustrations.
- Lightweight "Get a heads-up when these ship" notify form below the Coming Soon grid — single email input + honeypot, submitting to the existing Web3Forms endpoint with a `Quoto Roadmap Notify` subject so signups are clearly distinguishable from support requests. No captcha by design (keeps the field one-tap) — the hidden honeypot handles bots.
- Trade-specific landing page hub at `/for` with five high-intent commercial-search pages: `/for/electricians`, `/for/plumbers`, `/for/landscapers`, `/for/painters` and `/for/builders`. Each page targets queries like "quoting app for electricians" and ships unique hero copy, four pain points, three use cases written in the trade's own language, a saved-line-items chip cloud (switchboard upgrades, hot water units, retaining walls, room-by-room repaints, decks, etc.), four trade-specific FAQs and cross-links to the other trades.
- Per-trade structured data on every `/for/$trade` page — `SoftwareApplication` with a `BusinessAudience` matching the trade, a `FAQPage` schema for rich snippets, and a `BreadcrumbList` (`Home → By trade → <Trade>`).
- `/for` hub page emits `CollectionPage`, `ItemList` and `BreadcrumbList` JSON-LD so search engines understand the trade-page collection.
- Sitemap (`/sitemap.xml`) now includes `/for` and every `/for/<trade>` URL, generated dynamically from the trade registry so adding a new trade auto-populates the sitemap.
- "Built for your trade" section on the homepage (between the Australian trust section and Testimonials) linking to all five trade pages with a "See all trades →" link to the hub.
- "By trade" link added to the site Footer for top-level discoverability.
- Reusable `FaqList` site component for FAQ sections — used on the trade pages and ready to drop into the homepage or future content pages.
- Typed trade content registry (`src/data/trades/`) — `types.ts` defines the `Trade` schema (slug, plural, hero copy, pain points, use cases, line item examples, FAQs); `trades.ts` is the source of truth for all live trade pages.
- Homepage `FAQPage` JSON-LD covering the five highest-intent tradie questions (what is Quoto, integrations with Xero/MYOB/ServiceM8/QuickBooks, free plan availability, Australian ownership / data residency, how long to send a quote). Eligible for FAQ rich results in Google search.
- Blog index `Blog` + `ItemList` JSON-LD listing every published post in order, so search engines can surface the full article carousel from a single page.
- `SITE_COUNTRY`, `SITE_COUNTRY_NAME`, `OG_IMAGE_WIDTH`, `OG_IMAGE_HEIGHT` and `SITE_SAME_AS` constants in `src/lib/site.ts` as a single place to manage geo-targeting, social card dimensions and social profile URLs (used by Organization `sameAs` once handles go live).
- `og:image:width` and `og:image:height` meta tags (1200×630) on the root and homepage so Facebook, LinkedIn, X and Slack render the social card at full size on the first crawl.
- Resource hints (`<link rel="preconnect">`) on the `/support` route for `api.web3forms.com`, `hcaptcha.com` and `newassets.hcaptcha.com`, cutting first-byte time when the support form mounts the hCaptcha widget.
- `design-tokens.json` at the repo root — framework-agnostic source of truth for the Quoto brand (colours in OKLCH + sRGB hex for light and dark mode, typography scale, named text styles, radius and shadow scale). Mirrors the values already in `src/styles.css` and `public/manifest.json` so the Quoto app can consume the same palette without re-deriving values.
- `DESIGN_SYSTEM.md` at the repo root — mapping doc that pairs every website semantic token with copy-paste theme snippets for React Native (Expo `StyleSheet`), NativeWind / Tailwind v4, and Flutter, plus the canonical type scale and a "keep website & app in sync" workflow.

### Changed
- Redesigned the homepage "Built for your trade" section as image-led editorial cards: each card is a 4:5 photo with a gradient overlay, a floating emoji chip, a "Quoto for" eyebrow and a large white trade headline ("Electricians", "Plumbers" etc.). Hover scales the photo and lifts the card. Replaced the previous icon-and-text strip, which didn't make use of the new trade photography.
- `/for` hub cards updated to lead with the trade photo (4:3 image with floating emoji chip) above the title, description and CTA — same visual language as the homepage section so the trade brand reads consistently across the site.
- "Built for your trade" section header copy refreshed to lean into the new bespoke photography ("A landing page for every Aussie trade. Real photos. Real line items. Written in your trade's language — not corporate speak.").
- Root `Organization` JSON-LD enriched with a stable `@id`, structured `logo` `ImageObject` (with explicit width/height), Australian `address` and `areaServed`, and a `contactPoint` for customer support — gives Google a much clearer entity for the Knowledge Graph.
- Root `WebSite` JSON-LD now references the Organization by `@id` instead of duplicating it, so the entity graph stays consistent across pages.
- Homepage `SoftwareApplication` JSON-LD extended with `applicationSubCategory`, `inLanguage`, `countriesSupported` (AU), a `BusinessAudience` (Australian tradies and small trade businesses), an explicit `featureList`, and `offers.availability` — much stronger topical and geographic signals for app-search rich results.
- Blog post structured data switched from `Article` to the more specific `BlogPosting` type, with `author` and `publisher` referenced by Organization `@id` instead of inlined duplicates. Matches Google's preferred schema for blog content.
- Hero phone mockup on the homepage now sets `fetchPriority="high"`, `decoding="async"` and `loading="eager"` so the browser starts the LCP image download as early as possible, improving Largest Contentful Paint on cold loads.
- `robots` meta directive extended to `index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1` so search engines can use the full snippet text and full-size preview images.
- Removed the stray reference to the repo's working name from `design-tokens.json` — all surfaces now consistently use the Quoto brand.
- Pricing Pro plan: "Xero & MYOB sync" and "ServiceM8 & Tradify sync" features now display a "Coming soon" pill so customers know these accounting/job-management integrations are on the roadmap but not yet live.
- Hero section top padding reduced so content sits closer to the top of the viewport.
- Header now includes a full mobile hamburger menu (visible on screens < 640px) with all nav links and a "Get the app" CTA — previously the entire nav was hidden on mobile with no fallback.
- Added "Pricing" link to site navigation pointing to `/#pricing`.
- Google Play badge replaced with a custom inline SVG component (`GooglePlayBadge.tsx`) that matches the App Store badge's 3:1 aspect ratio exactly. Both badges now render at `h-12 w-auto` with identical bounding boxes, fixing the persistent height/width mismatch on mobile (stacked) and desktop (side-by-side). Previously the official Google Play PNG had a 2.59:1 ratio with internal padding, which made the two badges visually skewed at every sizing approach.
- Pricing plan CTAs replaced with proper styled buttons — previously used store image badges which conveyed the wrong intent and had no visual effect from applied classes.

### Added
- Dedicated `/support` page with a contact form ("How can we help?") powered by Web3Forms, including name, email, topic and message fields, an hCaptcha challenge, a hidden honeypot, and inline submit/success/error states. Sidebar reinforces direct email contact (`support@quoto.app`), one-business-day response time (AEST/AEDT), and tips on what to include.
- Reusable `SupportForm` component (`src/components/site/SupportForm.tsx`) wrapping the Web3Forms submission flow so the form can be embedded on other pages later without duplication.
- hCaptcha spam protection on the support form via `@hcaptcha/react-hcaptcha`, using Web3Forms' zero-config public sitekey. Submission is blocked client-side until the captcha is verified, and the widget auto-resets after each submit (success or failure).
- Home page "Need a hand? Talk to a real human." callout section linking to `/support`, placed between the integrations callout and the Download CTA.
- "Support" links added to the site Header (desktop + mobile drawer) and Footer for top-level discoverability.
- `/support` URL registered in `sitemap.xml` with monthly changefreq and priority 0.7.
- `AustralianTrust` section ("Australian-owned. Bank-grade safe.") with four pillars — 100% Australian owned, bank-level encryption, data stored in Australia, and Aussie-based support — placed between "How it works" and Testimonials. Reinforces local-business and data-sovereignty trust signals before social proof and pricing.
- Four bespoke 3D trust illustrations (`aussie-owned`, `encryption`, `data-australia`, `support`) in `src/assets/trust/`, matching the existing feature-icon style (royal blue + yellow on cream).
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
