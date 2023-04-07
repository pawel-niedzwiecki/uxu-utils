import styled, { css } from 'styled-components';

export const Wraper = styled.section`

`;


export const Header = styled.span`
  ${({ theme: { spaces } }) => css`
    display: block;
    font-size: 1.2rem;
    font-weight: bold;
    margin: ${spaces.default} 0;
  `}
`;
