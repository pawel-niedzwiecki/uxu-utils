import type { ComponentWithProps } from './../../../../utils';

export type Res = { title: string; slug: string; excerpt?: string; cover: string };
export type ResData = Res[];
export type CallBack = (query: string) => void;
export type Query = string;

export type OtherProps = {
  callBack?: CallBack;
  res?: {
    data: ResData;
    query: Query;
  };
};

export type ComponentType = ComponentWithProps<OtherProps>;
