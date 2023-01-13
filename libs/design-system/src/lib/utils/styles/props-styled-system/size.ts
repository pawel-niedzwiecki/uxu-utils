import {system} from './core';
import {PropType} from "./types";

export type SizeProps = {
  width?: PropType;
  height?: PropType;
}

export type SizeConfig = typeof configs;

const configs = {
  width: {
    property: 'width',
  },
  height: {
    property: 'height',
  },
} as const;


export const listensPropsSize = system(configs);
