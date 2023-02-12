import { FC } from 'react';
import type { FunctionComponentDiv } from './../../../../utils';


export type SpecialProps = {
  size: number
};

export type Props = FC<FunctionComponentDiv & SpecialProps>
