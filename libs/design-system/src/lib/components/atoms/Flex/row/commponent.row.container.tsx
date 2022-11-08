import React, { FC } from 'react';
import { RowStyle } from './commponent.row.container.style';

export type Props = {};

export const Row: FC<Props> = ({}, props) => {
  return <RowStyle {...props}>{props.children}</RowStyle>;
};
