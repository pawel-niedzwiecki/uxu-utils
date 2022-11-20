import { Arg, Args } from './types';
import { css } from 'styled-components';

export const system = (args: Args = {}) => {
  const configs: Args = {};

  Object.keys(args).forEach((key): void => {
    const config: Arg = args[key];
    console.log(config);

    switch (typeof config) {
      case 'boolean':
        configs[key] = false;
        break;
      case 'function':
        configs[key] = config;
        break;
      default:
      // configs[key] = createStyleFunction(config);
    }
  });
  return () => {
    return css`
      color: red;
    `;
  };
};
