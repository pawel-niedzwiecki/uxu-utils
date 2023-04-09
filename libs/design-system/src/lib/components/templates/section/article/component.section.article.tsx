import { Col, Container, Row } from '../../../atoms';
import { ArticleFull } from '../../../organisms';
import { Header, Wraper } from './component.section.article.styles';
import type { Props } from './component.section.article.type';

export function SectionArticleFull({ data, isLoading }: Props) {

  console.log(data);

  return (
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
  );
}
