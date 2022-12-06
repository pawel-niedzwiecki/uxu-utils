import {ColorProps} from "./color";
import {Theme} from "@uxu/design-system";
import {ObjectMapType, FunctionComponentDiv} from "@uxu/types";


export type ConfigArgType = {
  property: string;
  scale: string;
  type?: string;
} | boolean;


export type ConfigArgsType = ObjectMapType<ConfigArgType>;

export type PropsType = ColorProps | Theme;

export class VariabelTypeInCss {
}
