interface DocumentMenuExtensionProps {

  projectId: string;

}

const DocumentMenuExtension = (props: DocumentMenuExtensionProps) => {

  return (
    <a href={`/api/${props.projectId}/export/unreal`}>Export for Unreal 3D</a>
  )

}

export default DocumentMenuExtension;