import {listensPropsColor} from "color";
import {system} from './core';
import {ObjectMapType} from "@uxu/types";

export type SpaceProps = {
  margin?: string | ObjectMapType<string>;
  marginTop?: string | ObjectMapType<string>;
  marginRight?: string | ObjectMapType<string>;
  marginBottom?: string | ObjectMapType<string>;
  padding?: string | ObjectMapType<string>;
  paddingTop?: string | ObjectMapType<string>;
  paddingRight?: string | ObjectMapType<string>;
  paddingBottom?: string | ObjectMapType<string>;
  paddingLeft?: string | ObjectMapType<string>;
}

export type SpaceConfig = typeof configs;

const configs = {
  margin: {
    property: 'margin',
    scale: 'space',
  },
  marginTop: {
    property: 'marginTop',
    scale: 'space',
  },
  marginRight: {
    property: 'marginRight',
    scale: 'space',
  },
  marginBottom: {
    property: 'marginBottom',
    scale: 'space',
  },
  marginLeft: {
    property: 'marginLeft',
    scale: 'space',
  },
  padding: {
    property: 'padding',
    scale: 'space',
  },
  paddingTop: {
    property: 'paddingTop',
    scale: 'space',
  },
  paddingRight: {
    property: 'paddingRight',
    scale: 'space',
  },
  paddingBottom: {
    property: 'paddingBottom',
    scale: 'space',
  },
  paddingLeft: {
    property: 'paddingLeft',
    scale: 'space',
  },
} as const;


export const listensPropsSpace = system(configs);
