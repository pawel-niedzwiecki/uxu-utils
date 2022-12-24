import * as React from 'react';
import {SearchInput} from './components.input.searchInput';
import {Box} from 'components/atoms/box'
import {SectionStoryBook} from "components/templates/section";
import {Container, Row, Col} from "components/atoms/flex";

type Args = typeof args;

const args = {
  borderRadius: 'default'
} as const;

export default {
  title: 'Components /Input',
  component: SearchInput,
  argTypes: {
    borderRadius: {label: {control: 'text'}},
  },
};

const Template = (args: Args) => (
  <SectionStoryBook title="Input search" description="This component is used in all products UXU. In this story you can look, how works input for search">
    <SearchInput/>
  </SectionStoryBook>

);

export const Search = Template.bind({});

// @ts-ignore
Search.args = args;
