import {system} from './core';
import {ObjectMapType} from "@uxu/types";

export type VectorProps = {
  fill?: string | ObjectMapType<string>;
}

export type ColorConfig = typeof configs;

const configs = {
  fill: {
    property: 'fill',
    scale: 'colors',
    variable: {prefix: 'color'}
  }
} as const;


export const listensPropsVector = system(configs);
