import {system} from './core';
import {PropType} from "./types";

export type BorderProps = {
  border?: PropType;
  borderWidth?: PropType;
  borderStyle?: PropType;
  borderColor?: PropType;
  borderRadius?: PropType;
  borderTop?: PropType;
  borderTopLeftRadius?: PropType;
  borderTopRightRadius?: PropType;
  borderRight?: PropType;
  borderBottom?: PropType;
  borderBottomLeftRadius?: PropType;
  borderBottomRightRadius?: PropType;
  borderLeft?: PropType;
}

export type BorderConfig = typeof configs;

const configs = {
  border: {
    property: 'border',
    scale: 'borders',
  },
  borderWidth: {
    property: 'borderWidth',
    scale: 'borderWidths',
  },
  borderStyle: {
    property: 'borderStyle',
  },
  borderColor: {
    property: 'borderColor',
    scale: 'colors',
  },
  borderRadius: {
    property: 'borderRadius',
    scale: 'radii',
  },
  borderTop: {
    property: 'borderTop',
    scale: 'borders',
  },
  borderTopLeftRadius: {
    property: 'borderTopLeftRadius',
    scale: 'radii',
  },
  borderTopRightRadius: {
    property: 'borderTopRightRadius',
    scale: 'radii',
  },
  borderRight: {
    property: 'borderRight',
    scale: 'borders',
  },
  borderBottom: {
    property: 'borderBottom',
    scale: 'borders',
  },
  borderBottomLeftRadius: {
    property: 'borderBottomLeftRadius',
    scale: 'radii',
  },
  borderBottomRightRadius: {
    property: 'borderBottomRightRadius',
    scale: 'radii',
  },
  borderLeft: {
    property: 'borderLeft',
    scale: 'borders',
  },
} as const;


export const listensPropsBorder = system(configs);
