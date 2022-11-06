import { createGlobalStyle, css } from 'styled-components';
import { variables } from './variables';
import { resetCss } from './reset';
import { body } from './body';

export const GlobalStyle = createGlobalStyle`
  ${variables};
  ${resetCss};
  ${body};
`;
