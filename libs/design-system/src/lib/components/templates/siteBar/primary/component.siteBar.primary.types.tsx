import type { ComponentWithProps } from "../../../../utils";
import type { CoverProps, FilterProps, SocialMediaProps } from './../component.siteBar.types';

export type SiteBarPrimaryDataTypes = {
  ads: boolean | null;
  cover: CoverProps | null;
  filter: FilterProps | null;
  socialMedia: SocialMediaProps | null;
};

export type ComponentSiteBarPrimaryProps = ComponentWithProps<SiteBarPrimaryDataTypes>;
