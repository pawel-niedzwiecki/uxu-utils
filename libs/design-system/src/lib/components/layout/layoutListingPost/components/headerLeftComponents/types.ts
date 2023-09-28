import { DefaultSuggestions, OnSearchQuery } from "../../../../organisms/searchEngine/searchEngineInModal/types";

export type SearchEngine = {
  onSearchQuery?: OnSearchQuery;
  defaultSuggestions?: DefaultSuggestions;
}

export type HeaderLeftComponentsProps = {
  isDesktop: boolean;
  searchEngine?: SearchEngine;
  isLinkActive: (slug: string) => boolean;
  menuItems: { slug: string, title: string }[];
};
