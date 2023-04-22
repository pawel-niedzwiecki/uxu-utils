import { useEffect, useState } from 'react';

type Props = {
  wait?: number;
};

export const useScrollY = ({ wait = 0 }: Props) => {
  let [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', () => setScrollY(document?.documentElement?.scrollTop));
    return () => window.removeEventListener('scroll', () => setScrollY(document?.documentElement?.scrollTop));
  }, []);
  return { scrollY };
};
