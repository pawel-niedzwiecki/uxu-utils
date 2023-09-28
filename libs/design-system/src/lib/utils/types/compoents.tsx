import React, { PropsWithChildren, ForwardRefExoticComponent, RefAttributes, CSSProperties } from 'react';

interface AdditionalProps {
  className?: string;
  style?: CSSProperties;
}

export type ComponentRefWithProps<T, U = HTMLElement> = ForwardRefExoticComponent<PropsWithChildren<T & AdditionalProps> & RefAttributes<U>>;
