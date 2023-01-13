import styled from 'styled-components';
import { listensPropsBorder, listensPropsColor } from 'utils';

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
