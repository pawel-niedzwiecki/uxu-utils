import React, { FC, PropsWithChildren, PropsWithRef } from 'react';

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

export type OtherProps = {
  className?: string;
  style?: object;
};

export type ComponentRefWithProps<T> = FC<PropsWithRef<PropsWithChildren & OtherProps & T>>;

export type ComponentWithProps<T> = FC<PropsWithChildren & OtherProps & T>;
