export type Pagination = {
  page: number;
  pageSize: number;
  pageCount: number;
  isLoadingNextPage?: boolean;
  callBack?: ( page: number ) => void;
}
