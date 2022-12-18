import {Logo as L} from './index';
import {Box} from 'components/atoms/box'
import {Container, Row, Col} from "components/atoms/flex";
import * as React from 'react';

type Args = typeof args;

const args = {
  fill: 'primary.foreground',
  width: '30rem',
  type: 'uxu',

} as const;


export default {
  title: 'Styleguide /Logo',
  component: L,
  argTypes: {
    fill: {
      options: ['primary.foreground', 'primary.background', 'error.default', 'success.default', 'warning.default', 'violet.default', 'cyan.default', 'highlight.yellow', 'highlight.pink'],
      control: {type: 'select'}
    },
    width: {label: {control: 'text'}},
    type: {
      options: ['uxu', 'polskiDev', 'wTrasie'],
      control: {type: 'select'}
    },
  },
};


const Template = (args: Args) => (
  <Container>
    <Row>
      <Col xs={12}>
        <Box
          fontSize="fs1"
          paddingTop="big"
          fontWeight="bold"
          width="100%"
          color="primary.foreground"
          textAlign='center'
        >
          Brand system
        </Box>
        <Box
          paddingTop="big"
          width="100%"
          color="primary.accent4"
          paddingBottom='big'
          textAlign='center'
        >
          All logos, belongs to products usues to UXU
        </Box>
      </Col>
      <Col xs={12}>
        <Box
          fontSize="fs1"
          padding="big"
          fontWeight="bold"
          width="100%"
          borderRadius="default"
          backgroundColor="success.default"
          style={{justifyContent: 'center', display: 'flex'}}
        >
          <L {...args}/>
        </Box>
      </Col>
    </Row>
  </Container>
)

export const Logo = Template.bind({});
// @ts-ignore
Logo.args = args;
