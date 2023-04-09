import { FC } from 'react';
import type { FunctionComponentDiv } from './../../../../utils';


export type ArticleDataType = {
  content: {
    lead: string
    type: string
    title: string
    createdAt: Date
    cover: { src?: string, alt?: string }
    author: {
      name: string
      avatar?: { src?: string, alt?: string }
    }
    tags?: { title: string, slug: string }[]
    stats?: { ratings: number, comments: number, views: number }
    contentparts?: { __typename: string, content?: string, src?: string, alt?: string }[]
  }
}

export type SpecialProps = {
  isLoading: boolean
  data: ArticleDataType
}


export type Props = FC<FunctionComponentDiv & SpecialProps>;
