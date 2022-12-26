import {forwardRef} from 'react';
import type {Props} from './components.switch.types'
import {LabelComponent, InputComponent, SliderComponent} from './components.switch.style'

export const InputSwitch = forwardRef<Props>((props, ref) => {
  const {className, children, style, ...otherProps} = props
  return (
    <LabelComponent className={className} style={style}>
      <InputComponent {...otherProps} type="checkbox" ref={ref} />
      <SliderComponent className="slider"/>
      {children}
    </LabelComponent>
  )
})

