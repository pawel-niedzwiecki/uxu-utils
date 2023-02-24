import {forwardRef} from 'react';
import type {Props} from './component.switch.types';
import {InputComponent, LabelComponent, SliderComponent} from './component.switch.style';

export const InputSwitch = forwardRef<Props>(({className, children, style, defaultChecked, ...args}, ref) => {

  return (
    <LabelComponent className={className} style={style}>
      <InputComponent {...args} defaultChecked={defaultChecked} type='checkbox' ref={ref}/>
      <SliderComponent className='slider'/>
      {children}
    </LabelComponent>
  );
});


