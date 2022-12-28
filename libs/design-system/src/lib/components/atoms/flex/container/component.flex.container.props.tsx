import { FC } from 'react';
import type { FunctionComponentDiv } from 'utils';
import { BorderProps, ColorProps } from 'utils';


export type SpecialProps = {
  full?: boolean;
};

export type Props = FC<FunctionComponentDiv & ColorProps & BorderProps & SpecialProps>
