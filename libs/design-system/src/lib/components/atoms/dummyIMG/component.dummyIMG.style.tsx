import styled, { css } from 'styled-components';
import { SpecialProps } from './component.dummyIMG.props';

export const Wrapper = styled.div<SpecialProps>`
  ${({ theme: { radiis }, height, width }) => css`
    display: flex;
    width: ${width};
    height: ${height};
    align-items: center;
    justify-content: center;
    border-radius: ${radiis.default};
    background: var(--uxu-color-primary-accent2);
  `};
`;
