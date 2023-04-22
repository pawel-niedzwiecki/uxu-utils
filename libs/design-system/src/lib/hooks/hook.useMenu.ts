import { useScrollY } from './hook.useScrollY';
import { useEffect, useState } from 'react';

export const useMenu = () => {
  const { scrollY } = useScrollY({ wait: 0 });
  const [hidde, setHidde] = useState(-250);

  useEffect(() => {
    scrollY / 1.5 < 250 && (250 - scrollY / 1.5) / -1 && setHidde(Math.floor((250 - scrollY / 1.5) / -1));
  }, [scrollY]);

  return { hidde };
};
