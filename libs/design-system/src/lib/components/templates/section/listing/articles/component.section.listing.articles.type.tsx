import type { ArticleShortDataType } from '../../../../organisms';


export type Props = {
  data: ArticleShortDataType[],
  isLoading: boolean,
  nextPage?: {
    page?: number
    pageSize?: number
    pageCount?: number
    loadingNextPage?: boolean;
    callBack?: (page: number) => void
  }
};
