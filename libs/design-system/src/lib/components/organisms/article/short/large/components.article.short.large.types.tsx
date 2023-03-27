import { FC } from 'react';
import type { FunctionComponentDiv } from './../../../../../utils';


export type SpecialProps = {
  data: {
    isLoading: boolean
    content: {
      cover: { src: string | null, alt: string | null } | null
      author: {
        name: string
        avatar: { src: string | null, alt: string | null } | null
      } | null
      tags: { title: string, slug: string }[] | null
      stats: { ratings: number, comments: number, views: number } | null
      title: string
      slug: string
      createdAt: Date

    } | null
  }
}


export type Props = FC<FunctionComponentDiv & SpecialProps>;
