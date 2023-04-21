import styled, { css } from 'styled-components';

export const HeaderComponent = styled.header`
  ${({ theme: { borders, motions } }) => css`
    width: 100%;
    display: block;
    position: relative;
    border-bottom: ${borders?.default};
    background-color: var(--uxu-color-primary-background);
  `}
`;
