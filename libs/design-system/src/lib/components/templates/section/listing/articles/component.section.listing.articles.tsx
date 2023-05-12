import { useEffect, useState, useRef, MutableRefObject, useCallback } from 'react';
import { Button, Col, Container, Row } from '../../../../atoms';
import { Confetti } from '../../../../molecules';
import { functionCheckIsDOM, functionSelectIcon, Throttle } from './../../../../../utils';
import { Header, Wraper } from './component.section.listing.articles.styles';
import { ArticleShortLarge, ArticleShortSmall,  } from './../../../../organisms';
import type { Props } from './component.section.listing.articles.type';


export function SectionListingArticles ( {data, isLoading, nextPage}: Props ) {
  const [pageSize, setPageSize] = useState ( 6 )
  const [isLoadingNextPage, setIsLoadingNextPage] = useState ( nextPage?.loadingNextPage );
  const [listingType, setListingType] = useState ( 'grid' );
  const list: MutableRefObject<HTMLElement | null> = useRef ( null )


  useEffect ( () => {
    console.log(nextPage, 'nextPage article')
    nextPage?.pageSize && setPageSize ( nextPage.pageSize );
    nextPage?.loadingNextPage && setIsLoadingNextPage ( nextPage.loadingNextPage );
  }, [nextPage] );

  useEffect ( () => {
    const scrollThrottle = new Throttle ( {wait: 100} );
    const LoadNextPage = () => {
      if ( (nextPage?.page || 1) < (nextPage?.pageCount || 1) ) {
        scrollThrottle.setLastTimeOut ( () => {
          const bottom = list.current?.getBoundingClientRect ().bottom || 0;
          if ( bottom - (window.innerHeight + 0) < 100 ) {
            console.log('window.innerHeight')
            nextPage?.callBack && nextPage.callBack ( (nextPage?.page || 1) + 1 )
          }
        } )
      }
    }

    window.addEventListener ( 'scroll', LoadNextPage );
    return () => window.removeEventListener ( 'scroll', LoadNextPage );
  }, [nextPage] );

  useEffect ( () => {
    functionCheckIsDOM ( () => {
      const localStorage = window.localStorage.getItem ( 'LISTING_TYPE' );
      if ( !localStorage ) window.localStorage.setItem ( 'LISTING_TYPE', listingType );
      else if ( listingType !== localStorage ) setListingType ( localStorage );
    } );
  }, [] );

  useEffect ( () => {
    functionCheckIsDOM ( () => {
      const localStorage = window.localStorage.getItem ( 'LISTING_TYPE' );
      if ( listingType !== localStorage ) window.localStorage.setItem ( 'LISTING_TYPE', listingType );
    } );
  }, [listingType] );

  const listing =
    listingType === 'grid'
      ? data?.map ( ( content, index ) => (
        <Col xs={12} s={6} m={4} style={{marginBottom: '3rem'}} key={index}>
          <ArticleShortSmall data={content} isLoading={isLoading}/>
        </Col>
      ) )
      : data?.map ( ( content, index ) => (
        <Col xs={12} style={{marginBottom: '3rem'}}>
          <ArticleShortLarge data={content} isLoading={isLoading}/>
        </Col>
      ) );


  const Loadinglisting = useCallback(() => {

    if ( isLoadingNextPage ) {
      if(listingType === 'grid') return new Array ( pageSize ).fill ( null )?.map ( ( _, index ) => (
        <Col xs={12} s={6} m={4} style={{marginBottom: '3rem'}} key={index}>
          <ArticleShortSmall isLoading={true}/>
        </Col>
      ))
      return new Array ( pageSize ).fill(null).map ( ( _, index ) => (
        <Col xs={12} style={{marginBottom: '3rem'}} key={index}>
          <ArticleShortLarge isLoading={true}/>
        </Col>
      ))
    }

    return null
  }, [listingType, pageSize, isLoadingNextPage])

  return (
    <Wraper ref={list}>
      <Container>
        <Row>
          <Col xs={12}>
            <Header>
              <span>Lista</span>
              <Button
                type="button"
                variant="shadow"
                color="danger"
                shape="circle"
                size="default"
                title={`zmień listę artykułów na ${listingType === 'grid' ? 'listę' : 'siatkę'}`}
                onClick={() => (listingType === 'grid' ? setListingType ( 'list' ) : setListingType ( 'grid' ))}
              >
                {functionSelectIcon ( listingType === 'grid' ? 'list' : 'grid', 20 )}
              </Button>
            </Header>
          </Col>
          {listing}
          {isLoadingNextPage && Loadinglisting()}
          {(nextPage?.page || 0) >= (nextPage?.pageCount || 0) ? (<Confetti/>) : null}
        </Row>
      </Container>
    </Wraper>
  );
}
