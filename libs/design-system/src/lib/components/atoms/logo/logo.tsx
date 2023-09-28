import React from 'react';
import classnames from 'classnames';
import { vectorBrands } from './../../../assets';
import { LogoProps } from "./types";
import styles from './logo.module.scss';

export function Logo({ brand, className }: LogoProps) {
  return (
    <div className={classnames(styles.wrapper, className)}>
      {vectorBrands[brand]}
    </div>
  );
}
