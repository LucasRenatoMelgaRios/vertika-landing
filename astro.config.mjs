// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://vertikaplatforms.com',
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'always' },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      changefreq: 'monthly',
      priority: 0.7,
      serialize(item) {
        if (item.url === 'https://vertikaplatforms.com/') item.priority = 1.0;
        return item;
      },
    }),
  ],
});
