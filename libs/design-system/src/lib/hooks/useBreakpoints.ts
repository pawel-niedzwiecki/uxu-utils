import { useEffect, useState } from 'react';
import { useMediaQuery } from './useMediaQuery';

const initialMedia = {
  isMobile: false,
  isTabletOrMobile: false,
  isDesktopOrLaptop: false,
};

export const useBreakpoints = () => {
  const [reactiveMedia, setReactiveMedia] = useState(initialMedia);

  const isMobile = useMediaQuery({
    query: `(max-width: 768px)`,
  });
  const isTabletOrMobile = useMediaQuery({
    query: `(max-width: 1279px)`,
  });
  const isDesktopOrLaptop = useMediaQuery({
    query: `(min-width: 1280px)`,
  });

  useEffect(() => {
    setReactiveMedia({
      isMobile,
      isTabletOrMobile,
      isDesktopOrLaptop,
    });
  }, [isMobile, isTabletOrMobile, isDesktopOrLaptop]);

  return {
    isDesktopOrLaptop: reactiveMedia.isDesktopOrLaptop,
    isTabletOrMobile: reactiveMedia.isTabletOrMobile,
    isMobile: reactiveMedia.isMobile,
  };
};
