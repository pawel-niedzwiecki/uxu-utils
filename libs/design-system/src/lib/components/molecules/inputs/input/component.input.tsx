import { forwardRef } from 'react';
import { InputComponent, LabelComponent } from './component.input.style';
import { ComponentType } from './component.input.types';

export const Input: ComponentType = forwardRef(({ className, style, children, ...props }, ref) => {
  return (
    <LabelComponent className={className} style={style}>
      <InputComponent {...props} ref={ref} />
      {children}
    </LabelComponent>
  );
});
