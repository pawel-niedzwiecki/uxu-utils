import {system} from './core';
import {ObjectMapType} from "@uxu/types";

export type PositionProps = {
  position?: string | ObjectMapType<string>;
  top?: string | ObjectMapType<string>;
  right?: string | ObjectMapType<string>;
  left?: string | ObjectMapType<string>;
  bottom?: string | ObjectMapType<string>;
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
