import {useEffect, useState, useCallback} from 'react';
import {throttle} from './../utils'

type UseScrollYProps = { wait?: number }

export const useScrollY = ({wait = 200}: UseScrollYProps) => {
    const [scrollYDirection, setScrollYDirection] = useState("");
    const [scrollY, setScrollY] = useState(0);

    const direction = useCallback((): void => {
      const scrollYNew = document?.documentElement?.scrollTop;


      switch (scrollY > scrollYNew) {
        case true:
          setScrollY(scrollYNew);
          setScrollYDirection('up');
          break;
        case false:
          setScrollY(scrollYNew);
          setScrollYDirection('down');
          break;
      }

    }, [scrollY])

    useEffect(() => {
        window.addEventListener('scroll', throttle(direction, wait));
        return () => window.removeEventListener('scroll', throttle(direction, wait));
      }, [scrollY, direction, wait]
    )
    return {scrollYDirection, scrollY}

  }
;
