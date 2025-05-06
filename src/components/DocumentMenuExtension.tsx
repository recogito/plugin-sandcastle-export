import { DocumentCardActionsExtensionProps } from "@recogito/studio-sdk";
import { CubeTransparent } from "@phosphor-icons/react";
import "./DocumentMenuExtension.css";

export const DocumentMenuExtension = (
  props: DocumentCardActionsExtensionProps
) => {
  return (
    <a
      className="dme-menu-item"
      href={`/api/${props.projectId}/${props.document.id}/export/sandcastle`}
    >
      <CubeTransparent size={16} color="#6f747c" />
      Export for Sandcastle 3D
    </a>
  );
};
