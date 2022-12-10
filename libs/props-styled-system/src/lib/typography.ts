import {system} from './core';
import {ObjectMapType} from "@uxu/types";

export type TypographyProps = {
  gridGap?: string | ObjectMapType<string>;
  gridColumnGap?: string | ObjectMapType<string>;
  gridRowGap?: string | ObjectMapType<string>;
  gridColumn?: string | ObjectMapType<string>;
  gridRow?: string | ObjectMapType<string>;
  gridAutoFlow?: string | ObjectMapType<string>;
  gridAutoColumns?: string | ObjectMapType<string>;
  gridAutoRows?: string | ObjectMapType<string>;
  gridTemplateColumns?: string | ObjectMapType<string>;
  gridTemplateRows?: string | ObjectMapType<string>;
  gridTemplateAreas?: string | ObjectMapType<string>;
  gridArea?: string | ObjectMapType<string>;
}

export type TypographyConfig = typeof configs;

const configs = {
  fontFamily: {
    property: 'fontFamily',
    scale: 'fonts',
  },
  fontSize: {
    property: 'fontSize',
    scale: 'fontSizes',
  },
  fontWeight: {
    property: 'fontWeight',
    scale: 'fontWeights',
  },
  lineHeight: {
    property: 'lineHeight',
    scale: 'lineHeights',
  },
  letterSpacing: {
    property: 'letterSpacing',
    scale: 'letterSpacings',
  },
  textAlign: {
    property: 'textAlign',
  },
  fontStyle: {
    property: 'fontStyle',
  },
} as const;


export const listensPropsTypography = system(configs);
