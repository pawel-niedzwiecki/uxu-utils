import { system } from './core';

const config = {
  color: {
    property: 'color',
    scale: 'colors',
    cssVariables: true,
  },

  backgroundColor: {
    property: 'backgroundColor',
    scale: 'colors',
    cssVariables: true,
  },

  opacity: true,
};

export const color = system(config);

export default color;
