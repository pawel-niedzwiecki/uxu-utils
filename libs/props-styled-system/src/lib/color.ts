import { system } from './core';


export type ColorConfig = typeof config;

export type ColorProps = {
  color?: string;
  backgroundColor?: string;
  opacity?: string;
}

const config = {
  color: {
    property: 'color',
    scale: 'colors',
  },

  backgroundColor: {
    property: 'backgroundColor',
    scale: 'colors',
  },

  opacity: true,
} as const;


export const color = system(config);
