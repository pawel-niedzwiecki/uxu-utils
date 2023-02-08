import * as React from 'react';
import {Box, LoadingWheel, SectionStoryBook} from "./../../../../components";


type Args = typeof args;

const args = {
  size: 5,
} as const;

export default {
  title: 'Components /Loading',
  component: LoadingWheel,
  argTypes: {
    size: {control: {type: 'number', min: 1, step: 1}}
  },
};

const Template = (args: Args) => (
  <SectionStoryBook title="Loading dots" description="System animate loading is used in UXU products.">
    <Box
      width="100%"
      fontWeight="bold"
      padding="default"
      borderRadius="default"
      backgroundColor="success.default"
      style={{justifyContent: 'center', display: 'flex'}}
    >
      <LoadingWheel {...args}/>
    </Box>
  </SectionStoryBook>
);

export const Wheel = Template.bind(
  {}
);

// @ts-ignore
Wheel.args = args;
