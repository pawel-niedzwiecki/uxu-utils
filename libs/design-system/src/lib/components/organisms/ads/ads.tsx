import { adsSlots, ParamsAd } from './../../../assets';
import styles from './ads.module.scss';
import { AdsProps } from './types';

export function Ads({ slot }: AdsProps) {
  const params: ParamsAd = {
    width: adsSlots[slot].width,
    height: adsSlots[slot].height,
    slots: adsSlots[slot]?.slots,
  };
  return <div style={{...params}} className={styles.wrapper}></div>;
}
