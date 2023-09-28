import React from 'react';
import { RegisterOptions } from 'react-hook-form';

export type TextAreaProps = React.InputHTMLAttributes<HTMLTextAreaElement> & {
  className?: string;
  style?: React.CSSProperties;
  errorMessage?: string;
  registerOptions?: RegisterOptions;
}

