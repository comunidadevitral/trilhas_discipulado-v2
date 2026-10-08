import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  integrations: [sitemap()],
  vite: {
    plugins: [tailwind()],
  },
  site: 'https://trilhas-discipulado.pages.dev',
});