import { FC } from 'react';
import type { FunctionComponentDiv } from './../../../../utils';

export type ArticleShortDataType = {
  content: {
    id?: string;
    cover?: { src?: string; alt?: string };
    author?: {
      name?: string;
      avatar?: { src?: string; alt?: string };
    };
    tags?: { title: string; slug: string }[];
    stats?: { ratings?: number; comments?: number; views?: number };
    title?: string;
    slug?: string;
    createdAt?: Date;
  };
};

export type SpecialProps = {
  isLoading: boolean;
  data: ArticleShortDataType;
};

export type Props = FC<FunctionComponentDiv & SpecialProps>;
