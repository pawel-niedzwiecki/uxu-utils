import {FunctionComponentDiv, MarkAsNumberNotRequired} from '@uxu/types';
import {ColorProps, ShadowProps} from '@uxu/props-styled-system'
import {Breakpoints} from 'theme';
import React, {FC} from 'react';


export type CommponentFlexColProps = FC<FunctionComponentDiv & MarkAsNumberNotRequired<Breakpoints> & ColorProps & ShadowProps>
