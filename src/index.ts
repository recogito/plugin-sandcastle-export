import type { AstroIntegration } from "astro";
import { Plugin, registerPlugin } from "@recogito/studio-sdk";

const DukeUnrealPlugin: Plugin = {
  name: "Duke Unreal Export",

  description:
    "A custom annotation export for Duke University's Unreal 3D importer",

  author: "Performant Software",

  homepage: "https://www.performantsoftware.com/",

  extensions: [
    {
      name: "download-formats-document-menu-items",

      component_name: "DocumentMenuExtension",

      module_name: "@recogito/plugin-duke-unreal-export",

      extension_point: "project:document-actions",
    },
  ],
};

const plugin = (): AstroIntegration => ({
  name: "unreal-export-plugin",
  hooks: {
    "astro:config:setup": ({ config, logger, injectRoute }) => {
      // UI: register additional download menu items
      registerPlugin(DukeUnrealPlugin, config, logger);

      // Inject download route
      logger.info("Injecting new API route: /api/[projectId]/export/unreal");

      injectRoute({
        pattern: "/api/[projectId]/[documentId]/export/unreal",
        entrypoint:
          "node_modules/@recogito/plugin-duke-unreal-export/src/api/UnrealExportRoute.ts",
        prerender: false,
      });
    },
  },
});

export default plugin;
