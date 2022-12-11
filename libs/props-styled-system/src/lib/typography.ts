import {system} from './core';
import {ObjectMapType} from "@uxu/types";

export type TypographyProps = {
  fontFamily?: string | ObjectMapType<string>;
  fontSize?: string | ObjectMapType<string>;
  fontWeight?: string | ObjectMapType<string>;
  lineHeight?: string | ObjectMapType<string>;
  letterSpacing?: string | ObjectMapType<string>;
  textAlign?: string | ObjectMapType<string>;
  fontStyle?: string | ObjectMapType<string>;
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
