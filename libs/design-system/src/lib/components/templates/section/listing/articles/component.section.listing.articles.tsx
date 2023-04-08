import { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from '../../../../atoms';
import { functionCheckIsDOM, functionSelectIcon } from './../../../../../utils';
import { Header, Wraper } from './component.section.listing.articles.styles';
import { ArticleShortLarge, ArticleShortSmall } from './../../../../organisms';
import type { Props } from './component.section.listing.articles.type';

export function ListingArticles({ data, isLoading }: Props) {
  const [listingType, setListingType] = useState('grid');

  useEffect(() => {
    functionCheckIsDOM(() => {
      const localStorage = window.localStorage.getItem('LISTING_TYPE');
      if (!localStorage) window.localStorage.setItem('LISTING_TYPE', listingType);
      else if (listingType !== localStorage) setListingType(localStorage);
    });

  }, []);

  useEffect(() => {
    functionCheckIsDOM(() => {
      const localStorage = window.localStorage.getItem('LISTING_TYPE');
      if (listingType !== localStorage) window.localStorage.setItem('LISTING_TYPE', listingType);
    });
  }, [listingType]);


  const listing = listingType === 'grid' ? data?.map((content, index) => (
    <Col xs={12} s={4} l={3} style={{ marginBottom: '3rem' }} key={index}>
      <ArticleShortSmall data={content} isLoading={isLoading} />
    </Col>
  )) : data?.map((content, index) => (
    <Col xs={12} style={{ marginBottom: '3rem' }}>
      <ArticleShortLarge data={content} isLoading={isLoading} />
    </Col>
  ));

  return (
    <Wraper>
      <Container>
        <Row>
          <Col xs={12}>
            <Header>
              <span>Lista</span>
              <Button
                type='button'
                variant='shadow'
                color='danger'
                shape='circle'
                size='default'
                title={`zmień listę artykułów na ${listingType === 'grid' ? 'listę' : 'siatkę'}`}
                onClick={() => listingType === 'grid' ? setListingType('list') : setListingType('grid')}
              >
                {functionSelectIcon(listingType === 'grid' ? 'list' : 'grid', 20)}
              </Button>
            </Header>
          </Col>
          {listing}
        </Row>
      </Container>
    </Wraper>
  );
}
