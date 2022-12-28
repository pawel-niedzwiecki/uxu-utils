import {system} from './core';
import {PropType} from "./types";

export type ColorProps = {
  color?: PropType;
  backgroundColor?: PropType;
  opacity?: PropType;
  mixBlendMode?: PropType;
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
