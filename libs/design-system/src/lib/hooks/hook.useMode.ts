import { useEffect, useState } from 'react';

export const UseMode = (): string => {
  const getMode = (): string | null => {
    if (window?.matchMedia('(prefers-color-scheme: dark)')) return 'dark';
    else if (typeof window !== 'undefined') return 'light';
    return null;
  };

  const [matches, setMatches] = useState(getMode());

  useEffect(() => {
    const matchMedia = window.matchMedia('(prefers-color-scheme: dark)');
    matchMedia.addEventListener('change', () => setMatches(getMode()));
    return () => matchMedia.removeEventListener('change', () => setMatches(getMode()));
  }, []);

  return <string>matches;
};
