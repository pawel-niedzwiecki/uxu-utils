import {FC} from 'react';
import {Breakpoints} from 'theme';
import {FunctionComponentDiv, MarkAsNumberNotRequired} from '@uxu/types';
import {ColorProps, BorderProps, ShadowProps} from '@uxu/props-styled-system'


export type Props = FC<FunctionComponentDiv & MarkAsNumberNotRequired<Breakpoints> & ColorProps & BorderProps & ShadowProps>;
