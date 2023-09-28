import type { PropsWithChildren } from "react";


export type PropsNote = PropsWithChildren<{
  fill?: boolean;
  disabled?: boolean;
  className?: string;
  action?: JSX.Element;
  type?: 'success' | 'error' | 'warning' | 'default' ;
}>
