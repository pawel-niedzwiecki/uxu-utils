import {system} from './core';
import {ObjectMapType} from "@uxu/types";

export type ShadowProps = {
  boxShadow?: string | ObjectMapType<string>;
  textShadow?: string | ObjectMapType<string>;
}

export type ShadowConfig = typeof configs;

const configs = {
  boxShadow: {
    property: 'boxShadow',
    scale: 'shadows',
  },
  textShadow: {
    property: 'textShadow',
    scale: 'shadows',
  },
} as const;


export const listensPropsShadow = system(configs);
