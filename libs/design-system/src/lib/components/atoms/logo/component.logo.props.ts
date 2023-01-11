import { FC } from 'react';
import type { FunctionComponentDiv } from 'utils';
import { SizeProps, VectorProps } from 'utils';


export type SpecialProps = {
  type: string
};

export type Props = FC<FunctionComponentDiv & SizeProps & VectorProps & SpecialProps>
