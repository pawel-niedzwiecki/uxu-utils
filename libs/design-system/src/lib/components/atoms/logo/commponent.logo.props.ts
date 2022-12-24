import {FC} from 'react';
import {FunctionComponentDiv} from '@uxu/types';
import {SizeProps, VectorProps} from '@uxu/props-styled-system'


export type SpecialProps = {
  type: string
};

export type Props = FC<FunctionComponentDiv & SizeProps & VectorProps & SpecialProps>
