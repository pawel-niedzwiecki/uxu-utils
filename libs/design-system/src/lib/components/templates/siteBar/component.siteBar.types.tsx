export type CoverProps = {
  isLoading: boolean | null;
  img: { url: string | null; alt: string | null } | null;
};

export type FilterProps = {
  isLoading: boolean | null;
  links: { slug: string | null; title: string | null; active: boolean | null }[] | null;
};

export type SocialMediaProps = { isLoading: boolean | null; list: { url: string | null; typ: string | null }[] | null };
