import { FC } from 'react';
import { Breakpoints } from './../../../theme';
import type { FunctionComponentDiv, MarkAsNumberNotRequired } from './../../../utils';
import {
  BorderProps,
  ColorProps,
  DisplayProps,
  PositionProps,
  ShadowProps,
  SizeProps,
  SpaceProps,
  TypographyProps,
} from './../../../utils';


type PropsSpecial = {
  title?: string
}

export type Props = FC<FunctionComponentDiv & MarkAsNumberNotRequired<Breakpoints> & ColorProps & SpaceProps & PositionProps & ShadowProps & SizeProps & TypographyProps & BorderProps & DisplayProps & PropsSpecial>
