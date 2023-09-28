import { PropsWithChildren } from "react";

export type SectionInfiniteScrollProps = PropsWithChildren<{
  page: number;
  pageCount: number;
  onScrollEnd: (nextPage: number) => Promise<{ page?: number }>;
}>;
