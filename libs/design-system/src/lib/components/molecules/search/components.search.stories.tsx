import * as React from 'react';
import {SearchInput} from './components.search';
import {Box} from 'components/atoms/box'
import {SectionStoryBook} from "components/templates/section";
import {Container, Row, Col} from "components/atoms/flex";

type Args = typeof args;

const args = {
  callBack: (search: string) => {
    console.log({query: search})
  },
  res: {
    data: [
      {
        title: 'UXU',
        slug: 'https://www.uxu.pl',
        excerpt: '#portfolio',
        cover: 'https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg'
      },

      {
        title: 'UXU',
        slug: 'https://www.uxu.pl',
        excerpt: '#portfolio',
        cover: 'https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg'
      },
    ],
    query: 'uxu'
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
  <SectionStoryBook title={title} description={description}>
    <SearchInput {...args} />
  </SectionStoryBook>

);

export const Search = Template.bind({});

// @ts-ignore
Search.args = args;

const title = "Input search";
const description = "This component is used in all products UXU. In this story you can look, how works input for search engines, you can write 'uxu'";
