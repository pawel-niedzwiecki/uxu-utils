import { ColStyle } from './commponent.flex.col.style';
import {FunctionComponentDiv, MarkAsNumberNotRequired} from '@uxu/types';
import {ColorProps} from '@uxu/props-styled-system'
import { Breakpoints } from 'theme';
import React, { FC } from 'react';


export const Col: FC<FunctionComponentDiv & MarkAsNumberNotRequired<Breakpoints> & ColorProps> = ({ children, ...args }, props) => {
  return (
    <ColStyle {...props} {...args} cols={args}>
      {children}
    </ColStyle>
  );
};
