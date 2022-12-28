import styled, { css } from 'styled-components';
import {
  listensPropsBorder,
  listensPropsColor,
  listensPropsGrid,
  listensPropsShadow,
  listensPropsSize,
} from 'utils/styles/props-styled-system';

import { SpecialProps } from './component.grid.props';

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
