import * as React from 'react';
import {Upload} from "react-feather";
import {Button, Box, SectionStoryBook} from "components";


type Args = typeof args;

const args = {
  color: 'default',
  variant: 'primary',
  shape: "square"
} as const;


export default {
  title: 'Components /Button',
  component: Button,
  argTypes: {
    shape: {
      options: ["square", "circle"],
      control: {type: 'select'}
    },
  },
};


const Template = (args: Args) => (
  <SectionStoryBook title="Button shapes" description="This component is used in all products UXU. In this story you can look, how you can change shape for button">
    <Box marginRight="auto" marginLeft="auto" width="max-content">
      <Button {...args}><Upload/></Button>
    </Box>
  </SectionStoryBook>
)

export const Shapes = Template.bind({});
// @ts-ignore
Shapes.args = args;
