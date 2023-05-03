export type CoverProps = {
  isLoading: boolean;
  img: { url: string; alt: string };
};

export type FilterProps = {
  isLoading: boolean;
  links: { slug: string; title: string; active: boolean }[];
};

export type SocialMediaProps = { isLoading: boolean; list: { url: string; typ: string }[] };
