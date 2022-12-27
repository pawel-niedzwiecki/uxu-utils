import styled, {css} from 'styled-components';
import {
  listensPropsGrid,
  listensPropsColor,
  listensPropsBorder,
  listensPropsShadow,
  listensPropsSize
} from '@uxu/props-styled-system';

import {SpecialProps} from "./component.grid.props";

export const Wrapper = styled.div<SpecialProps>`
  ${({container}) => css`
    ${listensPropsGrid}
    ${listensPropsShadow};
    ${listensPropsColor};
    ${listensPropsBorder};
    ${listensPropsSize};
    display: ${container ? "grid" : "block"};
  `};
`;
