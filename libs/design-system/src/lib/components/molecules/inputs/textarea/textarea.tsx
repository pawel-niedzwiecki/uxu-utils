import { forwardRef } from 'react';
import styles from './textarea.module.scss';
import classNames from 'classnames';
import { TextAreaProps } from './types';
import { Note } from './../../../atoms';

export const Textarea = forwardRef<HTMLTextAreaElement, TextAreaProps> (( {className, style, children, errorMessage, ...props}, ref ) => (
    <label className={classNames ( styles.label, className )} style={style}>
      <textarea className={classNames ( styles.textarea, {[ styles.error ]: !!errorMessage} )} {...props} ref={ref} />
      {!!errorMessage && <Note type='warning' fill><p className={classNames ( styles.message, {[ styles.error ]: errorMessage} )}>{errorMessage}</p></Note>}
      {children}
    </label>
));

