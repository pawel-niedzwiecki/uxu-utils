import styled, { css } from 'styled-components';
import {listensPropsColor, listensPropsBorder} from "@uxu/props-styled-system";

export const Wrapper = styled.div`
    display: flex;
    flex: 0 1 auto;
    flex-wrap: wrap;
    flex-direction: row;
    box-sizing: border-box;
    margin-left: -1.5rem;
    margin-right: -1.5rem;
    ${listensPropsColor};
    ${listensPropsBorder};
`;
