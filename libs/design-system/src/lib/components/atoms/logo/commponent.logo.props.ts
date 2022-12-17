import {FunctionComponentDiv, MarkAsNumberNotRequired} from '@uxu/types';
import {SizeProps, VectorProps} from '@uxu/props-styled-system'
import React, {FC} from 'react';



export type Props = FC<FunctionComponentDiv & SizeProps & VectorProps & {type: string}>
