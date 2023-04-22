import React, { useState } from 'react';
import { ArrowRight } from 'react-feather';
import { Button } from '../../../index';
import { Box, Wrapper } from './../component.siteBar.styles';
import { ComponentProps } from './component.siteBar.primary.types';
import { ContainerForAds, SiteBarCover, SiteBarFilter, SiteSocialMedia } from './../components';

export const SiteBarPrimary = ({ cover, filter, socialMedia, ads = true }: ComponentProps) => {
  const [open, setOpen] = useState(false);

  if (cover || filter || socialMedia)
    return (
      <Wrapper open={open}>
        <Box top={35}>
          <Button variant="primary" className="switch" onClick={() => setOpen(!open)}>
            <ArrowRight />
          </Button>
          {SiteBarCover({ cover })}
          {SiteBarFilter({ filter })}
          {SiteSocialMedia({ socialMedia })}
          {ContainerForAds({ ads })}
        </Box>
      </Wrapper>
    );
  else return null;
};
