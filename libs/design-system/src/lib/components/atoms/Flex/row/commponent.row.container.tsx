import React, { FC } from 'react';
import { RowStyle } from './commponent.row.container.style';

type Props = FC<{}>;

export const Row: Props = ({}, props) => {
  return <RowStyle {...props}>{props.children}</RowStyle>;
};
