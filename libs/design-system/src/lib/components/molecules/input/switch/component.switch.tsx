import { ForwardedRef, forwardRef } from 'react';
import type {Props} from './component.switch.types';
import {InputComponent, LabelComponent, SliderComponent} from './component.switch.style';

// @ts-ignore
export const InputSwitch = (({className, children, style, ...args}: any) => {

  return (
    <LabelComponent className={className} style={style}>
      <InputComponent {...args} type='checkbox' />
      <SliderComponent className='slider'/>
      {children}
    </LabelComponent>
  );
});


