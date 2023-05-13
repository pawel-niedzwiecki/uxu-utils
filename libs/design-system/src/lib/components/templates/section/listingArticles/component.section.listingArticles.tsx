import { useRef } from 'react';
import { Confetti } from '../../../molecules';
import { Container, Row } from '../../../atoms';
import { Wrapper } from './component.section.listingArticles.styles';
import { usePagination, useListingType } from '../../../../hooks';
import { ListingArticlesHeader, AnimateLoadingListing, ListingArticles } from './compoentns';
import type { SectionListingArticlesProps } from './component.section.listingArticles.type';


export function SectionListingArticles ( {dataSSR, dataClient}: SectionListingArticlesProps ) {
  const refListing = useRef ( null );
  const {listingType, setListingType} = useListingType ( {type: 'grid'} );
  const {pageSize, isLoadingNextPage, isNextPage} = usePagination ( {paginationSSR: dataSSR.pagination, paginationClient: dataClient.pagination, refListing} );

  return (
    <Wrapper ref={refListing}>
      <Container>
        <Row>
          <ListingArticlesHeader listingType={listingType} setListingType={setListingType}/>
          <ListingArticles data={dataSSR.data} listingType={listingType} />
          <ListingArticles data={dataClient.data} listingType={listingType} />
          <AnimateLoadingListing listingType={listingType} isLoadingNextPage={isLoadingNextPage} pageSize={pageSize}/>
          {!isNextPage && <Confetti title="Właśnie dotarłeś do końca internetów, brawo 😎" style={{top: dataSSR.data?.length ? '-3rem' : "0" }} />}
        </Row>
      </Container>
    </Wrapper>
  );
}
