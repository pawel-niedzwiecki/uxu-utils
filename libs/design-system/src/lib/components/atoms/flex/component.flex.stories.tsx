import * as React from 'react';
import {Box, SectionStoryBook, Col, Container, Row} from "./../../../components";


type Args = typeof args;

const args = {
  full: false,
  xs: 12,
  s: 12,
  m: 2,
  l: 4,
  xl: 6,
} as const;

export default {
  title: 'Styleguide /Flex',
  component: Container,
  argTypes: {
    full: {control: 'boolean'},
    xs: {control: {type: 'number', min: 1, max: 12, step: 1}},
    s: {control: {type: 'number', min: 1, max: 12, step: 1}},
    m: {control: {type: 'number', min: 1, max: 12, step: 1}},
    l: {control: {type: 'number', min: 1, max: 12, step: 1}},
    xl: {control: {type: 'number', min: 1, max: 12, step: 1}},
  },
};

const Template = (args: Args) => (
  <SectionStoryBook title="Flex system"
                    description="System grid is used in UXU products. The system uses display:flex">
    <Container
      full={args.full}
      borderRadius="default"
      border="default"
      backgroundColor="primary.accent1"
      style={{paddingBottom: "2rem"}}
    >
      <Row>
        <Col xs={12}>
          <Box textAlign="center" padding="default">CONTAINER</Box>
        </Col>
      </Row>
      <Row
        borderRadius="default"
        border="default"
        style={{paddingBottom: "2rem"}}
      >
        <Col xs={12}><Box textAlign="center" padding="default">ROW</Box></Col>
        {new Array(12).fill(null).map((_, index) => (
          <Col
            xs={args.xs}
            s={args.s}
            m={args.m}
            l={args.l}
            xl={args.xl}
            key={index}
            color="success.dark"
          >
            <Box
              margin="small"
              padding="default"
              textAlign="center"
              fontWeight="bold"
              borderRadius="default"
              color="primary.foreground"
              backgroundColor="success.default"
            >
              COL {index + 1}
            </Box>
          </Col>
        ))}
      </Row>
    </Container>
  </SectionStoryBook>
)

export const Flex = Template.bind({});
// @ts-ignore
Flex.args = args;
