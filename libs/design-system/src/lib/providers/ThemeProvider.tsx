import { theme } from './../theme';
import { GlobalStyle } from './../style';
import { ThemeProvider as Provider } from 'styled-components';

type ThemeProviderProps = { children: JSX.Element | JSX.Element[] };

export const ThemeProvider = ({ children }: ThemeProviderProps) => (
  <Provider theme={theme}>
    <GlobalStyle />
    {children}
  </Provider>
);
