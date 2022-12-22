import React from 'react';
import type {Props} from './components.section.storybook.props'
import {Section, titleStyle, descriptionStyle} from './components.section.storybook.style'
import {Col, Container, Row} from 'components/atoms/flex'
import {Box} from 'components/atoms/box';


export const SectionStoryBook: Props = ({children, title, description}, props) => (
  <Section {...props}>
    <Container full>
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
