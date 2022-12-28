import React from 'react';
import type { Props } from './component.box.props';
import { ComponentBox } from './component.box.style';

export const Box: Props = ({children, ...args}, props) => <ComponentBox {...props} {...args}>{children}</ComponentBox>

