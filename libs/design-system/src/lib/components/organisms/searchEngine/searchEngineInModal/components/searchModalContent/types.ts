import React from "react";
import { UseFormRegister } from "react-hook-form";
import { SearchSuggestionContentDetails } from "../../types";

export type SearchModalContentProps = {
  register: UseFormRegister<{ search: string; }>;
  searchQuery: string;
  isAwaitingApiResponse: boolean;
  searchResults: Array<SearchSuggestionContentDetails>;
  defaultSuggestions: Array<SearchSuggestionContentDetails>;
  modalRef: React.RefObject<HTMLDivElement>;
}
