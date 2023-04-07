import { GET_TYPE_LISTING, TypeListingResponseType, typeListingVar } from '../../../../../gql';
import { useQuery } from '@apollo/client';
import { Header, Wraper } from './component.section.listing.articles.styles';
import { Col, Container, Row } from '../../../../atoms';
import { ArticleShortLarge, ArticleShortSmall } from './../../../../organisms';


export function ListingArticles({}) {
  const { data, variables, loading } = useQuery<TypeListingResponseType>(GET_TYPE_LISTING);

  console.log(variables, 'variables');
  console.log(loading, 'loading');
  console.log(data?.typeListing, 'data');


  return (
    <Wraper>
      <Container>
        <Row>
          <Col xs={12}><Header onClick={() => typeListingVar('k')}>Lista {data?.typeListing}</Header></Col>
          {new Array(12).fill(undefined).map(() => (
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
          ))}

          {new Array(12).fill(undefined).map(() => (
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
          ))}

          <Col xs={4}>ok</Col>
          <Col xs={4}>ok</Col>
          <Col xs={4}>ok</Col>
        </Row>
      </Container>
    </Wraper>
  );
}
