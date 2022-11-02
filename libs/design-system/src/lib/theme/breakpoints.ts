export type Breakpoints = typeof breakpoints;

export const breakpoints = {
  xs: '0px', // smartphones
  s: '768px', // tablets
  m: '1024px', // small desktop
  l: '1280px', // desktop
  xl: '1440px', // large desktop
} as const;
