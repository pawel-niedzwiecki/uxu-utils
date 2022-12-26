import * as React from 'react';
import {Box} from 'components/atoms'
import {InputSwitch} from './components.switch';
import {SectionStoryBook} from "components/templates/section";

type Args = typeof args;

const args = {
  children: "yout text"
} as const;

export default {
  title: 'Components /Input',
  component: InputSwitch,
  argTypes: {
    children: {label: {control: 'text'}},
  },
};

const Template = (args: Args) => (
  <SectionStoryBook title={title} description={description}>
    <Box border="default" padding="default" style={{display: "flex" , justifyContent: 'center'}}>
      <InputSwitch {...args} >{args.children}</InputSwitch>
    </Box>
  </SectionStoryBook>
);

export const Switch = Template.bind({});

// @ts-ignore
Switch.args = args;

const title = "Input switch";
const description = "This component is used in all products UXU.";
