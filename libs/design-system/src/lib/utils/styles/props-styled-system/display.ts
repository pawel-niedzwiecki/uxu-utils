import {system} from './core';
import {PropType} from "./types";

export type DisplayProps = {
  display?: PropType;
}

export type DisplayConfig = typeof configs;

const configs = {
  display: {
    property: 'display',
  }
} as const;


export const listensPropsDisplay = system(configs);
