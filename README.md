# Duke University 3D Export Plugin

A custom Recogito Studio export for Duke University's Unreal 3D importer.

## Installation

1. **Change into your Recogito Client folder.** To install the plugin package, run:

```
npm install @recogito/plugin-duke-unreal-export
```

2. **Edit your `astro.config.mjs`:**

```diff
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import netlify from '@astrojs/netlify';

+ import DukeUnrealExportPlugin from '@recogito/plugin-duke-unreal-export';

export default defineConfig({
  integrations: [
    react(),
+   DukeUnrealExportPlugin()
  ],
  output: 'server',
  adapter: netlify(),
  vite: {
    ssr: {
      noExternal: ['clsx', '@phosphor-icons/*', '@radix-ui/*']
    },
    optimizeDeps: {
      esbuildOptions: {
        target: 'esnext'
      }
    }
  }
});
```

3. **Restart the Recogito Client.**

## Development

- Run `npm install` in the root folder and in the `.dev` folder.
- Run `npm run build` to build the plugin.
- Run `npm run dev` to start the test application.
- Go to <http://localhost:4321/>

## Configuring for Supabase Backend Access

This plugin retrieves data from the database. Therefore, you need to configure the test app for Supabase access.

1. Create a copy of the file `.dev/.env.example` named `.dev/.env`.
2. Edit the `.dev/.env` file to configure your Supabase project URL and public API key.
3. Restart the test app with `npm run dev`.

The test application will list only the __UI extensions__ provided by a plugin. In this plugin, that's simply a `<a>` link to the export route, meant to go into Recogito's export menu later. Because of the limitations of the test app, the "current project" will be `undefined`, and the link will point to:

<http://localhost:4321/api/undefined/export/unreal>

To test the export route, you need to manually replace `undefined` with the ID of a project you have access to. E.g.: 

<http://localhost:4321/api/1cb15deb-e9c9-44e8-acbf-e30423d58e9e/export/unreal>



