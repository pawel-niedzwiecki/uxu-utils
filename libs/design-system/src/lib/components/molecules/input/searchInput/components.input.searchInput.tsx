import React from 'react';
import { Search } from 'react-feather';
import type {Props} from './components.input.searchInput.props'
import {Wrapper, Input, Sugestions, Sugestion, ImageBox, Content, Header, Excerpt} from './components.input.searchInput.style'

export const SearchInput: Props = ({ ...args}, props) => {
  return (
    <Wrapper {...props} {...args}><Input placeholder="Szukaj..."/>
    <Sugestions>
      {new Array(10).fill(undefined).map(() => <Sugestion><ImageBox><Search size={22} color="var(--uxu-color-primary-foreground)"/></ImageBox><Content><Header>Wypadek na rondzie santockim</Header><Excerpt>#Skwierzyna, #Gorzów-Wielkopolski</Excerpt></Content></Sugestion>)}
    </Sugestions>
    </Wrapper>
  )
}

