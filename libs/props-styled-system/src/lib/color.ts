import { system } from './core';


export type ConfigColor = typeof config;

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
