// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap()],
  site: "https://gobicon.org",
  base: process.env.GITHUB_PAGES === 'true' ? "/gobicon-2025" : "/",
  i18n: {
    defaultLocale: "cn",
    locales: ["cn", "en"],
    routing: {
      prefixDefaultLocale: true
    }
  },
  redirects: {
    '/': '/cn/',
    '/schedule': '/cn/agenda',
    '/agenda': '/cn/agenda',
  },
});
