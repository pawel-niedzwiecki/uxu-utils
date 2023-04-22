import type { PropsWithChildren } from 'react';
import type { CoverProps, FilterProps, SocialMediaProps } from './../component.siteBar.types';

export type SpecialProps = {
  ads?: boolean;
  cover?: CoverProps;
  filter?: FilterProps;
  socialMedia?: SocialMediaProps;
};

export type ComponentProps = PropsWithChildren<SpecialProps>;
