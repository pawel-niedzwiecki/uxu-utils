import React, { FC, PropsWithChildren, PropsWithRef } from 'react';

type Props = {
  className?: string;
  style?: object;
};

export type ComponentRefWithProps<T> = FC<PropsWithRef<PropsWithChildren & Props & T>>;

export type ComponentWithProps<T> = FC<PropsWithChildren & Props & T>;
