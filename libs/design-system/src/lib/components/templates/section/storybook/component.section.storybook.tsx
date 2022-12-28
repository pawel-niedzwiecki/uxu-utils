import React from 'react';
import {Col, Container, Row, Box} from 'components';
import type {Props} from './component.section.storybook.props';
import {Section, titleStyle, descriptionStyle} from './component.section.storybook.style';



export const SectionStoryBook: Props = ({children, title, description}, props) => (
  <Section {...props}>
    <Container>
      <Row>
        <Col xs={12}>
          <Box {...titleStyle}>
            {title}
          </Box>
          <Box {...descriptionStyle}>
            {description}
          </Box>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>{children}</Col>
      </Row>
    </Container>
  </Section>
)
