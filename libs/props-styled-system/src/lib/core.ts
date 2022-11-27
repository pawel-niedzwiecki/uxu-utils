import {Arg, Args} from 'types';
import type {Theme} from "@uxu/design-system";
import {css} from 'styled-components';
import {ConfigColor} from 'color'


const keys = (obj: Args) => Object.keys(obj);

const parser = (configs: Args) => {

  return (props) => {
    const style: string[] = []

    keys(configs).forEach((key) => {
      const value = props[key];

      if (key === 'color' && typeof configs[key] === 'function') style.push(configs[key](value, props.theme))
      else if(typeof configs[key] === 'boolean') style.push(`${key}: ${value};`)
    })

    return style
  }
}

export const createStyleFunction = (config: { property: string, scale: string }) => (value: string, theme: Theme) => {
  let variableCss = "uxu-"
  let res;


  const search = (obj: Theme) => {
    let val;

    keys(obj).forEach((key) => {
      if(typeof obj[key] === "object") {
        if(keys(obj[key]).some((key) => key === value)){
          if(config.property === 'color') val = `var(--uxu-${key}-${value});`
          else val = obj[key][value]
        }
      } else return obj[key]
    });

    return [`${config.property}:${val}`]
  }


  return search(theme[config.scale])
};

export const system = (args: Args = {}) => {
  const configs: Args = {};

  Object.keys(args).forEach((key): void => {
    let config: Arg = args[key];

    switch (typeof config) {
      case 'boolean':
        configs[key] = config;
        break;
      case 'object':
        configs[key] = createStyleFunction(config);
    }
  });


  return parser(configs)
};
