import {Col, Container, Row} from './index';
import {Box} from 'components/atoms/box'
import * as React from 'react';

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
  <Container full={args.full}>
    <Row>
      {new Array(8).fill(null).map((_, index) => (
        <Col
          xs={args.xs}
          s={args.s}
          m={args.m}
          l={args.l}
          xl={args.xl}
          key={index}
          color={{xs: 'highlight.pink', l: 'success.dark'}}

        >
          <Box marginTop="default" marginBottom="default" padding="small" textAlign="center" backgroundColor="primary.background" color="primary.foreground">COL {index + 1}</Box>
        </Col>
      ))}
    </Row>
  </Container>
)

export const Flex = Template.bind({});
// @ts-ignore
Flex.args = args;
