interface DocumentMenuExtensionProps {

  projectId: string;

}

export const DocumentMenuExtension = (props: DocumentMenuExtensionProps) => {

  return (
    <a href={`/api/${props.projectId}/export/unreal`}>Export for Unreal 3D</a>
  )

}