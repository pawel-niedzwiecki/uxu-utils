import React, { FC } from 'react';
import { ComponentStyle } from './commponent.flex.container.style';

type Props = FC<{
  full?: boolean;
}>;

export const Container: Props = ({ full }, props) => (
  <ComponentStyle full={full} {...props}>
    {props.children}
  </ComponentStyle>
);
