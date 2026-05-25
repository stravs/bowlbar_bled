import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://bowlbarbled.si',
  integrations: [sitemap()]
});
