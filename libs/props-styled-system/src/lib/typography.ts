import {system} from './core';
import {PropType} from "./types";

export type TypographyProps = {
  fontFamily?: PropType;
  fontSize?: PropType;
  fontWeight?: PropType;
  lineHeight?: PropType;
  letterSpacing?: PropType;
  textAlign?: PropType;
  fontStyle?: PropType;
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
