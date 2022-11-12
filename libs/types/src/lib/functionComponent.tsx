import React from 'react';

export type FunctionComponentDiv<T> = {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};
