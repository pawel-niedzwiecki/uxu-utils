import { FC } from 'react';
import type { FunctionComponentDiv } from './../../../../utils';


export type Res = { title: string, slug: string, excerpt?: string, cover: string }
export type ResData = Res[];
export type CallBack = (query: string) => void
export type Query = string

export type SpecialProps = {
  callBack?: CallBack
  res?: {
    data: ResData
    query: Query
  }
}


export type Props = FC<FunctionComponentDiv & SpecialProps>;
