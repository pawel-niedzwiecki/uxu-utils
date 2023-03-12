import * as React from 'react';
import {GitBranch, GitHub} from 'react-feather';
import {SectionStoryBook, Header as H} from './../../../components';



type Args = typeof args;


// @ts-ignore
const args = {
  callBack: (search: string) => {
    console.log({query: search});
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
  tabs: [
    {title: 'GitLab', value: 'https://www.uxu.pl', active: true},
    {title: 'GitHub', value: () => alert('UXU'), icon: <GitHub/>, active: false},
    {title: 'Bitbucket', value: 'https://www.uxu.pl', icon: <GitBranch/>, active: false},
  ],
} as const

export default {
  title: 'Components /Header',
  component: H,
  argTypes:
    {
      borderRadius: {
        label: {
          control: 'text'
        }
      },
    },
}

const Template = (args: Args) => (
  <SectionStoryBook title={title} description={description} style={{height: "200vh", paddingTop: "10rem"}}>
    <H
      callBack={(search: string) => {
        console.log({query: search});
      }}
      res={{
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
    }}
    tabs={[
      {title: 'GitLab', value: 'https://www.uxu.pl', active: true},
      {title: 'GitHub', value: 'https://www.uxu.pl', icon: <GitHub/>, active: false},
      {title: 'Bitbucket', value: 'https://www.uxu.pl', icon: <GitBranch/>, active: false},
    ]}
    />
  </SectionStoryBook>

);

export const Header = Template.bind({});

// @ts-ignore
Header.args = args;

const title = 'Header';
const description = 'This component is used in all products UXU.';

