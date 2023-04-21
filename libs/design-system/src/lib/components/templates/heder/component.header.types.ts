import type { ComponentWithProps } from './../../../utils';
import type { Tab } from './../../organisms/tabs/component.tabs.types';
import type { CallBack, Query, ResData } from './../../organisms/form/search/component.search.types';

export type OtherProps = {
  tabs: Tab[];
  callBack?: CallBack;
  res?: {
    data: ResData;
    query: Query;
  };

  alert?: {
    tel?: string;
    title: string;
  };
};

export type ComponentType = ComponentWithProps<OtherProps>;
