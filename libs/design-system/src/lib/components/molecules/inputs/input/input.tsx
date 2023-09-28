import { forwardRef } from 'react';
import styles from './input.module.scss';
import classNames from 'classnames';
import { InputProps } from './types';
import { Note } from './../../../atoms';

export const Input = forwardRef<HTMLInputElement, InputProps> (({className, style, children, errorMessage, ...props}, ref ) => (
    <label className={classNames ( styles.label, className )} style={style}>
      <input className={classNames ( styles.input, {[ styles.error ]: errorMessage} )} {...props} ref={ref}/>
      {!!errorMessage && <Note type='warning' fill><p className={classNames ( styles.message, {[ styles.error ]: errorMessage} )}>{errorMessage}</p></Note>}
      {children}
    </label>
));

