import styled, { css } from 'styled-components';

export const HeaderStatic = styled.header`
  ${({ theme: { borders, motions } }) => css`
    width: 100%;
    display: block;
    position: relative;
    border-bottom: ${borders?.default};
    background-color: var(--uxu-color-primary-background);
  `}
`;

export const HeaderScroll = styled.header`
  ${({ theme: { borders, motions } }) => css`
    left: 0;
    top: -43px;
    width: 100%;
    display: block;
    position: fixed;
    z-index: 999999;
    backdrop-filter: blur(1rem);
    transition: all 0.4s ease 0s;
    border-bottom: 0.1rem solid var(--uxu-color-primary-accent3);
    background-color: rgba(var(--uxu-color-primary-background-rgba), 0.5);
    border-bottom: ${borders?.default};
  `}
`;
