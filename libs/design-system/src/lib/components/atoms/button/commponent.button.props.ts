import {FunctionComponentDiv} from '@uxu/types';
import {SizeProps, VectorProps} from '@uxu/props-styled-system'
import {FC} from 'react';

export type SpecialProps = {
  size?: "small" | "large"
};

export type Props = FC<FunctionComponentDiv & SizeProps & VectorProps & SpecialProps>
