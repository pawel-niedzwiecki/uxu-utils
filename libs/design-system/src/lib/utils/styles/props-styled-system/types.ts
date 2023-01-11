import { ColorProps } from './color';
import { SpaceProps } from './space';
import { GridProps } from './grid';
import { PositionProps } from './position';
import { TypographyProps } from './typography';
import { ShadowProps } from './shadow';
import { SizeProps } from './size';
import { BorderProps } from './border';
import { VectorProps } from './vector';
import { DisplayProps } from './display';
import { Theme } from 'theme';
import type { ObjectMapType } from 'utils';


export type ConfigArgType = {
  scale?: string;
  property: string;
  variable?: { prefix: string };
};


export type ConfigArgsType = ObjectMapType<ConfigArgType>;

export type PropType = string | ObjectMapType<string>;

export type PropsType =
  ColorProps
  | SpaceProps
  | GridProps
  | PositionProps
  | TypographyProps
  | ShadowProps
  | SizeProps
  | VectorProps
  | BorderProps
  | DisplayProps
  | Theme;
