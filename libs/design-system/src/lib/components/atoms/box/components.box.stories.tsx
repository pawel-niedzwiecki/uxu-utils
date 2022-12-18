import * as React from 'react';
import {Box as B} from './components.box';
import {Container, Row, Col} from "components/atoms/flex";

type Args = typeof args;

const args = {
  color: 'primary.foreground',
  backgroundColor: 'success.default',
  padding: 'big',
  fontSize: 'fs3',
  fontWeight: 'bold',
  textAlign: 'center',
  width: '50rem',
  height: 'auto',
  marginLeft: "auto",
  marginRight: 'auto',
  borderRadius: 'default'
} as const;

export default {
  title: 'Styleguide /Box',
  component: B,
  argTypes: {
    color: {
      options: ['primary.foreground', 'primary.accent1', 'primary.accent2', 'primary.accent3', 'primary.accent4', 'primary.accent5', 'primary.accent6'],
      control: {type: 'select'}
    },
    backgroundColor: {
      options: ['primary.background', 'primary.accent1', 'primary.accent2', 'primary.accent3', 'primary.accent4', 'primary.accent5', 'primary.accent6'],
      control: {type: 'select'}
    },
    padding: {
      options: ['without', 'small', 'default', 'big'],
      control: {type: 'select'}
    },
    textAlign: {label: {control: 'text'}},
    width: {label: {control: 'text'}},
    height: {label: {control: 'text'}},
    marginLeft: {label: {control: 'text'}},
    marginRight: {label: {control: 'text'}},
    borderRadius: {label: {control: 'text'}},
    fontWeight: {label: {control: 'text'}},
  },
};

const Template = (args: Args) => (
  <Container>
    <Row>
      <Col xs={12}>
        <B
          fontSize="fs1"
          paddingTop="big"
          fontWeight="bold"
          width="100%"
          color="primary.foreground"
          textAlign='center'
        >
          Box system
        </B>
        <B
          paddingTop="big"
          width="100%"
          color="primary.accent4"
          paddingBottom='big'
          textAlign='center'
        >
          This box system generate div with all props for styles
        </B>
      </Col>
      <Col xs={12} style={{display: 'flex'}}>
        <B
          {...args}
        >
          BOX
        </B>
      </Col>
    </Row>
  </Container>

);

export const Box = Template.bind({});

// @ts-ignore
Box.args = args;
