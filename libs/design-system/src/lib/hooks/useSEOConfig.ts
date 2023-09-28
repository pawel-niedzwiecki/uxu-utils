import { useSiteConfig } from "./index";


type UseSEOConfigProps = {
  title?: string,
  description?: string,
  type?: 'website',
  locale?: string,
  images?: Array<{ url: string }>,
  url?: string
}

export function useSEOConfig({ title, description, type = 'website', locale, images, url }: UseSEOConfigProps) {
  const { site } = useSiteConfig();

  const defaultUrl = site?.canonicalUrl || '';
  const defaultTitle = site?.title || '';
  const defaultDescription = site?.description || '';
  const defaultLocale = site?.locale || 'en';
  const defaultImages = site?.images || [];

  return {
    openGraph: {
      url: url || defaultUrl,
      title: title || defaultTitle,
      description: description || defaultDescription,
      type: type,
      locale: locale || defaultLocale,
      images: images || defaultImages,
    },
    title: title || defaultTitle,
    description: description || defaultDescription,
  };
}
