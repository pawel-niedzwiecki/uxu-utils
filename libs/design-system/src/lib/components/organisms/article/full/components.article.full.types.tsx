import { FC } from 'react';
import type { FunctionComponentDiv } from './../../../../utils';
import { ContentPartPropsType } from './../../../molecules/chunks';

export type ArticleDataType = {
  lead?: string;
  type?: string;
  title?: string;
  createdAt?: Date;
  cover?: { src?: string; alt?: string; caption?: string };
  author?: {
    name?: string;
    avatar?: { src?: string; alt?: string; caption?: string };
  };
  tags?: { title?: string; slug?: string }[];
  stats?: { ratings?: number; comments?: number; views?: number };
  contentparts?: ContentPartPropsType[];
};

export type SpecialProps = {
  isLoading: boolean;
  data: ArticleDataType;
};

export type Props = FC<FunctionComponentDiv & SpecialProps>;
