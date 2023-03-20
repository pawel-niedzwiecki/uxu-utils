import {alphas} from './alphas';
import {breakpoints} from './breakpoints';
import {colors} from './colors';
import {focuses} from './focuses';
import {fontSizes} from './fontSizes';
import {fontWeights} from './fontWeights';
import {lineHeights} from './lineHeights';
import {motions} from './motions';
import {radiis} from './radiis';
import {shadows} from './shadows';
import {spaces} from './spaces';
import {flexs} from './flexs';
import {contents} from './contents';
import {borders} from "./borders";

export type Theme = typeof theme;

export const theme = {
  alphas,
  breakpoints,
  colors,
  focuses,
  fontSizes,
  fontWeights,
  lineHeights,
  motions,
  radiis,
  shadows,
  spaces,
  flexs,
  contents,
  borders
} as const;
