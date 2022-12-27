import { useEffect, useState } from 'react';
import { hookUseMediaQuery } from 'hooks/useMediaQuery';
import { breakpoints } from 'theme';

const initialMedia = Object.keys(breakpoints).reduce((accumulator, key) => {
  return { ...accumulator, [key]: false };
}, {});

export const hookUseBreakpoints = () => {
  const [reactiveMedia, setReactiveMedia] = useState(initialMedia);

  const isActivity = Object.keys(reactiveMedia).reduce((accumulator, key) => {
    return { ...accumulator, [key]: hookUseMediaQuery({ query: `(min-width: ${breakpoints[key]}px)` }) };
  }, {});

  useEffect(() => {
    setReactiveMedia(isActivity);
  }, [isActivity]);

  return reactiveMedia;
};
