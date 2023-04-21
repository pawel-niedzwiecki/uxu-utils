import type { ComponentWithProps } from './../../../utils';
import { SizeProps } from './../../../utils';

export type OtherProps = {
  type?: string;
  prefix?: JSX.Element;
  suffix?: JSX.Element;
  shape?: string;
  size?: string;
  align?: string;
  variant?: string | undefined;
  color?: string;
  title?: string;
};

export type ComponentButtonType = ComponentWithProps<SizeProps & OtherProps>;
