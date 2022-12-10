import {system} from './core';
import {ObjectMapType} from "@uxu/types";

export type SizeProps = {
  width?: string | ObjectMapType<string>;
  height?: string | ObjectMapType<string>;
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
