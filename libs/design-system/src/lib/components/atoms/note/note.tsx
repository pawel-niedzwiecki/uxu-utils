import styles from './note.module.scss';
import type { PropsNote } from './types';
import { AlertTriangle, CheckCircle, AlertOctagon , HelpCircle } from 'react-feather';
import classNames from 'classnames';

const iconComponents = {
  success: <CheckCircle />,
  warning: <AlertTriangle />,
  error: <AlertOctagon />,
  default: <HelpCircle />,
};

export function Note({ children, className, type = 'default', fill, action, disabled }: PropsNote) {
  const IconComponent = iconComponents[type] || iconComponents.default;
  const wrapperClasses = classNames(styles.note, className, {
    [styles[type]]: !fill,
    [styles[`${type}Fill`]]: fill,
    [styles.action]: !!action,
    [styles.disabled]: disabled,
  });

  return (
    <div className={wrapperClasses}>
      {IconComponent}
      {children}
      {action ? action : null}
    </div>
  );
}
