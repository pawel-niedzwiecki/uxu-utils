import styled, {css} from 'styled-components';
import {SpecialProps} from './commponent.flex.container.props';
import {listensPropsColor, listensPropsBorder} from "@uxu/props-styled-system";

export const Wrapper = styled.div<SpecialProps>`
  ${({theme: {space, content}, full}) => css`
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    padding-left: ${space.default};
    padding-right: ${space.default};
    max-width: ${full ? '100%' : content.maxWidth};
    ${listensPropsColor};
    ${listensPropsBorder};
  `}
`;
