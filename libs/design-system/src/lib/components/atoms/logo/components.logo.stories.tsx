import {Logo as L} from './index';
import * as React from 'react';

type Args = typeof args;

const args = {
  fill: 'primary.foreground',
  width: '10rem',
  type: 'uxu',
} as const;

export default {
  title: 'Components /Logo',
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


const Template = (args: Args) => <L {...args}/>

export const Logo = Template.bind({});
// @ts-ignore
Logo.args = args;
