import styled, {css} from 'styled-components';
import {listensPropsSize, listensPropsVector, listensPropsSpace} from '@uxu/props-styled-system'


export const Wrapper = styled.div`
  ${({theme: {colors}}) => css`
    position: relative;
    ${listensPropsSize};
    ${listensPropsSpace};

    svg {
      display: block;
      path {
        ${listensPropsVector}
      }
    }`
  }`
