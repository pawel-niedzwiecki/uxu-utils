import type {ObjectMapType, Nullable} from "@uxu/types";
import {createMediaQuery, keys} from "@uxu/utils";
import {ConfigArgType, ConfigArgsType, PropsType} from 'types';


type ParseResponsiveObjectProps = { sx: typeof createStyleFunction, obj: ObjectMapType<string>, props: PropsType }

const parseResponsiveObject = ({sx, obj, props}: ParseResponsiveObjectProps) => {
  let styles = {}
  const breakpoints = props.theme.breakpoints

  for (let key in obj) {
    const breakpoint = breakpoints[key];
    const style = sx(obj[key], props)
    if (!breakpoint) Object.assign(styles, style)
    else {
      const media = createMediaQuery(breakpoint)
      Object.assign(styles, {
        [media]: Object.assign({}, styles[media], style),
      })
    }
  }

  return styles
}


const get = ({property, value, variable}: { property: string, value: string, variable?: { prefix: string } }) => {
  if (variable?.prefix) return {[property]: `var(${value.split('.').reduce((acc: string, item: string, index: number, arr: string[]) => acc + item + (index + 1 === arr.length ? "" : "-"), `--uxu-${variable.prefix}-`)})`}
  else return {[property]: value}
}

const parser = (configs: ObjectMapType<typeof createStyleFunction>) => (props: PropsType) => {
  let styles = {}

  keys(configs).forEach((key) => {
    const value = props[key];
    const type = typeof value;
    const sx = configs[key];

    if (type === 'string') Object.assign(styles, sx(value, props))
    else if (type === 'object') Object.assign(styles, parseResponsiveObject({sx, obj: value, props}))
  })


  return styles
}

export const createStyleFunction = (config: ConfigArgType) => {
  const sx = (value: string, props: PropsType): ObjectMapType<string> | Nullable<null> => {
    const property = config.property
    const variable = config.variable

    if (config?.variable) return get({value, property, variable})
    else if (config?.scale) {
      const scale = props.theme[config.scale]
      return get({value: value.split('.').reduce((acc, key) => acc[key], scale), property})
    } else return get({value, property})

  }
  sx.config = config

  return sx
}

export const system = (args: ConfigArgsType = {}) => {
  let configs: ObjectMapType<typeof createStyleFunction> = {};
  keys(args).forEach((key): void => {
    let config: ConfigArgType = args[key];
    Object.assign(configs, {[key]: createStyleFunction(config)})
  });

  return parser(configs)
};
