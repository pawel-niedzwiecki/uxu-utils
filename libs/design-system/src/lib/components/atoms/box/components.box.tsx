import React from 'react';
import type {Props} from './props'
import {ComponentBox} from './components.box.style'

export const Box: Props = ({children, ...args}, props) => <ComponentBox {...props} {...args}>{children}</ComponentBox>
