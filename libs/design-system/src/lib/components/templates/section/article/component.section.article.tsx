import { Col, Container, Row } from '../../../atoms';
import { ArticleFull } from '../../../organisms';
import { Article } from 'schema-dts';
import Head from 'next/head';
import { Header, Wraper } from './component.section.article.styles';
import type { Props } from './component.section.article.type';

export function SectionArticleFull({ data, isLoading }: Props) {
  const schema: Article = {
    '@type': 'NewsArticle',
    headline: data.title,
    image: [`${data.cover?.src}`],
    datePublished: `${data?.createdAt}`,
    keywords: data?.tags?.map(tag => `${tag.title}`),
    author: [
      {
        '@type': 'Person',
        name: data.author?.name,
        image: [`${data?.author?.avatar?.src}`],
      },
    ],
  };

  return (
    <>
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </Head>
      <Wraper>
        <Container>
          <Row>
            <Col xs={12}>
              <Header>
                <span>Artykuł</span>
              </Header>
            </Col>
            <Col xs={12} style={{ marginBottom: '3rem' }}>
              <ArticleFull data={data} isLoading={isLoading} />
            </Col>
          </Row>
        </Container>
      </Wraper>
    </>
  );
}
