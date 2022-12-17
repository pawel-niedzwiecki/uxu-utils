import { useEffect, useState } from 'react';

export const useMode = (): string => {
  const getMode = (): string | boolean => {
    if (window?.matchMedia('(prefers-color-scheme: dark)')) return 'dark'
    else if(typeof window !== "undefined") return 'light'
    return false
  };

  const [matches, setMatches] = useState<string | boolean>(getMode());

  useEffect(() => {
    const matchMedia = window.matchMedia('(prefers-color-scheme: dark)')
    matchMedia.addEventListener('change', () => setMatches(getMode()));
    return () => matchMedia.removeEventListener('change', () => setMatches(getMode()));
  }, []);

  return <string>matches;
};
