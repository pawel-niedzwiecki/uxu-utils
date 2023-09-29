import React from 'react';
import { adsSlots } from './../../../assets';
import styles from './ads.module.scss';
import { AdsProps } from './types';

export function Ads({ slot, stickyOffset }: AdsProps) {
  const { width, height, slots } = adsSlots[slot];

  const style: React.CSSProperties = stickyOffset ? { position: 'sticky', top: stickyOffset } : {};

  return (
    <div style={style}>
      {slots && <div style={{ width, height }} className={styles.wrapper} />}
    </div>
  );
}
