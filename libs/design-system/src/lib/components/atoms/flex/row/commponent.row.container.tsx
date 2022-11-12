import { RowStyle } from './commponent.row.container.style';
import { FunctionComponentDiv } from '@uxu/types';
import React from 'react';

export const Row: React.FC<FunctionComponentDiv> = ({ children }, props) => <RowStyle {...props}>{children}</RowStyle>;
