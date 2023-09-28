import { SiteBarProps } from "./types";
import styles from './sitebar.module.scss'
import classnames from "classnames";


export function SiteBar ({ site, children, className }: SiteBarProps ) {
  const siteBar = classnames(styles.wrapper, className, {
    [styles.left]: site === 'left',
    [styles.right]: site === 'right',
  });

  return (
    <div className={siteBar}>
      {children}
    </div>
  )
}
