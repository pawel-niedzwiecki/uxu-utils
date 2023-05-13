import { useEffect, useState } from "react";
import { functionCheckIsDOM } from "../utils";

export type UseListingType = {
  type: 'grid' | 'list'
}

export function useListingType ( {type}:UseListingType) {
  const [listingType, setListingType] = useState ( type );

  useEffect ( () => {
    functionCheckIsDOM ( () => {
      const localStorage = window.localStorage.getItem ( 'LISTING_TYPE' ) === 'list' ? 'list' : 'grid';
      if ( !localStorage ) window.localStorage.setItem ( 'LISTING_TYPE', listingType );
      else if ( listingType !== localStorage ) setListingType ( localStorage  );
    } );
  }, [] );

  useEffect ( () => {
    functionCheckIsDOM ( () => {
      const localStorage = window.localStorage.getItem ( 'LISTING_TYPE' );
      if ( listingType !== localStorage ) window.localStorage.setItem ( 'LISTING_TYPE', listingType );
    } );
  }, [listingType] );

  return {listingType, setListingType}
}
