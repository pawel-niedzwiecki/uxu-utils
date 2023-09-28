import React from 'react';
import { RegisterOptions } from 'react-hook-form';

export type InputRadioIconProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  style?: React.CSSProperties;
  icon: JSX.Element;
  errorMessage?: string;
  registerOptions?: RegisterOptions;
}
