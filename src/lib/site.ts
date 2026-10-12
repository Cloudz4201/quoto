// Centralised site config. Update SITE_URL to the production origin (no
// trailing slash) before going live so canonical URLs, sitemap entries and
// JSON-LD structured data resolve to absolute production URLs.
export const SITE_URL = "https://quoto.app";
export const SITE_NAME = "Quoto";
export const SITE_TAGLINE = "Simple quoting app for tradies";
export const SITE_DESCRIPTION =
  "Quoto is a simple, modern quoting app for tradies. Build, send and track quotes in seconds — with Xero, ServiceM8 and the tools you already use.";
export const SITE_LOCALE = "en_AU";
export const SITE_LANG = "en-AU";
export const SITE_THEME_COLOR = "#4F6BFF";
export const SUPPORT_EMAIL = "support@getquoto.com.au";

// Geo targeting — Quoto is built for Australian tradies. Used in Organization
// JSON-LD so search engines can localise rich results to en-AU.
export const SITE_COUNTRY = "AU";
export const SITE_COUNTRY_NAME = "Australia";

// Canonical OG image dimensions (1200×630 is the format Facebook, LinkedIn,
// X and Slack all render at full size). Update if you regenerate og-image.jpg.
export const OG_IMAGE_WIDTH = "1200";
export const OG_IMAGE_HEIGHT = "630";

// Social profile URLs surface as Organization `sameAs` for entity linking.
// Add real handles as they go live; an empty array is omitted from JSON-LD.
export const SITE_SAME_AS: readonly string[] = [];

export function absoluteUrl(path: string): string {
  if (!path.startsWith("/")) return `${SITE_URL}/${path}`;
  return `${SITE_URL}${path}`;
}
