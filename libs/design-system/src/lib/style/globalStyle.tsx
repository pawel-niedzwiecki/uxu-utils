import {createGlobalStyle} from 'styled-components';
import {variables} from './variables';
import {resetCss} from './reset';
import {typography} from './typography';
import {body} from './body';

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  html {
    font-size: 62.5%;
  }

  ${variables}
  ${body}
  ${resetCss}
  ${typography}
`;
