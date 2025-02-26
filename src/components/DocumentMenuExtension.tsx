import { DocumentCardActionsExtensionProps } from "@recogito/studio-sdk";
import { CubeTransparent } from "@phosphor-icons/react";
import "./DocumentMenuExtension.css";

export const DocumentMenuExtension = (
  props: DocumentCardActionsExtensionProps
) => {
  return (
    <a
      className="dme-menu-item"
      href={`/api/${props.projectId}/${props.documentId}/export/unreal`}
    >
      <CubeTransparent size={16} color="#6f747c" />
      Export for Unreal 3D
    </a>
  );
};
