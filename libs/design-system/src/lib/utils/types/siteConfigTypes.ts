import { SiteIdEnums } from "../enums";

export type AdsConfig = Partial<{
  enabled: boolean;
}>;

export type AnalyticsConfig = Partial<{
  gtmId: string | string[];
  hotjarId: string;
}>;

export type FacebookConfig = Partial<{
  oAuth: boolean;
  appId: string;
  clientToken: string;
  pageId: string;
  admins: string[];
  pixelId: string;
  accountName: string;
}>;

export type GoogleConfig = Partial<{
  oAuth: boolean;
  clientId: string;
}>;

export type TwitterConfig = Partial<{
  accountName: string;
}>;

export type InstagramConfig = Partial<{
  accountName: string;
}>;

export type YoutubeConfig = Partial<{
  accountName: string;
}>;

export type SocialConfig = Partial<{
  facebook?: FacebookConfig;
  google?: GoogleConfig;
  twitter?: TwitterConfig;
  instagram?: InstagramConfig;
  youtube?: YoutubeConfig;
}>;

export type GraphqlConfigTypes = Partial<{
  productId: SiteIdEnums;
  url: string;
}>;

type SiteConfig = {
  id: SiteIdEnums;
  locale: string,
  shortname: string;
  domain: string;
  slug: string;
  canonicalUrl: string;
  title: string;
  description: string;
  defaultCover: string;
  authEnabled: boolean;
  switchTheme: boolean;
  themeDefault: 'dark' | 'light';
};



export type SiteConfigTypes = Partial<{
  ads: AdsConfig;
  analytics: AnalyticsConfig;
  graphql: GraphqlConfigTypes;
  port: number;
  projectName: string;
  site: SiteConfig;
  social: SocialConfig;
  client: {
    locale: string,
    platform: {
      isMobile: boolean;
      isDesktop: boolean;
    }
  }
}>;
