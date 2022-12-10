import * as React from 'react';
import {Box} from './components.box';

type Args = typeof args;

const args = {
  color: 'primary.foreground',
  backgroundColor: 'primary.background',
  padding: 'default',
  textAlign: 'center',
  width: '20rem',
  height: '4.5rem',
} as const;

export default {
  title: 'Components /Box',
  component: Box,
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
  },
};

const Template = (args: Args) => <Box {...args}>Component box</Box>;

export const Primary = Template.bind({});

// @ts-ignore
Primary.args = args;
