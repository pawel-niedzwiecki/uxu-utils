import { FC } from 'react';
import type { FunctionComponentDiv } from './../../../utils';
import { SizeProps } from './../../../utils';

export type SpecialProps = {
  type?: string;
  prefix?: JSX.Element,
  suffix?: JSX.Element,
  shape?: string,
  size?: string,
  align?: string,
  variant?: string | undefined,
  color?: string

  title?: string
};

export type Props = FC<FunctionComponentDiv & SizeProps & SpecialProps>
