import type { ArticleShortDataType } from '../../../organisms';
import type { Pagination } from '../../../../utils';


export type SectionListingArticlesProps = {
  dataSSR: {
    data: ArticleShortDataType[],
    pagination: Pagination
  }
  dataClient: {
    data: ArticleShortDataType[],
    pagination: Pagination
  }
};
