import * as React from 'react';
import { Col, Row, Container } from './index';

export default {
  title: 'Flex',
  component: Container,
};

export const Primary = () => (
  <Container>
    <Row>
      <Col m={6} xl={4}>
        <div style={{ color: 'black', background: 'red' }}>ok</div>
      </Col>
    </Row>
  </Container>
);
