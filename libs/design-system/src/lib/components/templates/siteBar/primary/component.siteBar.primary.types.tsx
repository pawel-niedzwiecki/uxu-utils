import type { ComponentWithProps } from "../../../../utils";
import type { CoverProps, FilterProps, SocialMediaProps } from './../component.siteBar.types';

export type SiteBarPrimaryDataTypes = {
  ads?: boolean;
  cover?: CoverProps;
  filter?: FilterProps;
  socialMedia?: SocialMediaProps;
};

export type ComponentSiteBarPrimaryProps = ComponentWithProps<SiteBarPrimaryDataTypes>;
