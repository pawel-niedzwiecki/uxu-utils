import { useEffect, useState } from 'react';
import { checkIsDOM } from './../utils';


export const useMode = () => {
  const [mode, setModeForce] = useState('dark');

  const setMode = (theme: string): void => {
    checkIsDOM(() => {
      localStorage.setItem('theme', theme);
      document?.documentElement?.setAttribute('data-theme', theme);
      setModeForce(theme);
    });
  };


  const getMode = (): void => {
    checkIsDOM(() => {
      const mql = window?.matchMedia('(prefers-color-scheme: dark)').matches;
      const lsg = localStorage?.getItem('theme');

      if (lsg) setMode(lsg);
      else setMode(mql ? 'dark' : 'light');
    });
  };

  useEffect(() => getMode(), []);

  return { mode, getMode, setMode, setModeForce };
};
