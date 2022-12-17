import {listensPropsColor} from "color";
import {system} from './core';
import {PropType} from "./types";

export type SpaceProps = {
  margin?: PropType;
  marginTop?: PropType;
  marginRight?: PropType;
  marginBottom?: PropType;
  padding?: PropType;
  paddingTop?: PropType;
  paddingRight?: PropType;
  paddingBottom?: PropType;
  paddingLeft?: PropType;
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
