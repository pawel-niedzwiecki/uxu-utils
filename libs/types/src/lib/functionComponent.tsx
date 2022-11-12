import React, {FC} from 'react';

type Children = React.ReactNode;
type Style = React.CSSProperties;
type ClassName = string;
type onClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

export type FunctionComponentDiv = {
  children: Children;
  style: Style;
  className: ClassName;
  onClick: onClick;
};
