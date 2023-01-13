import { FC } from 'react';
import type { FunctionComponentDiv } from 'utils';
import { SizeProps } from 'utils';

export type SpecialProps = {
  type?: string;
  prefix?: JSX.Element,
  suffix?: JSX.Element,
  shape?: "square" | "circle",
  size?: "small" | "large" | "default",
  align?: "start" | "grow" | "end" | "center",
  variant?: "primary" | "shadow" | "ghost" | "loading" | "disabled" | undefined,
  color?: "primary" | "secondary" | "success" | "error" | "warning" | "violet" | "cyan" | "purple" | "magenta" | "pink" | "yellow"
};

export type Props = FC<FunctionComponentDiv & SizeProps & SpecialProps>
