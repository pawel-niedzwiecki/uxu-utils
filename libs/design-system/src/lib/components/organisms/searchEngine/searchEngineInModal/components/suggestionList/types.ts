import { SearchSuggestionContentDetails } from "../../types";

export type SuggestionListProps = {
  currentHoveredSuggestionIndex: number;
  onMouseEnter: (index: number) => void;
  listType: 'defaultSuggestions' | 'searchResults';
  suggestions: Array<SearchSuggestionContentDetails>;
}
