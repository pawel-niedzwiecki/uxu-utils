import {forwardRef} from 'react';
import type {Props} from './component.input.types'
import {LabelComponent, InputComponent} from './component.input.style'

export const Input = forwardRef<Props>((props, ref) => {
  const {className, children, style, ...otherProps} = props
  return (
    <LabelComponent className={className} style={style}>
      <InputComponent {...otherProps} ref={ref}/>
      {children}
    </LabelComponent>
  )
})

