import { forwardRef } from 'react';
import type { InputSwitchProps } from './types';
import styles from './switch.module.scss';
import classnames from "classnames";

export const InputSwitch = forwardRef<HTMLInputElement ,InputSwitchProps>(({className, children, style, ...args}, ref) => {

  return (
    <label className={classnames(styles.label, className)} style={style}>
      <input className={styles.input} {...args} type='checkbox' ref={ref}/>
      <div className={classnames(styles.slider, 'slider')}/>
      {children}
    </label>
  );
});


