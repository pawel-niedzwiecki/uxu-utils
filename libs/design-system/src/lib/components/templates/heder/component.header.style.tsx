import styled, { css } from 'styled-components';


type HeaderComponentProps = {
  hiddeMenu: boolean
}
export const HeaderComponent = styled.header<HeaderComponentProps>`
  ${({ theme: { borders, motions }, hiddeMenu }) => css`
    top: ${hiddeMenu ? '-160px' : '0'};
    left: 0;
    width: 100%;
    display: block;
    position: fixed;
    z-index: 999999;
    backdrop-filter: blur(3rem);
    transition: all ${motions.slowly};
    border-bottom: ${borders.default};
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
