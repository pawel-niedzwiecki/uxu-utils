import { createGlobalStyle, css } from 'styled-components';
import { variables } from './variables';
import { resetCss } from './reset';

export const GlobalStyle = createGlobalStyle`
  ${variables}
  ${resetCss}
`;
