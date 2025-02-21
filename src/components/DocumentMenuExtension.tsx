import { DocumentCardActionsExtensionProps } from '@recogito/studio-sdk';

export const DocumentMenuExtension = (props: DocumentCardActionsExtensionProps) => {

  return (
    <a href={`/api/${props.projectId}/export/unreal`}>Export for Unreal 3D</a>
  )

}