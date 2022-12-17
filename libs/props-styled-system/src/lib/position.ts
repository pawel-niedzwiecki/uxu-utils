import {system} from './core';
import {PropType} from "./types";

export type PositionProps = {
  position?: PropType;
  top?: PropType;
  right?: PropType;
  left?: PropType;
  bottom?: PropType;
}

export type PositionConfig = typeof configs;

const configs = {
  position: {
    property: 'position',
  },
  top: {
    property: 'top',
  },
  right: {
    property: 'right',
  },
  left: {
    property: 'left',
  },
  bottom: {
    property: 'bottom',
  },
} as const;


export const listensPropsPosition = system(configs);
