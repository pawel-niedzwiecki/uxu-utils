import { HamburgerProps } from './hamburger.types';
import styles from './hamburger.module.scss'
import classNames from 'classnames';

export function Hamburger ({open, onClick, className }: HamburgerProps) {
  const hamburgerClass = classNames(
    styles.hamburger,
    className,
    { [styles.open]: open }
  );

  return (
    <button className={hamburgerClass} onClick={onClick}>
      <span></span>
      <span></span>
    </button>
  )
}
