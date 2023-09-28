import React, { useRef, useState, useCallback } from 'react';
import classnames from 'classnames';
import { useForm } from "react-hook-form";
import { Search } from 'react-feather';
import { useSiteConfig } from '../../../../hooks';
import { KeyboardShortcut, Modal } from '../../../atoms';
import type { SearchSuggestionModalProps } from "./types";
import styles from './searchEngineInModal.module.scss';
import { SearchModalContent } from './components/searchModalContent';
import { useSearchResults } from './hooks/useSearchResults';



export function SearchEngineInModal( { className, defaultSuggestions, onSearchQuery }: SearchSuggestionModalProps) {
  const { client } = useSiteConfig();
  const { register, watch } = useForm<{ search: string }>();
  const [ isOpenModal, setIsOpenModal] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const searchQuery = watch('search');
  const { isAwaitingApiResponse, searchResults } = useSearchResults(searchQuery, onSearchQuery);

  const toggleModal = useCallback(() => setIsOpenModal(prevState => !prevState), []);

  const handleClickOutside = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      toggleModal();
    }
  }, [toggleModal]);

  return (
    <>
      <div className={classnames ( styles.wrapper, className )} onClick={toggleModal}>
        <Search size={18}/>
        <p>Szukaj...</p>
        {client?.platform.isDesktop &&
          <KeyboardShortcut command className={styles.shortcut} callback={toggleModal}>K</KeyboardShortcut>
        }
      </div>
      <Modal open={isOpenModal} onClick={handleClickOutside} onClose={toggleModal} className={styles.modal}>
        <SearchModalContent
          register={register}
          searchQuery={searchQuery}
          isAwaitingApiResponse={isAwaitingApiResponse}
          searchResults={searchResults}
          defaultSuggestions={defaultSuggestions || []}
          modalRef={modalRef}
        />
      </Modal>
    </>
  );
}
