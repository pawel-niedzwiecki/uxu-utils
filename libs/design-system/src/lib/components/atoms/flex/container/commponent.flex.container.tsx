import React, { FC } from 'react';
import { ContainerStyle } from './commponent.flex.container.style';

export type ContainerProps = {
  full?: boolean;
  children?: React.ReactNode;
};

export const Container: FC<ContainerProps> = ({ full = false, children }, props) => (
  <ContainerStyle full={full} {...props}>
    {children}
  </ContainerStyle>
);
