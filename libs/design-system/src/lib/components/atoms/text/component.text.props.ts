import { FC } from 'react';
import type { FunctionComponentDiv } from './../../../utils';
import { ColorProps, SpaceProps, TypographyProps } from './../../../utils';

export type SpecialProps = {
  type: string
};

export type Props = FC<FunctionComponentDiv & TypographyProps & ColorProps & SpaceProps & SpecialProps>
