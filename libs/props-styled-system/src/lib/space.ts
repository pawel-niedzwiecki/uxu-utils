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
    scale: 'spaces',
  },
  marginTop: {
    property: 'marginTop',
    scale: 'spaces',
  },
  marginRight: {
    property: 'marginRight',
    scale: 'spaces',
  },
  marginBottom: {
    property: 'marginBottom',
    scale: 'spaces',
  },
  marginLeft: {
    property: 'marginLeft',
    scale: 'spaces',
  },
  padding: {
    property: 'padding',
    scale: 'spaces',
  },
  paddingTop: {
    property: 'paddingTop',
    scale: 'spaces',
  },
  paddingRight: {
    property: 'paddingRight',
    scale: 'spaces',
  },
  paddingBottom: {
    property: 'paddingBottom',
    scale: 'spaces',
  },
  paddingLeft: {
    property: 'paddingLeft',
    scale: 'spaces',
  },
} as const;


export const listensPropsSpace = system(configs);
