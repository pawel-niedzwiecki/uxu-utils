import * as React from 'react';
import {StyleSwitch as SS, SectionStoryBook, Box} from './../../../../components';


type Args = typeof args;

const args = {
  callBack: (mode: string) => {
    console.log(mode);
  },
} as const;

export default {
  title: 'Components /Input',
  component: SS,
  argTypes: {
    borderRadius: {label: {control: 'text'}},
  },
};

const Template = (args: Args) => (
  <SectionStoryBook title={title} description={description}>
    <Box border='default' padding='default' style={{ display: 'flex', justifyContent: 'center' }}>
    <SS {...args} />
    </Box>
  </SectionStoryBook>

);

export const StyleSwitch = Template.bind({});

// @ts-ignore
StyleSwitch.args = args;

const title = 'Style switch';
const description = 'This component is used in all products UXU. In this story you can look, how works style switch';
