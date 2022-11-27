import { css } from 'styled-components';

export const variables = css`
    ${({ theme: { colors } }) => css`
      :root {
        @media (prefers-color-scheme: dark) {
          --uxu-primary-background: ${colors.primary.background.dark};
          --uxu-primary-foreground: ${colors.primary.foreground.dark};
          --uxu-primary-accents-1: ${colors.primary.accent1.dark};
          --uxu-primary-accents-2: ${colors.primary.accent2.dark};
          --uxu-primary-accents-3: ${colors.primary.accent3.dark};
          --uxu-primary-accents-4: ${colors.primary.accent4.dark};
          --uxu-primary-accents-5: ${colors.primary.accent5.dark};
          --uxu-primary-accents-6: ${colors.primary.accent6.dark};
          --uxu-primary-accents-7: ${colors.primary.accent7.dark};
          --uxu-primary-accents-8: ${colors.primary.accent8.dark};

          --uxu-error-lighter: ${colors.error.lighter.dark};
          --uxu-error-light: ${colors.error.light.dark};
          --uxu-error-error: ${colors.error.default.dark};
          --uxu-error-dark: ${colors.error.dark.dark};

          --uxu-success-lighter: ${colors.success.lighter.dark};
          --uxu-success-light: ${colors.success.light.dark};
          --uxu-success-success: ${colors.success.default.dark};
          --uxu-success-dark: ${colors.success.dark.dark};

          --uxu-warning-lighter: ${colors.warning.lighter.dark};
          --uxu-warning-light: ${colors.warning.light.dark};
          --uxu-warning-warning: ${colors.warning.default.dark};
          --uxu-warning-dark: ${colors.warning.dark.dark};

          --uxu-violet-lighter: ${colors.violet.lighter.dark};
          --uxu-violet-light: ${colors.violet.light.dark};
          --uxu-violet-violet: ${colors.violet.default.dark};
          --uxu-violet-dark: ${colors.violet.dark.dark};

          --uxu-cyan-lighter: ${colors.cyan.lighter.dark};
          --uxu-cyan-light: ${colors.cyan.light.dark};
          --uxu-cyan-cyan: ${colors.cyan.default.dark};
          --uxu-cyan-dark: ${colors.cyan.dark.dark};

          --uxu-highlight-lighter: ${colors.highlight.purple.dark};
          --uxu-highlight-light: ${colors.highlight.magenta.dark};
          --uxu-highlight-highlight: ${colors.highlight.pink.dark};
          --uxu-highlight-dark: ${colors.highlight.yellow.dark};
        }
        @media (prefers-color-scheme: light) {
          --uxu-primary-background: ${colors.primary.background.light};
          --uxu-primary-foreground: ${colors.primary.foreground.light};
          --uxu-primary-accents-1: ${colors.primary.accent1.light};
          --uxu-primary-accents-2: ${colors.primary.accent2.light};
          --uxu-primary-accents-3: ${colors.primary.accent3.light};
          --uxu-primary-accents-4: ${colors.primary.accent4.light};
          --uxu-primary-accents-5: ${colors.primary.accent5.light};
          --uxu-primary-accents-6: ${colors.primary.accent6.light};
          --uxu-primary-accents-7: ${colors.primary.accent7.light};
          --uxu-primary-accents-8: ${colors.primary.accent8.light};

          --uxu-error-lighter: ${colors.error.lighter.light};
          --uxu-error-light: ${colors.error.light.light};
          --uxu-error-error: ${colors.error.default.light};
          --uxu-error-dark: ${colors.error.dark.light};

          --uxu-success-lighter: ${colors.success.lighter.light};
          --uxu-success-light: ${colors.success.light.light};
          --uxu-success-success: ${colors.success.default.light};
          --uxu-success-dark: ${colors.success.dark.light};

          --uxu-warning-lighter: ${colors.warning.lighter.light};
          --uxu-warning-light: ${colors.warning.light.light};
          --uxu-warning-warning: ${colors.warning.default.light};
          --uxu-warning-dark: ${colors.warning.dark.light};

          --uxu-violet-lighter: ${colors.violet.lighter.light};
          --uxu-violet-light: ${colors.violet.light.light};
          --uxu-violet-violet: ${colors.violet.default.light};
          --uxu-violet-dark: ${colors.violet.dark.light};

          --uxu-cyan-lighter: ${colors.cyan.lighter.light};
          --uxu-cyan-light: ${colors.cyan.light.light};
          --uxu-cyan-cyan: ${colors.cyan.default.light};
          --uxu-cyan-dark: ${colors.cyan.dark.light};

          --uxu-highlight-lighter: ${colors.highlight.purple.light};
          --uxu-highlight-light: ${colors.highlight.magenta.light};
          --uxu-highlight-pink: ${colors.highlight.pink.light};
          --uxu-highlight-dark: ${colors.highlight.yellow.light};
        }
      }
    `}}

`;
