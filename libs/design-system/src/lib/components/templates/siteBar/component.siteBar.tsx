import React from 'react';
import { Box, Wrapper } from './component.siteBar.style';
import { useMenu } from '../../../hooks';
import { Props } from './component.siteBar.props';
import { SiteBarCover } from './component.siteBar.fragment.cover';
import { SiteBarFilter } from './component.siteBar.fragment.filter';
import { SiteSocialMedia } from './component.siteBar.fragment.socialMedia';

export const SiteBar: Props = ({ data: { cover, filter, socialMedia } }) => {
  const { hiddeMenu } = useMenu();

  return (
    <Wrapper>
      <Box top={hiddeMenu ? 15 : 115}>
        {SiteBarCover({ cover })}
        {SiteBarFilter({ filter })}
        {SiteSocialMedia({ socialMedia })}
      </Box>
    </Wrapper>
  );
};
