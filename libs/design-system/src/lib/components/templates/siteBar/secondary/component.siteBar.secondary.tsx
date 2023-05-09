import React, { useState } from 'react';
import { ArrowRight } from 'react-feather';
import { Button } from '../../../index';
import { Box, Wrapper } from '../component.siteBar.styles';
import { ComponentSiteBarSecondaryProps } from './component.siteBar.types';
import { ContainerForAds } from '../components';

export const SiteBarSecondary: ComponentSiteBarSecondaryProps = ({ ads = true }) => {
  const [open, setOpen] = useState(false);
  if (!ads) return null;
  return (
    <Wrapper open={open}>
      <Box top={35}>
        <Button variant="primary" className="switch" onClick={() => setOpen(!open)}>
          <ArrowRight />
        </Button>
        {ContainerForAds({ ads })}
      </Box>
    </Wrapper>
  );
};
