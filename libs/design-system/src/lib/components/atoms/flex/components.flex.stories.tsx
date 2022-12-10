import {Col, Container, Row} from './index';
import {space} from 'theme';
import * as React from 'react';

type Args = typeof args;

const args = {
  full: true,
  xs: 1,
  s: 1,
  m: 1,
  l: 1,
  xl: 1,
} as const;

export default {
  title: 'Styleguide /Grid',
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

const Template = (args: Args) => {
  return (
    <Container full={args?.full}>
      <Row>
        {new Array(12).fill(null).map((_, index) => (
          <Col
            xs={args.xs}
            s={args.s}
            m={args.m}
            l={args.l}
            xl={args.xl}
            key={index}
            opacity="0.6"
            color={{xs: 'highlight.pink', l: 'success.dark'}}
            backgroundColor="primary.foreground"
          >
            <p>column {index + 1}</p>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export const Primary = Template.bind({});
// @ts-ignore
Primary.args = args;
