import styled, { css } from 'styled-components';
import {listensPropsColor, listensPropsBorder} from "@uxu/props-styled-system";

export const Wrapper = styled.div`
  ${({ theme: { spaces } }) => css`
    display: flex;
    flex: 0 1 auto;
    flex-wrap: wrap;
    flex-direction: row;
    box-sizing: border-box;
    margin-left: ${spaces.default};
    margin-right: ${spaces.default};
    ${listensPropsColor};
    ${listensPropsBorder};
  `}
`;
