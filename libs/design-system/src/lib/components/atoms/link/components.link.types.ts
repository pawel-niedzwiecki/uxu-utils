import {FC} from "react";
import {FunctionComponentDiv} from '@uxu/types';
import {SizeProps} from "@uxu/props-styled-system";
import type {SpecialProps as ButtonProps} from 'components/atoms/button/commponent.button.props'


export type SpecialProps = {
  href: string,
  title: string,
} & ButtonProps

export type Props = FC<FunctionComponentDiv & SizeProps & SpecialProps>
