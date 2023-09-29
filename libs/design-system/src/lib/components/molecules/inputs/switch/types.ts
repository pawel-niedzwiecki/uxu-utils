import React from 'react';
import { RegisterOptions } from 'react-hook-form';

export type InputSwitchProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  style?: React.CSSProperties;
  errorMessage?: string;
  registerOptions?: RegisterOptions;
}
