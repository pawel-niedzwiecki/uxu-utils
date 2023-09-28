import { useEffect, useState } from "react";
import { SearchSuggestionContentDetails } from "../types";
export const useSearchResults = ( searchQuery: string, onSearchQuery?: ( searchQuery: string ) => Promise<{
  searchResults: SearchSuggestionContentDetails[]
}> ) => {
  const [isAwaitingApiResponse, setIsAwaitingApiResponse] = useState<boolean> ( false );
  const [searchResults, setSearchResults] = useState<SearchSuggestionContentDetails[]> ( [] );

  useEffect ( () => {
    let isActive = true;

    const fetchSearchResults = async () => {
      setIsAwaitingApiResponse ( true );
      const res = await onSearchQuery?. ( searchQuery );
      if ( isActive ) {
        setIsAwaitingApiResponse ( false );
        setSearchResults ( res?.searchResults ?? [] );
      }
    };

    if ( searchQuery?.length > 1 ) {
      fetchSearchResults ();
    } else {
      setSearchResults ( [] );
    }

    return () => {
      isActive = false;
    };
  }, [searchQuery, onSearchQuery] );

  return {isAwaitingApiResponse, searchResults};
};
