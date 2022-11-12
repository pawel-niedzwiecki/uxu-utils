import { GridProps as GP } from 'styled-system';

import { Space } from 'theme';
import { BoxProps } from 'ui/Box';

export interface GridProps extends BoxProps {
  gridGap?: keyof Space;
  gridColumnGap?: keyof Space;
  gridRowGap?: keyof Space;
  gridColumn?: GP['gridColumn'];
  gridRow?: GP['gridRow'];
  gridAutoFlow?: GP['gridAutoFlow'];
  gridAutoColumns?: GP['gridAutoColumns'];
  gridAutoRows?: GP['gridAutoRows'];
  gridTemplateColumns?: GP['gridTemplateColumns'];
  gridTemplateRows?: GP['gridTemplateRows'];
  gridTemplateAreas?: GP['gridTemplateAreas'];
  gridArea?: GP['gridArea'];
}
