import * as React from 'react';
import {GitHub, Gitlab, GitBranch} from "react-feather";
import {SectionStoryBook, Tabs as T} from "components";


type Args = typeof args;

const args = {
  tabs: [
    {title: 'GitLab', value: '/', icon: <Gitlab/>},
    {title: 'GitHub', value: () => alert('ok'), icon: <GitHub/>},
    {title: 'Bitbucket', value: 'https://www.uxu.pl', icon: <GitBranch/>}
  ]
} as const;

export default {
  title: 'Components /Tabs',
  component: T,
  argTypes: {
    borderRadius: {label: {control: 'text'}},
  },
};

const Template = (args: Args) => (
  <SectionStoryBook title={title} description={description}>
    <T {...args} />
  </SectionStoryBook>

);

export const Tabs = Template.bind({});

// @ts-ignore
Tabs.args = args;

const title = "Tabs";
const description = "This component is used in all products UXU.";
