import { PropsWithChildren } from "react";

export type SiteBarProps = PropsWithChildren<{
  site: "left" | "right";
  className?: string;
}>;
