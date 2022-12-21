import {breakpoints} from './breakpoints';
import {colors} from './colors';
import {focuses} from './focuses';
import {fontSizes} from './fontSizes';
import {fontWeights} from './fontWeights';
import {lineHeights} from './lineHeights';
import {motions} from './motions';
import {radii} from './radii';
import {shadows} from './shadows';
import {space} from './space';
import {grid} from './grid';
import {flex} from './flex';
import {content} from './content';
import {borders} from "./borders";

export {breakpoints} from './breakpoints';
export {colors} from './colors';
export {focuses} from './focuses';
export {fontSizes} from './fontSizes';
export {fontWeights} from './fontWeights';
export {lineHeights} from './lineHeights';
export {motions} from './motions';
export {radii} from './radii';
export {shadows} from './shadows';
export {space} from './space';
export {grid} from './grid';
export {flex} from './flex';
export {content} from './content';
export {borders} from './borders';

export type Theme = typeof theme;

export const theme = {
  breakpoints,
  colors,
  focuses,
  fontSizes,
  fontWeights,
  lineHeights,
  motions,
  radii,
  shadows,
  space,
  grid,
  flex,
  content,
  borders
} as const;
