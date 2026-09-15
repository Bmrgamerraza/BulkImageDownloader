// src/pages/sitemap.xml.ts
import type { APIRoute } from "astro";

export const prerender = false;

const SITE_URL = "https://freebulkimagedownloader.com";

const languages = [
  { code: "en", prefix: "" },
  { code: "es", prefix: "/es" },
  { code: "ja", prefix: "/ja" },
  { code: "fr", prefix: "/fr" },
  { code: "de", prefix: "/de" },
  { code: "pt", prefix: "/pt" },
  { code: "ko", prefix: "/ko" },
  { code: "it", prefix: "/it" },
] as const;

interface RouteConfig {
  path: string; // e.g. "", "url-list-downloader"
  priority: string;
  changefreq: "daily" | "weekly" | "monthly";
}

const routes: RouteConfig[] = [
  { path: "", priority: "1.0", changefreq: "daily" },
  { path: "url-list-downloader", priority: "0.9", changefreq: "daily" },
  { path: "webpage-image-scraper", priority: "0.9", changefreq: "daily" },
  { path: "chrome-extension-alternative", priority: "0.8", changefreq: "weekly" },
  { path: "about", priority: "0.5", changefreq: "monthly" },
  { path: "contact", priority: "0.5", changefreq: "monthly" },
  { path: "privacy", priority: "0.5", changefreq: "monthly" },
  { path: "terms", priority: "0.5", changefreq: "monthly" },
];

function getUrlForLang(path: string, langPrefix: string): string {
  if (path === "") {
    return langPrefix === "" ? `${SITE_URL}/` : `${SITE_URL}${langPrefix}/`;
  }
  return langPrefix === "" ? `${SITE_URL}/${path}` : `${SITE_URL}${langPrefix}/${path}`;
}

export const GET: APIRoute = async () => {
  const lastmod = new Date().toISOString().split("T")[0];

  const urlBlocks: string[] = [];

  for (const route of routes) {
    // Generate the alternate links for this route across all languages
    const alternates: string[] = [
      `    <xhtml:link rel="alternate" hreflang="x-default" href="${getUrlForLang(route.path, "")}" />`,
      ...languages.map(
        (lang) =>
          `    <xhtml:link rel="alternate" hreflang="${lang.code}" href="${getUrlForLang(route.path, lang.prefix)}" />`
      ),
    ];

    // For each language variant, create a <url> entry
    for (const lang of languages) {
      const loc = getUrlForLang(route.path, lang.prefix);
      urlBlocks.push(`  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
${alternates.join("\n")}
  </url>`);
    }
  }

  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urlBlocks.join("\n\n")}
</urlset>`;

  return new Response(xmlContent, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
      "X-Robots-Tag": "noindex", // Prevents indexing the sitemap file itself as a web page
    },
  });
};
