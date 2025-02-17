import type { APIRoute } from 'astro';
import { createServerSDK } from '@recogito/studio-sdk';

export const GET: APIRoute = async ({ request, params, cookies }) => {
  const projectId = params.projectId;

  const sdk = await createServerSDK(request, cookies, import.meta.env);

  const { error: profileError, data: profile } = await sdk.profile.getMyProfile();
  if (profileError || !profile)
    return new Response(
      JSON.stringify({ message: 'Not authorized' })
    );

  const hasSelectPermissions = await sdk.project.hasSelectPermissions(profile, projectId!);
  if (!hasSelectPermissions)
    return new Response(
      JSON.stringify({ message: 'Not authorized' })
    );

  const { error: layersError, data: layers } = await sdk.layers.getLayersInProject(projectId!);

  if (layersError || !layers)
    return new Response(
      JSON.stringify({ message: layersError?.message })
    );

  const layerIds = layers.map(l => l.id);

  const { error: anntotationsError, data: annotations } = await sdk.annotations.get(layerIds);
  if (anntotationsError || !annotations)
    return new Response(
      JSON.stringify({ message: anntotationsError?.message })
    );

  console.log(JSON.stringify(annotations));

  return new Response(
    JSON.stringify({ message: 'success!' })
  );  

}