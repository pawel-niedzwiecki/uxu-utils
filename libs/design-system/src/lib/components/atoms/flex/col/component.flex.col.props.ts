import { FC } from 'react';
import { Breakpoints } from 'theme';
import type { FunctionComponentDiv, MarkAsNumberNotRequired } from 'utils';
import { BorderProps, ColorProps, ShadowProps } from 'utils';


export type Props = FC<FunctionComponentDiv & MarkAsNumberNotRequired<Breakpoints> & ColorProps & BorderProps & ShadowProps>;

