import { ThemeProvider } from 'styled-components';

export const decorators = [
  (story) => (
    <ThemeProvider theme="default">
      <Story />
    </ThemeProvider>
  ),
];
