// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

const locales = ['es', 'ja', 'fr', 'de', 'pt', 'ko', 'it'];
const subroutes = [
  '',
  'url-list-downloader',
  'webpage-image-scraper',
  'chrome-extension-alternative',
  'about',
  'contact',
  'privacy',
  'terms',
];

const siteUrl = 'https://freebulkimagedownloader.com';
const customPages = locales.flatMap(lang =>
  subroutes.map(route => `${siteUrl}/${lang}${route ? `/${route}` : ''}`)
);

// https://astro.build/config
export default defineConfig({
  site: siteUrl,
  output: 'server',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'ja', 'fr', 'de', 'pt', 'ko', 'it'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          es: 'es',
          ja: 'ja',
          fr: 'fr',
          de: 'de',
          pt: 'pt',
          ko: 'ko',
          it: 'it',
        },
      },
      customPages,
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
    server: {
      watch: {
        ignored: [
          '**/.wrangler/**',
          '**/.astro/**',
          '**/dist/**',
          '**/scratch/**',
        ],
      },
    },
  },
  adapter: cloudflare(),
});