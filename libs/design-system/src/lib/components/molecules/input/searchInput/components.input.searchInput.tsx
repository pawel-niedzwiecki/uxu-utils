import React from 'react';
import type {Props} from './components.input.searchInput.props'
import {ComponentBox} from './components.input.searchInput.style'

export const SearchInput: Props = ({children, ...args}, props) => <ComponentBox {...props} {...args}>{children}</ComponentBox>

