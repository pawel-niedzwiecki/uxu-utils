import {Breakpoints} from "theme";
import {ContainerStyle} from './commponent.flex.container.style';
import {FunctionComponentDiv} from '@uxu/types';
import React, {FC} from 'react';

export type ContainerProps = {
  full?: boolean;
};

export const Container: FC<FunctionComponentDiv & ContainerProps> = ({children, full = false}, props) => (
  <ContainerStyle full={full} {...props}>
    {children}
  </ContainerStyle>
);
