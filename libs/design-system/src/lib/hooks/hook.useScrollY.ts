import { useCallback, useEffect, useState } from 'react';
import { Throttle } from './../utils';


type Props = {
  wait?: number
}


export const useScrollY = ({ wait = 10 }: Props) => {
    const [scrollYDirection, setScrollYDirection] = useState('');
    const [scrollY, setScrollY] = useState(0);
    const throttle = new Throttle({ wait });


    const direction = useCallback((): void => {
      const scrollYNew = document?.documentElement?.scrollTop;

      switch (scrollY > scrollYNew) {
        case true:
          setScrollYDirection('up');
          setScrollY(scrollYNew);
          break;
        case false:
          setScrollYDirection('down');
          setScrollY(scrollYNew);
          break;
      }

    }, [scrollY]);

    useEffect(() => {
        window.addEventListener('scroll', () => throttle.setLastTimeOut(direction));
        return () => window.removeEventListener('scroll', () => throttle.setLastTimeOut(direction));
      }, [scrollY],
    );
    return { scrollYDirection, scrollY };

  }
;
