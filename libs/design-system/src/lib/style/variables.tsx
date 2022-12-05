import { css } from 'styled-components';

export const variables = css`
    ${({ theme: { colors } }) => css`
      :root {
        @media (prefers-color-scheme: dark) {
          --uxu-color-primary-background: ${colors.primary.background.dark};
          --uxu-color-primary-foreground: ${colors.primary.foreground.dark};
          --uxu-color-primary-accents-1: ${colors.primary.accent1.dark};
          --uxu-color-primary-accents-2: ${colors.primary.accent2.dark};
          --uxu-color-primary-accents-3: ${colors.primary.accent3.dark};
          --uxu-color-primary-accents-4: ${colors.primary.accent4.dark};
          --uxu-color-primary-accents-5: ${colors.primary.accent5.dark};
          --uxu-color-primary-accents-6: ${colors.primary.accent6.dark};
          --uxu-color-primary-accents-7: ${colors.primary.accent7.dark};
          --uxu-color-primary-accents-8: ${colors.primary.accent8.dark};

          --uxu-color-error-lighter: ${colors.error.lighter.dark};
          --uxu-color-error-light: ${colors.error.light.dark};
          --uxu-color-error-error: ${colors.error.default.dark};
          --uxu-color-error-dark: ${colors.error.dark.dark};

          --uxu-color-success-lighter: ${colors.success.lighter.dark};
          --uxu-color-success-light: ${colors.success.light.dark};
          --uxu-color-success-success: ${colors.success.default.dark};
          --uxu-color-success-dark: ${colors.success.dark.dark};

          --uxu-color-warning-lighter: ${colors.warning.lighter.dark};
          --uxu-color-warning-light: ${colors.warning.light.dark};
          --uxu-color-warning-warning: ${colors.warning.default.dark};
          --uxu-color-warning-dark: ${colors.warning.dark.dark};

          --uxu-color-violet-lighter: ${colors.violet.lighter.dark};
          --uxu-color-violet-light: ${colors.violet.light.dark};
          --uxu-color-violet-violet: ${colors.violet.default.dark};
          --uxu-color-violet-dark: ${colors.violet.dark.dark};

          --uxu-color-cyan-lighter: ${colors.cyan.lighter.dark};
          --uxu-color-cyan-light: ${colors.cyan.light.dark};
          --uxu-color-cyan-cyan: ${colors.cyan.default.dark};
          --uxu-color-cyan-dark: ${colors.cyan.dark.dark};

          --uxu-color-highlight-lighter: ${colors.highlight.purple.dark};
          --uxu-color-highlight-light: ${colors.highlight.magenta.dark};
          --uxu-color-highlight-pink: ${colors.highlight.pink.dark};
          --uxu-color-highlight-dark: ${colors.highlight.yellow.dark};
        }
        @media (prefers-color-scheme: light) {
          --uxu-color-primary-background: ${colors.primary.background.light};
          --uxu-color-primary-foreground: ${colors.primary.foreground.light};
          --uxu-color-primary-accents-1: ${colors.primary.accent1.light};
          --uxu-color-primary-accents-2: ${colors.primary.accent2.light};
          --uxu-color-primary-accents-3: ${colors.primary.accent3.light};
          --uxu-color-primary-accents-4: ${colors.primary.accent4.light};
          --uxu-color-primary-accents-5: ${colors.primary.accent5.light};
          --uxu-color-primary-accents-6: ${colors.primary.accent6.light};
          --uxu-color-primary-accents-7: ${colors.primary.accent7.light};
          --uxu-color-primary-accents-8: ${colors.primary.accent8.light};

          --uxu-color-error-lighter: ${colors.error.lighter.light};
          --uxu-color-error-light: ${colors.error.light.light};
          --uxu-color-error-error: ${colors.error.default.light};
          --uxu-color-error-dark: ${colors.error.dark.light};

          --uxu-color-success-lighter: ${colors.success.lighter.light};
          --uxu-color-success-light: ${colors.success.light.light};
          --uxu-color-success-success: ${colors.success.default.light};
          --uxu-color-success-dark: ${colors.success.dark.light};

          --uxu-color-warning-lighter: ${colors.warning.lighter.light};
          --uxu-color-warning-light: ${colors.warning.light.light};
          --uxu-color-warning-warning: ${colors.warning.default.light};
          --uxu-color-warning-dark: ${colors.warning.dark.light};

          --uxu-color-violet-lighter: ${colors.violet.lighter.light};
          --uxu-color-violet-light: ${colors.violet.light.light};
          --uxu-color-violet-violet: ${colors.violet.default.light};
          --uxu-color-violet-dark: ${colors.violet.dark.light};

          --uxu-color-cyan-lighter: ${colors.cyan.lighter.light};
          --uxu-color-cyan-light: ${colors.cyan.light.light};
          --uxu-color-cyan-cyan: ${colors.cyan.default.light};
          --uxu-color-cyan-dark: ${colors.cyan.dark.light};

          --uxu-color-highlight-lighter: ${colors.highlight.purple.light};
          --uxu-color-highlight-light: ${colors.highlight.magenta.light};
          --uxu-color-highlight-pink: ${colors.highlight.pink.light};
          --uxu-color-highlight-dark: ${colors.highlight.yellow.light};
        }
      }
    `}}

`;
