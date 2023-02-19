import {FC} from 'react';
import type {FunctionComponentDiv} from './../../../utils';
import type {Tab} from './../../organisms/tabs/component.tabs.types';
import type {ResData, CallBack, Query} from './../../organisms/form/search/component.search.types';

export type SpecialProps = {
  tabs: Tab[],
  callBack?: CallBack
  res?: {
    data: ResData
    query: Query
  }
}


export type Props = FC<FunctionComponentDiv & SpecialProps>;
