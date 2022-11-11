import React from 'react';
import { RowStyle } from './commponent.row.container.style';

export type Props = { children?: React.ReactNode };

export const Row: React.FC<Props> = ({ children }, props) => {
  return <RowStyle {...props}>{children}</RowStyle>;
};
