import {system} from './core';
import {PropType} from "./types";

export type VectorProps = {
  fill?: PropType;
}

export type VectorConfig = typeof configs;

const configs = {
  fill: {
    property: 'fill',
    scale: 'colors',
    variable: {prefix: 'color'}
  }
} as const;


export const listensPropsVector = system(configs);
