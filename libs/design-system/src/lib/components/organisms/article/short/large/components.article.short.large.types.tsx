import { FC } from 'react';
import type { FunctionComponentDiv } from './../../../../../utils';


export type SpecialProps = {
  data: {
    isLoading: boolean
    content: {
      cover?: { src?: string, alt?: string }
      author: {
        name: string
        avatar?: { src?: string, alt?: string }
      }
      tags?: { title: string, slug: string }[]
      stats?: { ratings: number, comments: number, views: number }
      title: string
      slug: string
      createdAt: Date
    }
  }
}


export type Props = FC<FunctionComponentDiv & SpecialProps>;
