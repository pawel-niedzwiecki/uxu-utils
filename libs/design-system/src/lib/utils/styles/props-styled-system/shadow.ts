import {system} from './core';
import {PropType} from "./types";

export type ShadowProps = {
  boxShadow?: PropType;
  textShadow?: PropType;
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
