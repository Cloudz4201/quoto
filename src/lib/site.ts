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
export const SUPPORT_EMAIL = "support@quoto.app";

export function absoluteUrl(path: string): string {
  if (!path.startsWith("/")) return `${SITE_URL}/${path}`;
  return `${SITE_URL}${path}`;
}
