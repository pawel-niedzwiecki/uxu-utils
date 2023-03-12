<<<<<<< HEAD

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import {forwardRef} from 'react';
=======
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { ForwardedRef, forwardRef } from 'react';
>>>>>>> stage
import type {Props} from './component.switch.types';
import {InputComponent, LabelComponent, SliderComponent} from './component.switch.style';

export const InputSwitch = forwardRef<Props>(({className, children, style, ...args}, ref) => {

  return (
    <LabelComponent className={className} style={style}>
      <InputComponent {...args} type='checkbox' ref={ref}/>
      <SliderComponent className='slider'/>
      {children}
    </LabelComponent>
  );
});


