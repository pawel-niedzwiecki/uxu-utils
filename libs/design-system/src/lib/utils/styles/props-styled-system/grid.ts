import {system} from './core';
import {PropType} from "./types";

export type GridProps = {
  gridGap?: PropType;
  gridColumnGap?: PropType;
  gridRowGap?: PropType;
  gridColumn?: PropType;
  gridRow?: PropType;
  gridAutoFlow?: PropType;
  gridAutoColumns?: PropType;
  gridAutoRows?: PropType;
  gridTemplateColumns?: PropType;
  gridTemplateRows?: PropType;
  gridTemplateAreas?: PropType;
  gridArea?: PropType;
}

export type GridConfig = typeof configs;

const configs = {
  gridGap: {
    property: 'gridGap',
  },
  gridColumnGap: {
    property: 'gridColumnGap',
  },
  gridRowGap: {
    property: 'gridRowGap',
  },
  gridColumn: {
    property: 'gridColumn',
  },
  gridRow: {
    property: 'gridRow',
  },
  gridAutoFlow: {
    property: 'gridAutoFlow',
  },
  gridAutoColumns: {
    property: 'gridAutoColumns',
  },
  gridAutoRows: {
    property: 'gridAutoRows',
  },
  gridTemplateColumns: {
    property: 'gridTemplateColumns',
  },
  gridTemplateRows: {
    property: 'gridTemplateRows',
  },
  gridTemplateAreas: {
    property: 'gridTemplateAreas',
  },
  gridArea: {
    property: 'gridArea',
  }
} as const;


export const listensPropsGrid = system(configs);
