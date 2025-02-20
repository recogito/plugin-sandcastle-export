# plugin-duke-unreal-export

A custom annotation export for Duke University's Unreal 3D importer.

## Development

- Run `npm install` in the root folder and in the `.dev` folder.
- Run `npm run build` to build the plugin.
- Run `npm run dev` to start the test application.
- Go to <http://localhost:4321/>

The test application will list the UI extension that is meant to provide the drop-down menu option for the export later. The extension is simply a link to the export for the current project. Because of the limitations of the test app, the current project will be `undefined`. 

To test the export route, you need to follow these steps:

1. Create a copy of the file `.dev/.env.example` named `.dev/.env`.
2. Edit the `.dev/.env` file to configure your Supabase project URL and public API key.
3. Restart the test app with `npm run dev`.
4. Navigate manually to an export route for a project you have access to on your Supabase instance. E.g.: 

<http://localhost:4321/api/1cb15deb-e9c9-44e8-acbf-e30423d58e9e/export/unreal>

