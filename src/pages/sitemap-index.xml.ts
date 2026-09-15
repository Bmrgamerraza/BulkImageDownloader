// src/pages/sitemap-index.xml.ts
import type { APIRoute } from "astro";

export const prerender = false;

const SITE_URL = "https://freebulkimagedownloader.com";

export const GET: APIRoute = async () => {
  const lastmod = new Date().toISOString().split("T")[0];

  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${SITE_URL}/sitemap.xml</loc>
    <lastmod>${lastmod}</lastmod>
  </sitemap>
</sitemapindex>`;

  return new Response(xmlContent, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
      "X-Robots-Tag": "noindex",
    },
  });
};
