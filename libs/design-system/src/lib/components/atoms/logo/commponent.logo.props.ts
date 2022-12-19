import {FunctionComponentDiv} from '@uxu/types';
import {SizeProps, VectorProps} from '@uxu/props-styled-system'
import {FC} from 'react';

export type SpecialProps = {
  type: string
};

export type Props = FC<FunctionComponentDiv & SizeProps & VectorProps & SpecialProps>
