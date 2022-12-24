import * as React from 'react';
import {Button} from './index';
import {Box} from 'components/atoms/box'
import {SectionStoryBook} from "components/templates/section";


type Args = typeof args;

const args = {
  size: 'small'
} as const;

export default {
  title: 'Components /Button',
  component: Button,
  argTypes: {
    size: {
      options: ["small", "default", "large"],
      control: {type: 'select'}
    },
  },
};

const Template = (args: Args) => (
  <SectionStoryBook title="Button size" description="This component is used in all products UXU. In this story you can look, how you can change size for button">
    <Box marginRight="auto" marginLeft="auto" width="max-content">
      <Button {...args}>{args.size}</Button>
    </Box>
  </SectionStoryBook>
)

export const Sizes = Template.bind({});
// @ts-ignore
Sizes.args = args;
