import { Col } from '../../../../../atoms';
import { ArticleShortLarge, ArticleShortSmall, } from '../../../../../organisms';
import type { AnimateLoadingListingProps } from './components.section.listingArticles.animateLoadingListing.types';


export function AnimateLoadingListing ( {pageSize, isLoadingNextPage, listingType}: AnimateLoadingListingProps ) {
  if ( isLoadingNextPage ) {
    switch (listingType) {
      case 'grid':
        return (
          <>
            {new Array ( pageSize ).fill ( null )?.map ( ( _, index ) => (
              <Col xs={12} s={6} m={4} style={{marginBottom: '3rem'}} key={index}>
                <ArticleShortSmall isLoading={true}/>
              </Col>
            ) )}
          </>
        )
      default:
        return (
          <>
            {new Array ( pageSize ).fill ( null ).map ( ( _, index ) => (
              <Col xs={12} style={{marginBottom: '3rem'}} key={index}>
                <ArticleShortLarge isLoading={true}/>
              </Col>
            ) )}
          </>
        )
    }
  }
  return null
}
