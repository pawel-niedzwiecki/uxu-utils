import * as React from 'react';
import {SearchInput} from './components.search';
import {Box} from 'components/atoms/box'
import {SectionStoryBook} from "components/templates/section";
import {Container, Row, Col} from "components/atoms/flex";

type Args = typeof args;

const args = {
  res: {
    data: [
      {
        title: 'test',
        slug: 'article/testji',
        excerpt: 'ddwdwuygdwy',
        cover: 'https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg'
      },
      {title: 'test2', slug: 'article/testji', excerpt: '#dewuhd, #dwdwihd'}
    ],
    query: 'kupa'
  }
} as const;

export default {
  title: 'Components /Input',
  component: SearchInput,
  argTypes: {
    borderRadius: {label: {control: 'text'}},
  },
};

const Template = (args: Args) => (
  <SectionStoryBook title="Input search"
                    description="This component is used in all products UXU. In this story you can look, how works input for search">
    <SearchInput {...args}/>
  </SectionStoryBook>

);

export const Search = Template.bind({});

// @ts-ignore
Search.args = args;
