import React, {FC} from 'react';

type ClassName = string;
type Children = React.ReactNode;
type Style = React.CSSProperties;
type onClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

export type FunctionComponentDiv = {
  style?: Style;
  onClick?: onClick;
  children?: Children;
  className?: ClassName;
};
