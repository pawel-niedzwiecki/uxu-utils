import { FC } from 'react';
import type { FunctionComponentDiv } from 'utils';
import { SizeProps } from 'utils';
import type { SpecialProps as ButtonProps } from 'components/atoms/button/component.button.props';


export type SpecialProps = {
  href: string,
  title: string,
} & ButtonProps

export type Props = FC<FunctionComponentDiv & SizeProps & SpecialProps>
