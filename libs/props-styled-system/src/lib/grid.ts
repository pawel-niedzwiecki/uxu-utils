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
  },
} as const;


export const listensPropsGrid = system(configs);
