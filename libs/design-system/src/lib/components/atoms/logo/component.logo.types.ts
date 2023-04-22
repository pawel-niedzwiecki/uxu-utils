import type { ComponentWithProps } from './../../../utils';
import { SizeProps, VectorProps } from './../../../utils';

export type OtherProps = {
  type: 'wTrasie' | 'polskiDev' | 'uxu';
};

export type ComponentType = ComponentWithProps<SizeProps & VectorProps & OtherProps>;
