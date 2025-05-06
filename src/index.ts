import type { AstroIntegration } from "astro";
import { Plugin, registerPlugin } from "@recogito/studio-sdk";

const SandcastlePlugin: Plugin = {
  name: "Sandcastle3D Export",

  description:
    "A custom annotation export for the Sandcastle3D project",

  author: "Performant Software",

  homepage: "https://www.performantsoftware.com/",

  module_name: "@recogito/plugin-sandcastle-export",

  thumbnail: 'thumbnail.jpg',

  extensions: [
    {
      name: "download-formats-document-menu-items",

      component_name: "DocumentMenuExtension",

      extension_point: "project:document-actions",
    },
  ],
};

const plugin = (): AstroIntegration => ({
  name: "sandcastle-export-plugin",
  hooks: {
    "astro:config:setup": ({ config, logger, injectRoute }) => {
      // UI: register additional download menu items
      registerPlugin(SandcastlePlugin, config, logger);

      // Inject download route
      logger.info("Injecting new API route: /api/[projectId]/export/sandcastle");

      injectRoute({
        pattern: "/api/[projectId]/[documentId]/export/sandcastle",
        entrypoint:
          "node_modules/@recogito/plugin-sandcastle-export/src/api/SandcastleExportRoute.ts",
        prerender: false,
      });
    },
  },
});

export default plugin;
