import type { PropsWithChildren } from "react";

export type LinkProps = PropsWithChildren<{
  href: string;
  title: string;
  className?: string;
}>;
