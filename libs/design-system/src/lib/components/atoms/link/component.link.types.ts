import type { ComponentWithProps } from './../../../utils';
import { DisplayProps, SizeProps, SpaceProps } from './../../../utils';
import type { OtherProps as ButtonProps } from './../../../components/atoms/button/component.button.types';

export type OtherProps = {
  href: string;
  title: string;
} & ButtonProps;

export type ComponentLinkType = ComponentWithProps<SizeProps & OtherProps & DisplayProps & SpaceProps>;
