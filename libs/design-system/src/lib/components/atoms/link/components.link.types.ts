import {FC} from "react";
import {FunctionComponentDiv} from '@uxu/types';
import type {SpecialProps as ButtonProps} from 'components/atoms/button/commponent.button.props'


export type SpecialProps = {
  href: string,
  title: string,
} & ButtonProps

export type Props = FC<FunctionComponentDiv & SpecialProps>
