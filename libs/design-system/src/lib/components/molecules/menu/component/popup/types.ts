import { PropsWithChildren } from 'react';

export type MenuPopupProps =  PropsWithChildren<{
  className?: string;
}>

export type Position = {
  top: string | number;
  left: string | number;
};

export type Size = {
  width: number;
  height: number;
};
