import * as React from 'react';
import {Button} from './index';
import {Box} from 'components/atoms/box'
import {SectionStoryBook} from "components/templates/section";


type Args = typeof args;

const args = {
  variant: 'primary',
  color: 'primary',
} as const;


export default {
  title: 'Components /Button',
  component: Button,
  argTypes: {
    variant: {
      options: ["primary", "ghost", "loading", "disabled"],
      control: {type: 'select'}
    },
    color: {
      options: ["primary", "secondary", "success", "error", "warning", "violet", "cyan", "purple", "magenta", "pink", "yellow"],
      control: {type: 'select'}
    },
  },
};


const Template = (args: Args) => (
  <SectionStoryBook title="button title" description="button description">
    <Box marginRight="auto" marginLeft="auto" width="max-content">
      <Button size="small" style={{margin: '1.5rem auto'}}>small</Button>
      <Button size="default" style={{margin: '1.5rem auto'}}>default</Button>
      <Button size="large" style={{margin: '1.5rem auto'}}>large</Button>
    </Box>
  </SectionStoryBook>
)

export const Shapes = Template.bind({});
// @ts-ignore
Shapes.args = args;
