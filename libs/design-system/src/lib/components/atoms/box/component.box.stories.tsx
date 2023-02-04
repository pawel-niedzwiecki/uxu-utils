import * as React from 'react';
import { Box as B } from './component.box';
import { SectionStoryBook } from './../../../components';


type Args = typeof args;

const args = {
  color: 'primary.foreground',
  backgroundColor: 'success.default',
  padding: 'large',
  fontSize: 'fs3',
  fontWeight: 'bold',
  textAlign: 'center',
  width: '50rem',
  height: 'auto',
  marginLeft: 'auto',
  marginRight: 'auto',
  borderRadius: 'default',
} as const;

export default {
  title: 'Styleguide /Box',
  component: B,
  argTypes: {
    color: {
      options: ['primary.foreground', 'primary.accent1', 'primary.accent2', 'primary.accent3', 'primary.accent4', 'primary.accent5', 'primary.accent6'],
      control: { type: 'select' },
    },
    backgroundColor: {
      options: ['primary.background', 'primary.accent1', 'primary.accent2', 'primary.accent3', 'primary.accent4', 'primary.accent5', 'primary.accent6'],
      control: { type: 'select' },
    },
    padding: {
      options: ['without', 'small', 'default', 'big'],
      control: { type: 'select' },
    },
    textAlign: { label: { control: 'text' } },
    width: { label: { control: 'text' } },
    height: { label: { control: 'text' } },
    marginLeft: { label: { control: 'text' } },
    marginRight: { label: { control: 'text' } },
    borderRadius: { label: { control: 'text' } },
    fontWeight: { label: { control: 'text' } },
  },
};

const Template = (args: Args) => <SectionStoryBook title={title}
                                                   description={description}><B {...args} >BOX</B></SectionStoryBook>;

export const Box = Template.bind({});

// @ts-ignore
Box.args = args;

const title = 'Box system';
const description = 'This box system generate div with all props for styles';

