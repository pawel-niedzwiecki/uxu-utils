import * as React from 'react';
import {Button} from './index';
import {SectionStoryBook} from "components/templates/section";


type Args = typeof args;

const args = {
  size: 'default',
  color: "yellow"
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
