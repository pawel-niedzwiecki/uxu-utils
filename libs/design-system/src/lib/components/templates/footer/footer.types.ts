import type { ComponentWithProps } from '../../../utils';

type FooterDataLink = {
  id: string | null;
  url: string | null;
  rel: string | null;
  target: string | null;
  title: string | null;
};

type FooterColumnData = {
  id: string | null;
  header: string | null;
  links: Array<FooterDataLink> | null;
};

export type FooterProps = {
  footerColumnDataWithHeaderAndLinks: Array<FooterColumnData> | null;
};

export type ComponentFooterWithProps = ComponentWithProps<FooterProps>;
