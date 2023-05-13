import { Col } from '../../../../../atoms';
import { ArticleShortLarge, ArticleShortSmall, } from '../../../../../organisms';
import type { ListingArticlesProps } from './components.section.listingArticles.listing.types';


export function ListingArticles ( {data, listingType}: ListingArticlesProps ) {
  switch (listingType) {
    case 'grid':
      return (
        <>
          {data?.map ( ( content, index ) => (
            <Col xs={12} s={6} m={4} style={{marginBottom: '3rem'}} key={index}>
              <ArticleShortSmall data={content}/>
            </Col>
          ) )}
        </>
      )
    default:
      return (
        <>
          {data?.map ( ( content, index ) => (
            <Col xs={12} style={{marginBottom: '3rem'}} key={index}>
              <ArticleShortLarge data={content}/>
            </Col>
          ) )}
        </>
      )
  }
}
