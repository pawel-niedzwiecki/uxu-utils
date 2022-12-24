import React from 'react';
import {Search} from 'react-feather';
import {Button} from "components/atoms/button";
import type {Props} from './components.input.searchInput.props'
import {
  Wrapper,
  Input,
  Label,
  Sugestions,
  Sugestion,
  ImageBox,
  Content,
  Header,
  Excerpt
} from './components.input.searchInput.style'

export const SearchInput: Props = ({...args}, props) => {
  return (
    <Wrapper {...props} {...args}>
      <Label>
        <Input placeholder="Szukaj..."/>
        <Button variant="ghost" type="submit"><Search size={16}/></Button>
      </Label>
      <Sugestions>
        {new Array(10).fill(undefined).map(() => (
          <Sugestion>
            <ImageBox><Search size={16} color="var(--uxu-color-primary-foreground)"/></ImageBox>
            <Content>
              <Header>Wypadek na rondzie santockim</Header>
              <Excerpt>#Skwierzyna, #Gorzów-Wielkopolski</Excerpt>
            </Content>
          </Sugestion>
        ))}
      </Sugestions>
    </Wrapper>
  )
}

