import React, { useState } from 'react';
import { Box, Wrapper } from './component.siteBar.style';
import { useMenu } from '../../../hooks';
import { Button } from '../../../components';
import { ArrowRight } from 'react-feather';
import { Props } from './component.siteBar.props';
import { SiteBarCover } from './component.siteBar.fragment.cover';
import { SiteBarFilter } from './component.siteBar.fragment.filter';
import { SiteSocialMedia } from './component.siteBar.fragment.socialMedia';

export const SiteBar = ({ cover, filter, socialMedia, alert }: Props) => {
  const { hiddeMenu } = useMenu();
  const [open, setOpen] = useState(false);

  if (cover || filter || socialMedia) return (
    <Wrapper open={open} hiddeMenu={hiddeMenu}>
      <Box top={hiddeMenu ? 15 : alert ? 108 : 209}>
        <Button
          variant='primary'
          className='switch'
          onClick={() => setOpen(!open)}
        >
          <ArrowRight />
        </Button>
        {SiteBarCover({ cover })}
        {SiteBarFilter({ filter })}
        {SiteSocialMedia({ socialMedia })}
      </Box>
    </Wrapper>
  );
  else return null;
};
