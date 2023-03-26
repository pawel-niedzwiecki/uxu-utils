import styled, { css } from 'styled-components';
import { SpecialProps } from './component.dummyIMG.props';
import { listensPropsBorder } from './../../../utils';

export const Wrapper = styled.div<SpecialProps>`
  ${({ height, width }) => css`
    display: flex;
    width: ${width};
    height: ${height};
    align-items: center;
    justify-content: center;
    background: var(--uxu-color-primary-accent2);
    ${listensPropsBorder};
  `};
`;
