export type Borders = typeof borders;

export const borders = {
  transparent: `0.1rem solid transparent;`,
  default: `0.1rem solid var(--uxu-color-primary-accent3);`,
  active: `0.1rem solid var(--uxu-color-primary-accent5);`,
  primarySecondary: `0.1rem solid var(--uxu-color-primary-accent2);`,
  primaryForeground: `0.1rem solid var(--uxu-color-primary-foreground);`,
  primaryBackground: `0.1rem solid var(--uxu-color-primary-background);`,
  successDefault: `0.1rem solid var(--uxu-color-success-default);`,
  errorDefault: `0.1rem solid var(--uxu-color-error-default);`,
  warningDefault: `0.1rem solid var(--uxu-color-warning-default);`,
  violetDefault: `0.1rem solid var(--uxu-color-violet-default);`,
  cyanDefault: `0.1rem solid var(--uxu-color-cyan-default);`,
  highlightPurple: `0.1rem solid var(--uxu-color-highlight-purple);`,
  highlightMagenta: `0.1rem solid var(--uxu-color-highlight-magenta);`,
  highlightPink: `0.1rem solid var(--uxu-color-highlight-pink);`,
  highlightYellow: `0.1rem solid var(--uxu-color-highlight-yellow);`,
} as const;
