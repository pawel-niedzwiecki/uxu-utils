import styled, { css } from 'styled-components';


export const Wrapper = styled.div`
  ${( {theme: {spaces, fontSizes}} ) => css`
    width: 100%;
    display: flex;
    min-height: 50vh;
    overflow: hidden;
    position: relative;
    align-items: center;
    justify-content: center;
    padding: ${spaces.large} ${spaces.default};

    span {
      font-weight: bold;
      text-align: center;
      font-size: ${fontSizes.large};
    }
  `}
}
`;
