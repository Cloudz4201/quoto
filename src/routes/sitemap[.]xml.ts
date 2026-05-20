import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { posts } from "@/data/blog/posts";
import { trades } from "@/data/trades/trades";
import { SITE_URL } from "@/lib/site";

const BASE_URL = SITE_URL;

type Entry = { path: string; changefreq: string; priority: string; lastmod?: string };

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: Entry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/for", changefreq: "monthly", priority: "0.8" },
          ...trades.map((t) => ({
            path: `/for/${t.slug}`,
            changefreq: "monthly",
            priority: "0.8",
          })),
          { path: "/blog", changefreq: "weekly", priority: "0.8" },
          ...posts.map((p) => ({
            path: `/blog/${p.slug}`,
            changefreq: "monthly",
            priority: "0.7",
            lastmod: p.updatedAt ?? p.publishedAt,
          })),
          { path: "/support", changefreq: "monthly", priority: "0.7" },
          { path: "/privacy-policy", changefreq: "yearly", priority: "0.5" },
          { path: "/terms-and-conditions", changefreq: "yearly", priority: "0.5" },
        ];
        const urls = entries
          .map((e) => {
            const lastmod = e.lastmod ? `<lastmod>${e.lastmod}</lastmod>` : "";
            return `  <url><loc>${BASE_URL}${e.path}</loc>${lastmod}<changefreq>${e.changefreq}</changefreq><priority>${e.priority}</priority></url>`;
          })
          .join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
