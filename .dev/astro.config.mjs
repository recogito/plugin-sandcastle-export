import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import node from '@astrojs/node';
import SandcastleExportPlugin from '@recogito/plugin-sandcastle-export';

export default defineConfig({
  integrations: [
    react(),
    SandcastleExportPlugin(),
  ],
  devToolbar: {
    enabled: false
  },
  adapter: node({
    mode: 'standalone'
  })
});