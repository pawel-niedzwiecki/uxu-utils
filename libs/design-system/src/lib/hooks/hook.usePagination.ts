import { Throttle, Pagination } from "./../utils";
import { MutableRefObject, useEffect, useState } from "react";


type UsePaginationProps = {
  paginationSSR: Pagination;
  paginationClient: Pagination;
  refListing: MutableRefObject<HTMLElement | null>;
}

const scrollThrottle = new Throttle ( {wait: 100} );

export function usePagination ( {paginationClient, paginationSSR, refListing}: UsePaginationProps ) {

  const list = refListing;
  const [isNextPage, setIsNextPage] = useState ( true );
  const {page, pageSize, pageCount, isLoadingNextPage , callBack} = paginationClient

  const LoadNextPage = () => {
    if (page < pageCount) scrollThrottle.setLastTimeOut (() => {
      const offsetBottomEdgeOfElement = list?.current?.getBoundingClientRect ()?.bottom || 0;
      (offsetBottomEdgeOfElement - Math.floor (window.innerHeight * 2 / 1.5)) < 0 && callBack && callBack ((page || 1) + 1)
    });
  }

  useEffect ( () => {
    (page >= paginationSSR.pageCount) && setIsNextPage ( false );
    window.addEventListener ( 'scroll', LoadNextPage );
    return () => window.removeEventListener ( 'scroll', LoadNextPage )
  }, [paginationClient] );

  return {pageSize, isNextPage, isLoadingNextPage}
}
