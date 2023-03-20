// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { forwardRef } from 'react';
import type { Props } from './component.input.types';
import { InputComponent, LabelComponent } from './component.input.style';

export const Input = forwardRef<Props>((props, ref) => {
  const { className, children, style, ...otherProps } = props;
  return (
    <LabelComponent className={className} style={style}>
      <InputComponent {...otherProps} ref={ref} />
      {children}
    </LabelComponent>
  );
});
