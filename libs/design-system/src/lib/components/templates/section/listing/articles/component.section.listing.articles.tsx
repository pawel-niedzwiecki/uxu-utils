import { useEffect, useState } from 'react';

import { Button, Col, Container, Row } from '../../../../atoms';
import { functionCheckIsDOM, functionSelectIcon } from './../../../../../utils';
import { Header, Wraper } from './component.section.listing.articles.styles';
import { ArticleShortLarge, ArticleShortSmall } from './../../../../organisms';


export function ListingArticles({}) {
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


  const listing = listingType === 'grid' ? new Array(12).fill(undefined).map(() => (
    <Col xs={12} s={4} l={3} style={{ marginBottom: '3rem' }}>
      <ArticleShortSmall data={{
        isLoading: false,
        content: {
          title: 'wTrasie',
          slug: 'test',
          cover: {
            src: 'https://wtrasiepl.s3.eu-west-1.amazonaws.com/og_W_Trasie_b09a760706.png',
            alt: 'kupa',
          },
        },
      }} />
    </Col>
  )) : new Array(12).fill(undefined).map(() => (
    <Col xs={12} style={{ marginBottom: '3rem' }}>
      <ArticleShortLarge
        data={{
          isLoading: false,
          content: {
            title: 'test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test',
            slug: 'test',
            cover: {
              src: 'https://wtrasiepl.s3.eu-west-1.amazonaws.com/og_W_Trasie_b09a760706.png',
              alt: 'kupa',
            },
            createdAt: new Date(1990, 1, 22),
            author: {
              name: 'Paweł Niedźwiecki',
              avatar: {
                src: 'https://wtrasiepl.s3.eu-west-1.amazonaws.com/og_W_Trasie_b09a760706.png',
                alt: 'kupa',
              },
            },
            tags: [{ title: 'okk', slug: '/' }, { title: 'okk', slug: '/' }, { title: 'okk', slug: '/' }],
            stats: { ratings: 1, comments: 32, views: 4234523 },
          },
        }} />
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
