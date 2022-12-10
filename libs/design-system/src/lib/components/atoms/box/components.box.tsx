import React from 'react';
import {ComponentBox} from './components.box.style'
import type {ComponentsBoxProps} from './components.box.props'

export const Box: ComponentsBoxProps = ({children, ...args}, props) => <ComponentBox {...props} {...args}>{children}</ComponentBox>
