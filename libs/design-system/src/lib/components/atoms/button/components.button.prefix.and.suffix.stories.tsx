import * as React from 'react';
import {ArrowUp} from "react-feather";
import {Button, Box, SectionStoryBook} from "components";


type Args = typeof args;

const args = {
  prefix: true,
  suffix: true,
  children: "children"
} as const;


export default {
  title: 'Components /Button',
  component: Button,
  argTypes: {
    prefix: {control: 'boolean'},
    suffix: {control: 'boolean'},
    children: {label: {control: 'text'}},
  },
};


const Template = (args: Args) => (
  <SectionStoryBook title="Button prefix and suffix" description="This component is used in all products UXU. In this story you can look, how you can change prefix and suffix for button">
    <Box marginRight="auto" marginLeft="auto" width="max-content">
      <Button prefix={args.prefix ? <ArrowUp/> : undefined} suffix={args.suffix ? <ArrowUp/> : undefined}>{args.children}</Button>
    </Box>
  </SectionStoryBook>
)

export const PrefixAndSuffix = Template.bind({});
// @ts-ignore
PrefixAndSuffix.args = args;
