import styled, { css } from 'styled-components';
import { SpecialProps } from './component.flex.container.props';
import { listensPropsBorder, listensPropsColor } from './../../../../utils';

export const Wrapper = styled.div<SpecialProps>`
  ${({theme: {spaces, contents}, full}) => css`
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    padding-left: ${spaces.default};
    padding-right: ${spaces.default};
    max-width: ${full ? '100%' : contents.maxWidth};
    ${listensPropsColor};
    ${listensPropsBorder};
  `}
`;
