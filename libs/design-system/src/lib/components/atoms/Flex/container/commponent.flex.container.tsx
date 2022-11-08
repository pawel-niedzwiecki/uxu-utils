import React, { FC } from 'react';
import { ComponentStyle } from './commponent.flex.container.style';

export type Props = {
  full?: boolean;
};

export const Container: FC<Props> = ({ ...arg }, props) => (
  <ComponentStyle full={arg.full} {...props}>
    {props.children}
  </ComponentStyle>
);
