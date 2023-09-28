import type { PropsWithChildren, MouseEventHandler } from "react";

export type LinkProps = PropsWithChildren<{
  href: string;
  title: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}>;
