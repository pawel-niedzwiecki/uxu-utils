import type { ArticleShortDataType } from '../../../../../organisms';

export type ListingArticlesProps = {
  data: ArticleShortDataType[];
  listingType: 'grid' | 'list';
}
