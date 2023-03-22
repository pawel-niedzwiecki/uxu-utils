import { FC } from 'react';
import type { FunctionComponentDiv } from './../../../utils';


export type SpecialProps = {
  width?: string,
  height?: string,
}

export type Props = FC<FunctionComponentDiv & SpecialProps>

