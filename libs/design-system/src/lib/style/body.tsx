import { css } from 'styled-components';

export const body = css`

  html {
    --uxu-color-body-background: var(--uxu-color-primary-background);
  }

  html[data-theme="light"] {
    --uxu-color-body-background: var(--uxu-color-primary-accent2);
  }

  body {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -webkit-overflow-scrolling: touch;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-style: normal;
    font-size: var(--uxu-font-size-default);
    font-weight: var(--uxu-font-weight-regular);
    line-height: var(--uxu-line-height-default);
    color: var(--uxu-color-primary-foreground);
    background-color: var(--uxu-color-body-background);
    font-family: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', 'Liberation Sans',
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  }
`;
