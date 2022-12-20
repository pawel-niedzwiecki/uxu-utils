import * as React from 'react';
import {Text} from 'components/atoms/text'
import {SectionStoryBook} from './index';

type Args = typeof args;

const args = {
  title: 'Section system',
  description: 'This Section system generate section for stories in StoryBook'
} as const;

export default {
  title: 'Components /Section',
  component: SectionStoryBook,
  argTypes: {
    title: {label: {control: 'text'}},
    description: {label: {control: 'text'}},
  },
};

const Template = (args: Args) => <SectionStoryBook {...args}><Text type="h3" textAlign="center">children</Text></SectionStoryBook>;

export const StoryBook = Template.bind({});

// @ts-ignore
StoryBook.args = args;
