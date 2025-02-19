import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import node from '@astrojs/node';
import UnrealExportPlugin from '@recogito/plugin-duke-unreal-export';

export default defineConfig({
  integrations: [
    react(),
    UnrealExportPlugin(),
  ],
  devToolbar: {
    enabled: false
  },
  adapter: node({
    mode: 'standalone'
  })
});