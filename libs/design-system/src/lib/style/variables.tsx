import { css } from 'styled-components';
import { colors, fontSizes } from 'theme';

export const variables = css`
    ${({ theme: { colors, fontSizes, space } }) => css`
      :root {
        //

        // colors
        @media (prefers-color-scheme: dark) {
          // primary
          --uxu-background: ${colors.primary.background.dark};
          --uxu-foreground: ${colors.primary.foreground.dark};
          --uxu-accents-1: ${colors.primary.accent1.dark};
          --uxu-accents-2: ${colors.primary.accent2.dark};
          --uxu-accents-3: ${colors.primary.accent3.dark};
          --uxu-accents-4: ${colors.primary.accent4.dark};
          --uxu-accents-5: ${colors.primary.accent5.dark};
          --uxu-accents-6: ${colors.primary.accent6.dark};
          --uxu-accents-7: ${colors.primary.accent7.dark};
          --uxu-accents-8: ${colors.primary.accent8.dark};

          // error
          --uxu-error-lighter: ${colors.error.lighter.dark};
          --uxu-error-light: ${colors.error.light.dark};
          --uxu-error: ${colors.error.default.dark};
          --uxu-error-dark: ${colors.error.dark.dark};

          // success
          --uxu-success-lighter: ${colors.success.lighter.dark};
          --uxu-success-light: ${colors.success.light.dark};
          --uxu-success: ${colors.success.default.dark};
          --uxu-success-dark: ${colors.success.dark.dark};

          // warning
          --uxu-warning-lighter: ${colors.warning.lighter.dark};
          --uxu-warning-light: ${colors.warning.light.dark};
          --uxu-warning: ${colors.warning.default.dark};
          --uxu-warning-dark: ${colors.warning.dark.dark};

          // violet
          --uxu-violet-lighter: ${colors.violet.lighter.dark};
          --uxu-violet-light: ${colors.violet.light.dark};
          --uxu-violet: ${colors.violet.default.dark};
          --uxu-violet-dark: ${colors.violet.dark.dark};

          // cyan
          --uxu-cyan-lighter: ${colors.cyan.lighter.dark};
          --uxu-cyan-light: ${colors.cyan.light.dark};
          --uxu-cyan: ${colors.cyan.default.dark};
          --uxu-cyan-dark: ${colors.cyan.dark.dark};

          // highlight
          --uxu-highlight-lighter: ${colors.highlight.purple.dark};
          --uxu-highlight-light: ${colors.highlight.magenta.dark};
          --uxu-highlight: ${colors.cyan.highlight.pink.dark};
          --uxu-highlight-dark: ${colors.highlight.yellow.dark};
        }
        @media (prefers-color-scheme: light) {
          // primary
          --uxu-background: ${colors.primary.background.dark};
          --uxu-foreground: ${colors.primary.foreground.dark};
          --uxu-accents-1: ${colors.primary.accent1.dark};
          --uxu-accents-2: ${colors.primary.accent2.dark};
          --uxu-accents-3: ${colors.primary.accent3.dark};
          --uxu-accents-4: ${colors.primary.accent4.dark};
          --uxu-accents-5: ${colors.primary.accent5.dark};
          --uxu-accents-6: ${colors.primary.accent6.dark};
          --uxu-accents-7: ${colors.primary.accent7.dark};
          --uxu-accents-8: ${colors.primary.accent8.dark};

          // error
          --uxu-error-lighter: ${colors.error.lighter.dark};
          --uxu-error-light: ${colors.error.light.dark};
          --uxu-error: ${colors.error.default.dark};
          --uxu-error-dark: ${colors.error.dark.dark};

          // success
          --uxu-success-lighter: ${colors.success.lighter.dark};
          --uxu-success-light: ${colors.success.light.dark};
          --uxu-success: ${colors.success.default.dark};
          --uxu-success-dark: ${colors.success.dark.dark};

          // warning
          --uxu-warning-lighter: ${colors.warning.lighter.dark};
          --uxu-warning-light: ${colors.warning.light.dark};
          --uxu-warning: ${colors.warning.default.dark};
          --uxu-warning-dark: ${colors.warning.dark.dark};

          // violet
          --uxu-violet-lighter: ${colors.violet.lighter.dark};
          --uxu-violet-light: ${colors.violet.light.dark};
          --uxu-violet: ${colors.violet.default.dark};
          --uxu-violet-dark: ${colors.violet.dark.dark};

          // cyan
          --uxu-cyan-lighter: ${colors.cyan.lighter.dark};
          --uxu-cyan-light: ${colors.cyan.light.dark};
          --uxu-cyan: ${colors.cyan.default.dark};
          --uxu-cyan-dark: ${colors.cyan.dark.dark};

          // highlight
          --uxu-highlight-lighter: ${colors.highlight.purple.dark};
          --uxu-highlight-light: ${colors.highlight.magenta.dark};
          --uxu-highlight: ${colors.cyan.highlight.pink.dark};
          --uxu-highlight-dark: ${colors.highlight.yellow.dark};
        }
      }
    `}}

`;