import type { ComponentWithProps } from './../../../utils';

export type AlertDataProps = {
  tel?: string,
  title?: string
}

export type ComponentAlertType = ComponentWithProps<AlertDataProps>
