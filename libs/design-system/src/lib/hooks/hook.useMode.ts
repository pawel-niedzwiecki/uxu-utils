import {useState} from 'react';


export const useMode = () => {
  const setMode = (theme: string): void => {
    const dataTheme = document?.documentElement?.getAttribute('data-theme');
    const localStorageTheme = localStorage?.getItem('theme')
    if (dataTheme !== theme) document?.documentElement?.setAttribute('data-theme', theme)
    if (localStorageTheme !== theme) localStorage.setItem('theme', theme)
  };
  const getMode = (): string => {
    const mql = window?.matchMedia('(prefers-color-scheme: dark)').matches;
    const lsg = localStorage?.getItem('theme');
    let theme = "";

    if (lsg === "dark") {
      setMode("dark")
      theme = "dark"
    } else if (lsg === "light") {
      setMode("light")
      theme = "light"
    } else if (mql) {
      setMode("dark")
      theme = "dark"
    } else {
      setMode("light")
      theme = "light"
    }

    return theme
  };

  const [mode, setModeForce] = useState(getMode());

  return {mode, getMode, setMode, setModeForce}
};
