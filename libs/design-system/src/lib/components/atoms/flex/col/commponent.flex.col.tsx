import React, { FC } from 'react';
import { Breakpoints } from 'theme';
import { ColStyle } from './commponent.flex.col.style';

export type Props<T> = {
  [P in keyof T]?: number;
};

export const Col: FC<Props<Breakpoints> & { children?: React.ReactNode }> = ({ children, ...cols }, props) => (
  <ColStyle {...props} {...cols} cols={cols}>
    {children}
  </ColStyle>
);
