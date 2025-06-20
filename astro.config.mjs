// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://nono-k.github.io',
  base: 'feylo-demo',
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "src/styles/mixin.scss";',
        },
      },
    },
  },
});
