import type { ComponentWithProps } from './../../../../utils';
import { BorderProps, ColorProps } from './../../../../utils';


export type ComponentRowWithProps = ComponentWithProps<ColorProps & BorderProps>
