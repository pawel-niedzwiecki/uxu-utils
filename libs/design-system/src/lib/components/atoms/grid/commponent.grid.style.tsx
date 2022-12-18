import styled, {css} from 'styled-components';
import {listensPropsGrid, listensPropsColor, listensPropsBorder, listensPropsShadow, listensPropsSize} from '@uxu/props-styled-system';

import {SpecialProps} from "./commponent.grid.props";

export const Wrapper = styled.div<SpecialProps>`
  ${({theme: {space, breakpoints, flex}, container}) => css`
    ${listensPropsGrid}
    ${listensPropsShadow};
    ${listensPropsColor};
    ${listensPropsBorder};
    ${listensPropsSize};
    display: ${container ? "grid" : "block"};
  `};
`;
