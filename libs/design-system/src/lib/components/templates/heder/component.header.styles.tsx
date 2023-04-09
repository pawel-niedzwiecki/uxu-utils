import styled, { css } from 'styled-components';


type HeaderComponentProps = {
  hiddeMenu: boolean
}
export const HeaderComponent = styled.header<HeaderComponentProps>`
  ${({ theme: { borders, motions }, hiddeMenu }) => css`
    top: ${hiddeMenu ? '-260px' : '0'};
    left: 0;
    width: 100%;
    display: block;
    position: fixed;
    z-index: 999999;
    backdrop-filter: blur(1rem);
    transition: all ${motions?.slowly};
    border-bottom: ${borders?.default};
    background-color: rgba(var(--uxu-color-primary-background-rgba), 0.5);
  `}
`;


type HeaderBoxProps = {
  alert: boolean
}

export const HeaderBox = styled.div<HeaderBoxProps>`
  ${({ theme: { spaces, fontSizes, breakpoints }, alert }) => css`
    z-index: 0;
    width: 100%;
    height: ${alert ? '258px' : '155px'};
    display: block;

    @media all and (min-width: ${breakpoints.s}px) {
      height: ${alert ? '209px' : '108px'};
    }
  `}
`;
