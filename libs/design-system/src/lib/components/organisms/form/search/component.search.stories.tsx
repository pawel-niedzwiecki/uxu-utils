import * as React from 'react';
import { FormSearch, SectionStoryBook } from 'components';

type Args = typeof args;

const args = {
  callBack: (search: string) => {
    console.log({ query: search });
  },
  res: {
    data: [
      {
        title: 'UXU',
        slug: 'https://www.uxu.pl',
        excerpt: '#portfolio',
        cover: 'https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg',
      },

      {
        title: 'UXU',
        slug: 'https://www.uxu.pl',
        excerpt: '#portfolio',
        cover: 'https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg',
      },
    ],
    query: 'uxu',
  },
} as const;

export default {
  title: 'Components /Input',
  component: FormSearch,
  argTypes: {
    borderRadius: { label: { control: 'text' } },
  },
};

const Template = (args: Args) => (
  <SectionStoryBook title={title} description={description}>
    <FormSearch {...args} />
  </SectionStoryBook>

);

export const Search = Template.bind({});

// @ts-ignore
Search.args = args;

const title = 'Input search';
const description = 'This component is used in all products UXU. In this story you can look, how works input for search engines, you can write \'uxu\'';
