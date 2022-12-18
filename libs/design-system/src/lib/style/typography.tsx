import { css } from 'styled-components';

export const typography = css`
  ${({ theme: { fontSizes } }) => css`
    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    b,
    a,
    span,
    strong {
      font-family: 'Montserrat', sans-serif;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    b,
    strong {
      font-weight: bold;
    }

    h1 {
      font-size: ${fontSizes.fs1};
    }

    h2 {
      font-size: ${fontSizes.fs2};
    }

    h3 {
      font-size: ${fontSizes.fs3};
    }

    h4 {
      font-size: ${fontSizes.fs4};
    }

    h5 {
      font-size: ${fontSizes.fs5};
    }

    h6 {
      font-size: ${fontSizes.fs6};
    }
  `}
`;
