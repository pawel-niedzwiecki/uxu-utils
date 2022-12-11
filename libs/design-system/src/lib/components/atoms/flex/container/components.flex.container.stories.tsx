import {Col, Container as Con, Row} from '../index';
import {Box} from 'components/atoms/box'
import * as React from 'react';

type Args = typeof args;

const args = {
  full: true,
} as const;

export default {
  title: 'Styleguide /Flex',
  component: Con,
  argTypes: {
    full: {control: 'boolean'},
  },
};

const Template = (args: Args) => (
  <Con full={args?.full}>
    <Box
      width="100%"
      margin="small"
      padding="small"
      textAlign="center"
      backgroundColor="primary.background"
      color="primary.foreground">CONTAINER</Box>
  </Con>
)

export const Container = Template.bind({});
// @ts-ignore
Container.args = args;
