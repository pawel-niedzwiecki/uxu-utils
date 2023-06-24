import type { ComponentWithProps } from '../../../utils';

type ColumnLink = {
  id: string | null;
  url: string | null;
  rel: string | null;
  target: string | null;
  title: string | null;
};

type Column = Array<{
  id: string | null;
  header: string | null;
  link: Array<ColumnLink> | null;
}> | null;

export type FooterDataType = {
  columns: Column;
};

export type ComponentType = ComponentWithProps<FooterDataType>;
