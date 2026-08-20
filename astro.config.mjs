// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://freebulkimagedownloader.com',
  output: 'server',
  integrations: [sitemap()],
  redirects: {
    '/sitemap.xml': '/sitemap-index.xml',
  },
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