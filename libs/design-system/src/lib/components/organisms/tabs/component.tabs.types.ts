import type { ComponentWithProps } from './../../../utils';

export type Tab = { title: string; value: string; icon?: JSX.Element; active?: boolean };

export type OtherProps = {
  tabs: Tab[];
};

export type ComponentTabsType = ComponentWithProps<OtherProps>;
