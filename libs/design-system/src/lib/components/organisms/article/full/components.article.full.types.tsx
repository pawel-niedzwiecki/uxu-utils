import { FC } from 'react';
import type { FunctionComponentDiv } from './../../../../utils';

export type ArticleDataType = {
  content: {
    lead: string;
    type: string;
    title: string;
    createdAt: Date;
    cover: { src?: string; alt?: string } | null;
    author: {
      name: string;
      avatar?: { src?: string | null; alt?: string | null };
    };
    tags?: { title: string; slug: string }[];
    stats?: { ratings: number; comments: number; views: number };
    contentparts?: { __typename: string; content?: string; src?: string | null; alt?: string | null }[];
  };
};

export type SpecialProps = {
  isLoading: boolean;
  data: ArticleDataType;
};

export type Props = FC<FunctionComponentDiv & SpecialProps>;
