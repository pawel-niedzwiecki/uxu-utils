import { css } from 'styled-components';

export const body = css`
  ${({ theme: { colors, fontSizes, fontWeights, lineHeights } }) => css`
    body {
      font-style: normal;
      font-size: ${fontSizes.bases};
      line-height: ${lineHeights.bases};
      font-weight: ${fontWeights.normal};
      color: var(--uxu-foreground);
      background-color: var(--uxu-background);
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
      -webkit-overflow-scrolling: touch;
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      font-family: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', 'Liberation Sans',
        sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    }
  `}
`;
