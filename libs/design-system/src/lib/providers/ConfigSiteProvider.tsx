import type { PropsWithChildren } from 'react';
import React, { useState } from 'react';
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
    images: [],
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
    },
    osInfo: {
      isWindows: false,
      isLinux: false,
      isMacOS: false,
    }
  }
}


export const SiteConfigContext: React.Context<SiteConfigTypes> = React.createContext(initialSiteConfigContext);

type SiteConfigProviderProps = PropsWithChildren<{
  SITE_CONFIG: (clientLocale: string, isMobilePlatform: boolean, router: NextRouter, osInfo: { isWindows: boolean, isLinux: boolean, isMacOS: boolean }) => SiteConfigTypes;
  clientLocale: string;
  isMobilePlatform: boolean;
  osInfo: { isWindows: boolean, isLinux: boolean, isMacOS: boolean }
}>;

export function SiteConfigProvider({ SITE_CONFIG, children, clientLocale, isMobilePlatform, osInfo }: SiteConfigProviderProps) {
  const router = useRouter();
  const [config, setConfig] = useState(() => SITE_CONFIG(clientLocale, isMobilePlatform, router, osInfo));

  return (
    <SiteConfigContext.Provider value={config}>
      {children}
    </SiteConfigContext.Provider>
  );
}
