import { SearchSuggestionContentDetails } from "../../../../organisms/searchEngine/searchEngineInModal/types";

export type HeaderLeftComponentsProps = {
  isDesktop: boolean;
  isLinkActive: (slug: string) => boolean;
  menuItems: { slug: string, title: string }[];
  defaultSuggestions: Array<SearchSuggestionContentDetails>;
};
