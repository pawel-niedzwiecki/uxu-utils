import type { LoadingDotsProps } from './types';
import styles from './loadingDots.module.scss';

export function LoadingDots({ size }: LoadingDotsProps ) {
  return (
    <div className={styles.wrapper}>
      <span></span>
      <span></span>
      <span></span>
      <style jsx>{`
        span {
          width: ${size}rem;
          height: ${size}rem;
        }
      `}</style>
    </div>
  )
}
