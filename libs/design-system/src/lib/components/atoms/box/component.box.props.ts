import {FC} from "react";
import {Breakpoints} from "theme";
import {FunctionComponentDiv, MarkAsNumberNotRequired} from '@uxu/types';
import {
  ColorProps,
  SpaceProps,
  PositionProps,
  ShadowProps,
  SizeProps,
  TypographyProps,
  BorderProps,
  DisplayProps
} from '@uxu/props-styled-system';


export type Props = FC<FunctionComponentDiv & MarkAsNumberNotRequired<Breakpoints> & ColorProps & SpaceProps & PositionProps & ShadowProps & SizeProps & TypographyProps & BorderProps & DisplayProps>
