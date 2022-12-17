import {Row as ROW} from '../index';
import {Box} from 'components/atoms/box'
import * as React from 'react';


export default {
  title: 'Styleguide /Flex',
  component: ROW,
};

const Template = () => (
  <ROW>
    <Box width="100%" margin="small" padding="small" textAlign="center" backgroundColor="primary.background"
         color="primary.foreground">ROW</Box>
  </ROW>
)

export const Row = Template.bind({});
