import * as React from 'react';
import {Box} from 'components/atoms';
import {Link as L} from './components.link';
import {SectionStoryBook} from "components/templates";

type Args = typeof args;

const args = {
  href: "https://www.uxu.pl",
  title: "uxu",
  children: "UXU",
  variant: 'ghost',
  color: "primary",
  size: "default",
  shape: "square"
} as const;

export default {
  title: 'Components /Link',
  component: L,
  argTypes: {
    href: {label: {control: 'text'}},
    title: {label: {control: 'text'}},
    shape: {
      options: ["square", "circle"],
      control: {type: 'select'}
    },
    size: {
      options: ["small", "default", "large"],
      control: {type: 'select'}
    },
    color: {
      options: ["primary", "secondary", "success", "error", "warning", "violet", "cyan", "purple", "magenta", "pink", "yellow"],
      control: {type: 'select'}
    },
    variant: {
      options: ["primary", "shadow", "ghost", "loading", "disabled"],
      control: {type: 'select'}
    },
  },
};

const Template = (args: Args) => (
  <SectionStoryBook title={title} description={description}>
    <Box border="default" padding="default"> <L {...args}>{args.children}</L></Box>
  </SectionStoryBook>
);

export const Link = Template.bind({});

// @ts-ignore
Link.args = args;

const title = "Link system";
const description = "Link system generate link with slug or url make link for external website";

