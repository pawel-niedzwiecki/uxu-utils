import styled, { css } from 'styled-components';


type HeaderComponentProps = {
  hiddeMenu: boolean
}
export const HeaderComponent = styled.header<HeaderComponentProps>`
  ${({ theme: { borders, motions }, hiddeMenu }) => css`
    top: ${hiddeMenu ? '-165px' : '0'};
    left: 0;
    width: 100%;
    display: block;
    position: fixed;
    z-index: 999999;
    backdrop-filter: blur(1rem);
    transition: all ${motions.slowly};
    border-bottom: ${borders.default};
    background-color: rgba(var(--uxu-color-primary-background-rgba), 0.5);
  `}
`;


export const HeaderBox = styled.div`
  z-index: 0;
  width: 100%;
  height: 155px;
  display: block;

  @media all and (min-width: 768px) {
    height: 100px;
  }
`;
