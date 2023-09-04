import { vectorLogos } from './../../../assets';
import { LogoProps } from './logo.types';
import styles from './logo.module.scss';
import classnames from 'classnames';

export function Logo({ brandName, className }: LogoProps) {
  const logo = vectorLogos[brandName];

  return (
    <div className={classnames(styles.wrapperLogo, className)}>
      {logo}
    </div>
  );
}
