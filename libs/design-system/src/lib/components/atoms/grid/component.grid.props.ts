import { FC } from 'react';
import type { FunctionComponentDiv } from './../../../utils';
import { BorderProps, ColorProps, GridProps, ShadowProps, SizeProps } from './../../../utils';


export type SpecialProps = {
  container?: boolean;
};

export type Props = FC<FunctionComponentDiv & ColorProps & GridProps & BorderProps & ShadowProps & SizeProps & SpecialProps>;

