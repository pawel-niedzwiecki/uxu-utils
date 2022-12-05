import {ConfigArg, ConfigArgs, Props} from 'types';



const keys = (obj: ConfigArgs) => Object.keys(obj);

const parser = (configs: ConfigArgs) => (props: Props) => {
  const style = {}

  keys(configs).forEach((key) => {
    const value = props[key];
    if (typeof configs[key] === 'boolean') Object.assign(style, {[key]: value});
    else Object.assign(style, configs[key](props))


  })
  return style
}



export const createStyleFunction = (config: ConfigArg) => {
  const sx = (props: Props) => {

    const property = props[config.property];
    if (typeof property === 'string') { // @ts-ignore
      return {[config.property]: `var(${property.split('.').reduce((acc, item, index, arr) => acc + item + (index + 1 === arr.length ? "" : "-") , `--uxu-color-`)})`}
    }
  }

  sx.config = config

  return sx
};

export const system = (args: ConfigArgs = {}) => {
  const configs: ConfigArgs = {};

  Object.keys(args).forEach((key): void => {
    let config: ConfigArg = args[key];
    if (typeof config === 'boolean') configs[key] = config;
    else configs[key] = createStyleFunction(config);
  });


  return parser(configs)
};
