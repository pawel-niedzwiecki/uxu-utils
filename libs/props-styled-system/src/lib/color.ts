import {system} from './core';
import {ObjectMapType} from "@uxu/types";

export type ColorProps = {
  color?: string | ObjectMapType<string>;
  backgroundColor?: string | ObjectMapType<string>;
  opacity?: string | ObjectMapType<string>;
  mixBlendMode?: string | ObjectMapType<string>;
}

export type ColorConfig = typeof configs;

const configs = {
  color: {
    property: 'color',
    scale: 'colors',
    variable: {prefix: 'color'}
  },
  backgroundColor: {
    property: 'backgroundColor',
    scale: 'colors',
    variable: {prefix: 'color'}
  },
  opacity: {
    property: 'opacity',
  },
  mixBlendMode: {
    property: 'mixBlendMode',
  }
} as const;


export const listensPropsColor = system(configs);
