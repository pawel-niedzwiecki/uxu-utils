import styled, {css} from 'styled-components';

export const HeaderComponent = styled.header`
  ${({theme: {spaces, borders}}) => css`
    top: 0;
    left: 0;
    width: 100%;
    display: block;
    position: fixed;
    backdrop-filter: blur(3rem);
    border-bottom: ${borders.default};
  `}
`;
