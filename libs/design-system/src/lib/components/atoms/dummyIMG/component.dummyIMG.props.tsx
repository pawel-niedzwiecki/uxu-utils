import { FC } from 'react';
import type { FunctionComponentDiv } from './../../../utils';
import { BorderProps } from './../../../utils';


export type SpecialProps = {
  width?: string,
  height?: string,
}

export type Props = FC<FunctionComponentDiv & BorderProps & SpecialProps>

