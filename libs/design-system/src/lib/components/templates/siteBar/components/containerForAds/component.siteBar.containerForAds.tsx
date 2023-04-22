import React from 'react';
import { Ads } from '../../../../organisms';
import { useBreakpoints } from '../../../../../hooks';
import { BoxAds, Header, Item } from '../../component.siteBar.styles';
import type { ComponentProps } from './component.siteBar.containerForAds.types';

export const ContainerForAds = ({ ads }: ComponentProps) => {
  const { isTabletOrMobile } = useBreakpoints();

  if (!ads) return null;
  return (
    <BoxAds>
      <Item>
        <Header>Reklama</Header>
      </Item>
      <Item>
        <Ads slot={isTabletOrMobile ? 's200200' : 's200600'} />
      </Item>
    </BoxAds>
  );
};
