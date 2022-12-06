import {system} from './core';
import {ObjectMapType} from "@uxu/types";

export type ColorProps = {
  color?: string | ObjectMapType<string>;
  backgroundColor?: string | ObjectMapType<string>;
  opacity?: string | ObjectMapType<string>;
}

export type ColorConfig = typeof config;

const config = {
  color: {
    property: 'color',
    scale: 'colors',
    type: 'color'
  },

  backgroundColor: {
    property: 'backgroundColor',
    scale: 'colors',
    type:'color'
  },

  opacity: true,
} as const;


export const color = system(config);
