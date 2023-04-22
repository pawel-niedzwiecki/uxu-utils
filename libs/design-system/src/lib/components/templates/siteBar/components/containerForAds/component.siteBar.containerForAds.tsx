import React from 'react';
import { Ads } from '../../../../organisms';
import { useBreakpoints } from '../../../../../hooks';
import type { ComponentProps } from '../../primary/component.siteBar.types';
import { BoxAds, Header, Item } from '../../component.siteBar.styles';

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
