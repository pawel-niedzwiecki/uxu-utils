import {ColorProps} from "color";
import {createStyleFunction} from 'core'
import {ObjectMapType, FunctionComponentDiv} from "@uxu/types";


export type ConfigArg = {
  property: string;
  scale: string;
} | boolean | typeof createStyleFunction;

export type ConfigArgs = ObjectMapType<ConfigArg>;

export type Props = ObjectMapType<FunctionComponentDiv & ColorProps>;
