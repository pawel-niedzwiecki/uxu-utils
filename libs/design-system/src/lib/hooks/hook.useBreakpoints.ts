import { useEffect, useState } from 'react';
import { UseMediaQuery } from './index';
import { breakpoints } from './../theme';

const initialMedia = Object.keys(breakpoints).reduce((accumulator, key) => {
  return { ...accumulator, [key]: false };
}, {});

export const UseBreakpoints = () => {
  const [reactiveMedia, setReactiveMedia] = useState(initialMedia);

  const isActivity = Object.keys(reactiveMedia).reduce((accumulator, key) => {
    return { ...accumulator, [key]: UseMediaQuery({ query: `(min-width: ${breakpoints[key]}px)` }) };
  }, {});

  useEffect(() => {
    setReactiveMedia(isActivity);
  }, [isActivity]);

  return reactiveMedia;
};
