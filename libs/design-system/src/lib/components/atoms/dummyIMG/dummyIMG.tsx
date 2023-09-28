import React from 'react';
import { Image } from 'react-feather';
import styles from './dummyIMG.module.scss';
import { DummyIMGProps } from './types';

export function DummyIMG({iconSize, ...args }: DummyIMGProps) {
  return <div className={styles.wrapper} style={{...args}}><Image size={iconSize || "4rem"} /></div>;
}
