import {system} from './core';
import {ObjectMapType} from "@uxu/types";

export type GridProps = {
  gridGap?: string | ObjectMapType<string>;
  gridColumnGap?: string | ObjectMapType<string>;
  gridRowGap?: string | ObjectMapType<string>;
  gridColumn?: string | ObjectMapType<string>;
  gridRow?: string | ObjectMapType<string>;
  gridAutoFlow?: string | ObjectMapType<string>;
  gridAutoColumns?: string | ObjectMapType<string>;
  gridAutoRows?: string | ObjectMapType<string>;
  gridTemplateColumns?: string | ObjectMapType<string>;
  gridTemplateRows?: string | ObjectMapType<string>;
  gridTemplateAreas?: string | ObjectMapType<string>;
  gridArea?: string | ObjectMapType<string>;
}

export type GridConfig = typeof configs;

const configs = {
  gridGap: {
    property: 'grid-gap',
  },
  gridColumnGap: {
    property: 'grid-column-gap',
  },
  gridRowGap: {
    property: 'grid-row-gap',
  },
  gridColumn: {
    property: 'grid-column',
  },
  gridRow: {
    property: 'grid-row',
  },
  gridAutoFlow: {
    property: 'grid-auto-flow',
  },
  gridAutoColumns: {
    property: 'grid-auto-columns',
  },
  gridAutoRows: {
    property: 'grid-auto-rows',
  },
  gridTemplateColumns: {
    property: 'grid-template-columns',
  },
  gridTemplateRows: {
    property: 'grid-template-rows',
  },
  gridTemplateAreas: {
    property: 'grid-template-areas',
  },
  gridArea: {
    property: 'grid-area',
  },
} as const;


export const listensPropsGrid = system(configs);
