import {FunctionComponentDiv, MarkAsNumberNotRequired} from '@uxu/types';
import {ColorProps, SpaceProps, PositionProps, ShadowProps, SizeProps, TypographyProps, BorderProps} from '@uxu/props-styled-system'
import {FC} from "react";
import {Breakpoints} from "theme";


export type Props = FC<FunctionComponentDiv & MarkAsNumberNotRequired<Breakpoints> & ColorProps & SpaceProps & PositionProps & ShadowProps & SizeProps & TypographyProps & BorderProps>
