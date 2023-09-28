import React, { useEffect, useState } from 'react';
import ComponentConfetti from 'react-confetti';
import { functionCheckIsDOM } from './../../../utils';
import styles from './confetti.module.scss';
import classnames from 'classnames';
import { ConfettiProps } from './types';

export function Confetti({ title, className }: ConfettiProps) {
  const [windowSize, setWindowSize] = useState({ height: 1000, width: 1000 });

  useEffect(() => {
    functionCheckIsDOM(() => {
      const { innerHeight: height, innerWidth: width } = window;
      setWindowSize({ height, width });
    });
  }, []);

  const { height, width } = windowSize;

  return (
    <div className={classnames(styles.wrapper, className)}>
      {title && <span>{title}</span>}
      <ComponentConfetti height={height} width={width} className={styles.confetti} />
    </div>
  );
}
