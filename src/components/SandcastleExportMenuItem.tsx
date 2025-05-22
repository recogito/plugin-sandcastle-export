import { forwardRef, Ref } from "react";
import * as Dropdown from "@radix-ui/react-dropdown-menu";
import { DocumentCardActionsExtensionProps } from "@recogito/studio-sdk";
import { CubeTransparent } from "@phosphor-icons/react";

export const SandcastleExportMenuItem = forwardRef((
  props: DocumentCardActionsExtensionProps,
  forwardedRef: Ref<HTMLDivElement>
) => {

  const { content_type, meta_data } = props.document;

  const enabled = content_type?.startsWith("image") || meta_data?.protocol;

  const onSelect = () => {
    window.location.href = `/api/${props.projectId}/${props.document?.id}/export/sandcastle`;
  }

  return (
    <Dropdown.Item
      ref={forwardedRef} 
      disabled={!enabled}
      className="dropdown-item" 
      onSelect={onSelect}>
      <CubeTransparent size={16} color="#6f747c" />
      Export for Sandcastle 3D
    </Dropdown.Item>
  );
});
