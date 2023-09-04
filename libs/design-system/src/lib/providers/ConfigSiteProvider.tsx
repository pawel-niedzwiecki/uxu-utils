import type { PropsWithChildren } from 'react';
import React, { useState, useEffect, useContext } from 'react';
import { NextRouter, useRouter } from 'next/router';
import { SiteConfigTypes, SiteIdEnums } from './../utils'


const initialSiteConfigContext:SiteConfigTypes = {
  ads: {
    enabled: true
  },
  analytics: {
    gtmId: ""
  },
  graphql: {
    productId: SiteIdEnums.DEFAULT,
    url: '',
  },
  port: 4200,
  projectName: '',
  site: {
    id: SiteIdEnums.DEFAULT,
    locale: '',
    domain: '',
    slug:   "/",
    defaultCover: '/defaultCover.png',
    canonicalUrl: ``,
    title: '',
    shortname: '',
    description: '',
    authEnabled: false,
    switchTheme: true,
    themeDefault: 'dark',
  },
  social: {
    facebook: {
      pageId: ''
    }
  },
  client: {
    locale: 'pl',
    platform: {
      isDesktop: false,
      isMobile: false,
    }
  }
}


export const SiteConfigContext: React.Context<SiteConfigTypes> = React.createContext(initialSiteConfigContext);

type SiteConfigProviderProps = PropsWithChildren<{
  SITE_CONFIG: (clientLocale: string, isMobilePlatform: boolean, router: NextRouter) => SiteConfigTypes;
  clientLocale: string;
  isMobilePlatform: boolean;
}>;

export function SiteConfigProvider({ SITE_CONFIG, children, clientLocale, isMobilePlatform }: SiteConfigProviderProps) {
  const router = useRouter();
  const [config, setConfig] = useState(() => SITE_CONFIG(clientLocale, isMobilePlatform, router));

  useEffect(() => {
    setConfig(SITE_CONFIG(clientLocale, isMobilePlatform, router));
  }, [clientLocale, isMobilePlatform, router]);

  return (
    <SiteConfigContext.Provider value={config}>
      {children}
    </SiteConfigContext.Provider>
  );
}
