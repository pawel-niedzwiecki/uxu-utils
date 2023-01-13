import { css } from 'styled-components';

export const typography = css`
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
    font-size: var(--uxu-font-size-h1);
  }

  h2 {
    font-size: var(--uxu-font-size-h2);
  }

  h3 {
    font-size: var(--uxu-font-size-h3);
  }

  h4 {
    font-size: var(--uxu-font-size-h4);
  }

  h5 {
    font-size: var(--uxu-font-size-h5);
  }

  h6 {
    font-size: var(--uxu-font-size-h6);
  }
`;
