import * as React from 'react';
import { GitBranch, GitHub } from 'react-feather';
import { SectionStoryBook, Header as H } from './../../../components';


type Args = typeof args;

const args = {
  tabs: [
    { title: 'GitLab', value: 'https://www.uxu.pl', active: true },
    { title: 'GitHub', value: () => alert('UXU'), icon: <GitHub />, active: false },
    { title: 'Bitbucket', value: 'https://www.uxu.pl', icon: <GitBranch />, active: false },
  ],
} as const;

export default {
  title: 'Components /Header',
  component: H,
  argTypes: {
    borderRadius: { label: { control: 'text' } },
  },
};

const Template = (args: Args) => (
  <SectionStoryBook title={title} description={description}>
    <H />
  </SectionStoryBook>

);

export const Header = Template.bind({});

// @ts-ignore
Header.args = args;

const title = 'Header';
const description = 'This component is used in all products UXU.';

