import { ReactNode } from "react";


export type KeyboardShortcutProps = {
  command?: boolean;
  shift?: boolean;
  option?: boolean;
  ctrl?: boolean;
  callback: () => void;
  children?: ReactNode;
  className?: string;
}
