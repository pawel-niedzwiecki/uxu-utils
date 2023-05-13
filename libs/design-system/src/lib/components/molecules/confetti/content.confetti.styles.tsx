import styled, { css } from 'styled-components';


export const Wrapper = styled.div`
  ${( {theme: {spaces, fontSizes}} ) => css`
    width: 100%;
    display: flex;
    overflow: hidden;
    min-height: 50vh;
    position: relative;
    align-items: center;
    justify-content: center;
    padding: 0 ${spaces.default};

    span {
      font-weight: bold;
      text-align: center;
      font-size: ${fontSizes.large};
    }
  `}
}
`;
