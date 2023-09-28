import { useContext } from 'react';
import { SiteConfigTypes } from '../utils';
import { SiteConfigContext } from '../providers/ConfigSiteProvider';

export function useSiteConfig(): SiteConfigTypes {
  return useContext(SiteConfigContext);
}
