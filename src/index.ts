import type { AstroIntegration } from 'astro';
import { registerExtensions } from '@recogito/studio-sdk';

const DocumentMenuExtension = {
  name: 'download-formats-document-menu-items',
  component_name: 'DocumentMenuExtension',
  module_name: '@recogito/plugin-export-formats',
  extension_point: '*'
}

const Plugin = (): AstroIntegration => ({
  name: 'hello-world-plugin',
  hooks: {
    'astro:config:setup': ({ config, logger, injectRoute }) => {
      // UI: register additional download menu items
      registerExtensions(DocumentMenuExtension, config, logger);

      // Inject download route
      logger.info('Injecting new API route: /api/[projectId]/export/houdini');

      injectRoute({
        pattern: '/api/[projectId]/export/houdini',
        entrypoint: '@recogito/plugin-export-formats/HoudiniExportHandler.js',
        prerender: false
      });
    }
  }
});

export default Plugin;