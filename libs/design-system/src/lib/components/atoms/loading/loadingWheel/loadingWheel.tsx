import { LoadingWheelProps } from './types';
import styles from './loadingWheel.module.scss';

export const LoadingWheel = ({ size = 1 }: LoadingWheelProps) => {
  const wheelSize = { width: `${size}rem`, height: `${size}rem` };

  return (
    <div className={styles.wrapper} style={wheelSize}>
      <div className={styles.wheel} style={wheelSize}>
        {new Array(12).fill(null).map((_, i) => (
          <span key={i} className={styles.item} style={{
            animationDelay: `${0 - (i / 10)}s`,
            transform: `rotate(${360 / 12 * i}deg) translate(146%)`
          }}>
          </span>
        ))}
      </div>
    </div>
  );
};
