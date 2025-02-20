# plugin-duke-unreal-export

A custom annotation export for Duke University's Unreal 3D importer.

## Development

- Run `npm install` in the root folder and in the `.dev` folder.
- Run `npm run build` to build the plugin.
- Run `npm run dev` to start the test application.
- Go to <http://localhost:4321/>

## Configuring for Supabase Backend Access

This plugin accesses the database backend. Therefore, you need to configure the test app for Supabase access.

1. Create a copy of the file `.dev/.env.example` named `.dev/.env`.
2. Edit the `.dev/.env` file to configure your Supabase project URL and public API key.
3. Restart the test app with `npm run dev`.

The test application will list only the __UI extensions__ provided by a plugin. In this plugin, that's simply a `<a>` link to the export route, meant to go into Recogito's export menu later. Because of the limitations of the test app, the "current project" will be `undefined`, and the link will point to:

<http://localhost:4321/api/undefined/export/unreal>

To test the export route, you need to manually replace `undefined` with the ID of a project you have access to. E.g.: 

<http://localhost:4321/api/1cb15deb-e9c9-44e8-acbf-e30423d58e9e/export/unreal>



