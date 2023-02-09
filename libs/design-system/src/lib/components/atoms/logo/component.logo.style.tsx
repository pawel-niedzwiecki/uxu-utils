import styled, { css } from 'styled-components';
import { listensPropsSize, listensPropsSpace, listensPropsVector } from './../../../utils';


export const Wrapper = styled.div`
  ${({ theme: { colors } }) => css`
    position: relative;
    ${listensPropsSize};
    ${listensPropsSpace};

    svg {
      display: block;

      path {
        ${listensPropsVector}
      }
    }`
  }`;
