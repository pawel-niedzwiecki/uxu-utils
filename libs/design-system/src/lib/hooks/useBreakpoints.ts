import { useEffect, useState } from 'react';
import { useMediaQuery } from 'hooks/useMediaQuery';
import { breakpoints } from 'theme';

const initialMedia = Object.keys(breakpoints).reduce((accumulator, key) => {
  return { ...accumulator, [key]: false };
}, {});

export const useBreakpoints = () => {
  const [reactiveMedia, setReactiveMedia] = useState(initialMedia);

  const isActivity = Object.keys(reactiveMedia).reduce((accumulator, key) => {
    return { ...accumulator, [key]: useMediaQuery({ query: `(min-width: ${breakpoints[key]}px)` }) };
  }, {});

  useEffect(() => {
    setReactiveMedia(isActivity);
  }, [isActivity]);

  return reactiveMedia;
};
