import styled, { css } from 'styled-components';

export const Wraper = styled.section`

`;


export const Header = styled.span`
  ${({ theme: { spaces } }) => css`
    height: 3rem;
    display: flex;
    font-size: 1.2rem;
    font-weight: bold;
    align-items: center;
    margin: ${spaces.default} 0;

    button {
      margin-left: auto;
    }
  `}
`;
