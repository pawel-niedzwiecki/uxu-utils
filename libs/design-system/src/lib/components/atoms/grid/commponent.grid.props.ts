import {FC} from 'react';
import {FunctionComponentDiv} from '@uxu/types';
import {ColorProps, GridProps, BorderProps, ShadowProps, SizeProps} from '@uxu/props-styled-system';

export type SpecialProps = {
  container?: boolean;
};

export type Props = FC<FunctionComponentDiv & ColorProps & GridProps & BorderProps & ShadowProps & SizeProps & SpecialProps>

