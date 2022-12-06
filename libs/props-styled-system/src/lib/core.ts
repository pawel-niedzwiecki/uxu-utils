import {ObjectMapType, Nullable} from "@uxu/types";
import {ConfigArgType, ConfigArgsType, PropsType} from 'types';

const keys = (obj: ConfigArgsType) => Object.keys(obj);

const get = ({property, value, type = ""}: { property: string, value: string, type?: string }) => {
  if (type.length) return {[property]: `var(${value.split('.').reduce((acc: string, item: string, index: number, arr: string[]) => acc + item + (index + 1 === arr.length ? "" : "-"), `--uxu-${type}-`)})`}
  else return {[property]: value}
}

const parser = (configs: ConfigArgsType) => (props: PropsType) => {
  let style = {}

  keys(configs).forEach((property) => {
    const value = props[property];

    if (typeof value === 'string') {
      if (typeof configs[property] === 'boolean')  Object.assign(style, get({property, value}))
      if (typeof configs[property] === typeof createStyleFunction)  Object.assign(style, configs[property](props))
    } else if(typeof value === 'object') console.log(value)
  })

  return style
}


export const createStyleFunction = (config: ConfigArgType) => {
  const sx = (props: PropsType): ObjectMapType<string> | Nullable<null> => {
    if (typeof config === "object") {
      const value = props[config.property];
      if (typeof value === "string" && config?.type?.length) return get({property: config.property, value, type: config.type})
      else return null
    } else return null

  }
  sx.config = config

  return sx
}

export const system = (args: ConfigArgsType = {}) => {
  let configs: ConfigArgsType = {};

  keys(args).forEach((key): void => {
    let config: ConfigArgType = args[key];
    if (typeof config === 'boolean') configs[key] = config;
    else configs[key] = createStyleFunction(config);
  });


  return parser(configs)
};
