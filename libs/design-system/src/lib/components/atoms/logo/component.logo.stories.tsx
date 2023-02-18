import * as React from 'react';
import {Box, Logo as L, SectionStoryBook} from './../../../components';



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
      control: {type: 'select'},
    },
    width: {label: {control: 'text'}},
    type: {
      options: ['uxu', 'polskiDev', 'wTrasie'],
      control: {type: 'select'},
    },
  },
};


const Template = (args: Args) => (
  <SectionStoryBook title="Brand system" description="All logos, belongs to products usues to UXU">
    <Box
      fontSize='fs1'
      padding='big'
      fontWeight='bold'
      width='100%'
      paddingBottom="default"
      paddingTop="default"
      paddingRight="default"
      paddingLeft="default"
      borderRadius='default'
      backgroundColor='success.default'
      style={{justifyContent: 'center', display: 'flex'}}
    >
      <L {...args} />
    </Box>
  </SectionStoryBook>

);

export const Logo = Template.bind({});
// @ts-ignore
Logo.args = args;
