import type { AstroIntegration } from "astro";
import { registerExtensions } from "@recogito/studio-sdk";

const DocumentMenuExtension = {
  name: "download-formats-document-menu-items",
  component_name: "DocumentMenuExtension",
  module_name: "@recogito/plugin-duke-unreal-export",
  extension_point: "*",
};

const Plugin = (): AstroIntegration => ({
  name: "unreal-export-plugin",
  hooks: {
    "astro:config:setup": ({ config, logger, injectRoute }) => {
      // UI: register additional download menu items
      registerExtensions(DocumentMenuExtension, config, logger);

      // Inject download route
      logger.info("Injecting new API route: /api/[projectId]/export/unreal");

      injectRoute({
        pattern: "/api/[projectId]/export/unreal",
        entrypoint:
          "node_modules/@recogito/plugin-duke-unreal-export/src/api/UnrealExportRoute.ts",
        prerender: false,
      });
    },
  },
});

export default Plugin;
