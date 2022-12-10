import {ColorProps} from "./color";
import {SpaceProps} from "./space";
import {GridProps} from "./grid";
import {PositionProps} from "./position";
import {Theme} from "@uxu/design-system";
import {ObjectMapType} from "@uxu/types";


export type ConfigArgType = {
  scale?: string;
  property: string;
  variable?: { prefix: string };
};


export type ConfigArgsType = ObjectMapType<ConfigArgType>;

export type PropsType = ColorProps | SpaceProps | GridProps | PositionProps | Theme;
