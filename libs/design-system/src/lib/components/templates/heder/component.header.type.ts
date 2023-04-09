import { FC } from 'react';
import type { FunctionComponentDiv } from './../../../utils';
import type { Tab } from './../../organisms/tabs/component.tabs.types';
import type { CallBack, Query, ResData } from './../../organisms/form/search/component.search.types';

export type SpecialProps = {
  tabs: Tab[],
  callBack?: CallBack
  res?: {
    data: ResData
    query: Query
  }

  alert?: {
    tel?: string
    title: string
  }
}


export type Props = FC<FunctionComponentDiv & SpecialProps>;
