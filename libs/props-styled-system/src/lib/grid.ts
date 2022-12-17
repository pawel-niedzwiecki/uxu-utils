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
<<<<<<< HEAD
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
=======
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
>>>>>>> dcd9d27 (feat: add config for grid (#13))
  },
} as const;


export const listensPropsGrid = system(configs);
