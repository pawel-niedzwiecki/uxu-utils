import { breakpoints } from './breakpoints';
import { colors } from './colors';
import { focuses } from './focuses';
import { fontSizes } from './fontSizes';
import { fontWeights } from './fontWeights';
import { lineHeights } from './lineHeights';
import { motion } from './motion';
import { radii } from './radii';
import { shadows } from './shadows';
import { space } from './space';
import { grid } from './grid';
import { content } from './content';

export { breakpoints } from './breakpoints';
export { colors } from './colors';
export { focuses } from './focuses';
export { fontSizes } from './fontSizes';
export { fontWeights } from './fontWeights';
export { lineHeights } from './lineHeights';
export { motion } from './motion';
export { radii } from './radii';
export { shadows } from './shadows';
export { space } from './space';
export { grid } from './grid';
export { content } from './content';

export type Theme = typeof theme;

export const theme = {
  breakpoints,
  colors,
  focuses,
  fontSizes,
  fontWeights,
  lineHeights,
  motion,
  radii,
  shadows,
  space,
  grid,
  content,
} as const;
