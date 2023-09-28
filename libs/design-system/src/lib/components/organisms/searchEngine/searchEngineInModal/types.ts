export type SearchSuggestionContentDetails = {
  slug: string;
  title: string;
  lead?: string;
  type: "post" | "page";
};

export type DefaultSuggestions = Array<SearchSuggestionContentDetails>;

export type OnSearchQuery = ( searchQuery: string ) => Promise<{ searchResults: SearchSuggestionContentDetails[] }>

export type SearchSuggestionModalProps = {
  className?: string;
  onSearchQuery?: OnSearchQuery;
  defaultSuggestions?: DefaultSuggestions;
};
