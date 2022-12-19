import {FC} from 'react';
import {FunctionComponentDiv} from '@uxu/types';


export type SpecialProps = {
  size: number
};

export type Props = FC<FunctionComponentDiv & SpecialProps>
