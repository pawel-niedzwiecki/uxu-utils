import React, { FC } from 'react';
import { ColStyle } from './commponent.col.container.style';

export type Props = {
  xs?: number; // smartphones
  s?: number; // tablets
  m?: number; // small desktop
  l?: number; // desktop
  xl?: number; // large desktop
};

export const Col: FC<Props> = ({ ...arg }, props) => <ColStyle {...props}>{props.children}</ColStyle>;
