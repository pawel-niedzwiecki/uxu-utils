import type { MouseEvent, PropsWithChildren } from "react";

export type ModalProps = PropsWithChildren<{
  open?: boolean;
  className?: string;
  renderDirectlyInBody?: boolean;
  onClose?: () => void;
  onClick?: (e: MouseEvent<HTMLDivElement>) => void
}>
