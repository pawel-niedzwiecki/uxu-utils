import * as React from 'react';
import {Box, LoadingDots, SectionStoryBook} from './../../../../components';


type Args = typeof args;

const args = {
  size: 1,
} as const;

export default {
  title: 'Components /Loading',
  component: LoadingDots,
  argTypes: {
    size: {control: {type: 'number', min: 1, step: 1}},
  },
};

const Template = (args: Args) => (
  <SectionStoryBook title="Loading dots" description="System animate loading is used in UXU products.">
    <Box
      width='100%'
      fontWeight='bold'
      padding='default'
      borderRadius='default'
      backgroundColor='success.default'
      style={{justifyContent: 'center', display: 'flex'}}
    >
      <LoadingDots {...args} />
    </Box>
  </SectionStoryBook>
);

export const Dots = Template.bind(
  {},
);

// @ts-ignore
Dots.args = args;
