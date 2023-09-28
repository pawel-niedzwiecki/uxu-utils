import React, { useState } from "react";
import styles from "./searchModalContent.module.scss";
import { Input } from "../../../../../molecules/inputs/input";
import { LoadingWheel } from "../../../../../atoms";
import { SuggestionList } from "../suggestionList";
import type { SearchModalContentProps } from './types';




export function SearchModalContent({ register, searchQuery, isAwaitingApiResponse, searchResults, defaultSuggestions, modalRef }: SearchModalContentProps ) {
  const [currentHoveredSuggestionIndex, setCurrentHoveredSuggestionIndex] = useState(1);

  return (
    <div ref={modalRef} className={styles.container}>
      <div className={styles.header}>
        <form>
          <Input {...register ( 'search' )} type="text" placeholder="Co potrzebujesz?" className={styles.wrapperSearch} />
        </form>
      </div>
      <div className={styles.content}>
        {searchQuery?.length > 1 ? (
          isAwaitingApiResponse ? (
            <div className={styles.wrapperLoading}>
              <LoadingWheel size={2} />
            </div>
          ) : (
            <>
              <span className={styles.info}>{searchResults.length ? `Znaleziono ${searchResults.length} wyników` : `Nic nie znaleziono dla hasła: ${searchQuery}`}</span>
              <SuggestionList listType="searchResults" suggestions={searchResults} currentHoveredSuggestionIndex={currentHoveredSuggestionIndex} onMouseEnter={setCurrentHoveredSuggestionIndex}/>
            </>
          )
        ) : (
          <span className={styles.info}>Aby rozpocząć wyszukiwanie, wpisz więcej niż 2 znaki</span>
        )}
        {defaultSuggestions?.length && !searchResults?.length && (
          <>
            <span className={styles.info}>Polecane dla Ciebie</span>
            <SuggestionList listType="defaultSuggestions" suggestions={defaultSuggestions} currentHoveredSuggestionIndex={currentHoveredSuggestionIndex} onMouseEnter={setCurrentHoveredSuggestionIndex}/>
          </>
        )}
      </div>
    </div>
  );
}
