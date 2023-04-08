import { FC } from 'react';
import type { FunctionComponentDiv } from './../../../utils';


export type PropsSpecial = {
  name?: string
  src?: string
  size?: string

  isLoading?: boolean
}

export type Props = FC<FunctionComponentDiv & PropsSpecial>
