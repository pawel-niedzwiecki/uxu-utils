import * as React from 'react';
import {Link as L} from './components.link';
import {SectionStoryBook} from "components/templates/section";

type Args = typeof args;

const args = {
  href: "https://www.google.pl",
  title: "test",
} as const;

export default {
  title: 'Components /Link',
  component: L,
  argTypes: {
    href: {label: {control: 'text'}},
    title: {label: {control: 'text'}},
  },
};

const Template = (args: Args) => <L {...args}>dwdwddw</L>;

export const Link = Template.bind({});

// @ts-ignore
Link.args = args;

const title = "Box system";
const description = "This box system generate div with all props for styles";

