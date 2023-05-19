import { PropsWithChildren } from "react";

export type ComponentCommentsProps = PropsWithChildren<{
  id?: string
  pageID?: string
  header?: string
  canonicalURL?: string
}>
