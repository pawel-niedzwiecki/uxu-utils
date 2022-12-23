import {Button} from './index';
import {SectionStoryBook} from "components/templates/section";
import * as React from 'react';

type Args = typeof args;

const args = {
  size: 'small',
} as const;


export default {
  title: 'Components /Button',
  component: Button,
  argTypes: {
    size: {label: {control: 'text'}},
  },
};


const Template = (args: Args) => (
  <SectionStoryBook title="button title" description="button description">
    <Button {...args}>More</Button>
  </SectionStoryBook>
)

export const Sizes = Template.bind({});
// @ts-ignore
Sizes.args = args;
