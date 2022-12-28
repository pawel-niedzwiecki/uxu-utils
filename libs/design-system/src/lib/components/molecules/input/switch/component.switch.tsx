import { forwardRef } from 'react';
import type { Props } from './component.switch.types';
import { InputComponent, LabelComponent, SliderComponent } from './component.switch.style';

export const InputSwitch = forwardRef<Props>((props, ref) => {
  const { className, children, style, ...otherProps } = props;
  return (
    <LabelComponent className={className} style={style}>
      <InputComponent {...otherProps} type='checkbox' ref={ref} />
      <SliderComponent className='slider' />
      {children}
    </LabelComponent>
  );
});


