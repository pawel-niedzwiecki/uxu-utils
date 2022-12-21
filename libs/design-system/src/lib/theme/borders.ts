export type Borders = typeof borders;

export const borders = {
  default: `0.1rem solid var(--uxu-color-primary-accent2);`,
  active: `0.1rem solid var(--uxu-color-primary-accent5);`,
} as const;
