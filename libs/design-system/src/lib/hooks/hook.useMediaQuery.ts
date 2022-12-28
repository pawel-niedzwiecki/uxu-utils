import { useEffect, useState } from 'react';

export const UseMediaQuery = ({ query }: { query: string }): boolean => {
  const getMatches = (query: string): boolean => {
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches;
    }
    return false;
  };

  const [matches, setMatches] = useState<boolean>(getMatches(query));

  useEffect(() => {
    const matchMedia = window.matchMedia(query);
    matchMedia.addEventListener('change', () => setMatches(getMatches(query)));

    return () => {
      matchMedia.removeEventListener('change', () => setMatches(getMatches(query)));
    };
  }, [query]);

  return matches;
};
