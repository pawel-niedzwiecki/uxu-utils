import { ContainerProps } from "./type";
import styles from './container.module.scss';
import classnames from 'classnames';


export function Container({ children, className, full = false }: ContainerProps) {
  const containerClass = classnames(
    styles.wrapper,
    className, {
    [styles.full]: full,
  });

  return <div className={containerClass}>{children}</div>;
}
