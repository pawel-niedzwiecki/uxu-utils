import { adsSlots, ParamsAd } from './../../../assets';
import { Wrapper } from './component.ads.styles';
import { ComponentProps } from './component.ads.types';

export function Ads({ slot }: ComponentProps) {
  const params: ParamsAd = {
    width: adsSlots[slot].width,
    height: adsSlots[slot].height,
    slots: adsSlots[slot]?.slots,
  };
  return <Wrapper {...params}></Wrapper>;
}
