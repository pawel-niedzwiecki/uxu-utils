import { useEffect, useState } from 'react';
import { functionCheckIsDOM } from './../utils';

export const useMode = () => {
  const [mode, setModeForce] = useState('dark');

  const setMode = (theme: string): void => {
    functionCheckIsDOM(() => {
      localStorage.setItem('theme', theme);
      document?.documentElement?.setAttribute('data-theme', theme);
      setModeForce(theme);
    });
  };

  const getMode = (): void => {
    functionCheckIsDOM(() => {
      const lsg = localStorage?.getItem('theme');
      if (lsg) setMode(lsg);
    });
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => getMode(), []);

  return { mode, getMode, setMode, setModeForce };
};
