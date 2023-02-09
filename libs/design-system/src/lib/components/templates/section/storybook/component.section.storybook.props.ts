import { FC } from 'react';
import type { FunctionComponentDiv } from './../../../../utils';

export type SpecialProps = {
  title: string;
  description: string;
}

export type Props = FC<FunctionComponentDiv & SpecialProps>
