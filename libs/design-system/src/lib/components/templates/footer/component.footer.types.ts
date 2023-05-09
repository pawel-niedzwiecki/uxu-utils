import type { ComponentWithProps } from '../../../utils';

type Column = {
  id: string;
  header?: string;
  link: {
    id: string;
    url: string;
    rel?: string;
    target?: string;
    title?: string;
  }[];
}[];

export type FooterDataType = {
  columns: Column;
};

export type ComponentType = ComponentWithProps<FooterDataType>;
