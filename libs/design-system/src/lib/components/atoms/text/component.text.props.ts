import {FC} from 'react';
import {FunctionComponentDiv} from '@uxu/types';
import {TypographyProps, ColorProps, SpaceProps} from '@uxu/props-styled-system'

export type SpecialProps = {
  type: string
};

export type Props = FC<FunctionComponentDiv & TypographyProps & ColorProps & SpaceProps & SpecialProps>
