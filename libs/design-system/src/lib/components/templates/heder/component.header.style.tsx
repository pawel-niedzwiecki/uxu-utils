import styled, {css} from 'styled-components';
import {motions} from "../../../theme";


type HeaderComponentProps  = {
  smallMenu: boolean
}
export const HeaderComponent = styled.header<HeaderComponentProps>`
  ${({theme: {borders, motions}, smallMenu}) => css`
    top: ${smallMenu ? "-160px" : "0"};
    left: 0;
    width: 100%;
    display: block;
    position: fixed;
    backdrop-filter: blur(3rem);
    transition: all ${motions.slowly};
    border-bottom: ${borders.default};
  `}
`;


export const HeaderBox = styled.div`
  width: 100%;
  display: flex;
  position: relative;

  @media all and (min-width: 768px){
    height: 100px;
  }
`;
