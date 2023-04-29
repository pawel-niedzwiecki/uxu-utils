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

type OtherProps = FooterDataType;

export type ComponentType = ComponentWithProps<OtherProps>;
