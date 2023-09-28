import React, { forwardRef } from 'react';
import styles from './inputRadioIcon.module.scss';
import classNames from 'classnames';
import { InputRadioIconProps } from './types';

export const InputRadioIcon = forwardRef<HTMLInputElement, InputRadioIconProps>(({ className, style, errorMessage, icon, value, onChange, checked }, ref) => {
    const handleClick = () => {
      onChange && onChange({ target: { value } } as React.ChangeEvent<HTMLInputElement>);
    };

    return (
      <label className={classNames(styles.label, className)} style={style}>
        {icon && (
          <div
            className={classNames(styles.wrapperIcon, { [styles.wrapperIconCheck]: checked })}
            onClick={handleClick}
          >
            {icon}
          </div>
        )}
        <input
          className={classNames(styles.input, { [styles.error]: errorMessage })}
          type="radio"
          ref={ref}
          value={value}
          checked={checked}
          onChange={onChange}
        />
      </label>
    );
  }
);
