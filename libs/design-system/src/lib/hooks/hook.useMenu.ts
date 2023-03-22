import { useEffect, useState } from 'react';
import { useScrollY } from './hook.useScrollY';


export const useMenu = () => {
    const [hiddeMenu, setHiddeMenu] = useState(false);
    const { scrollYDirection, scrollY } = useScrollY({ wait: 50 });

    useEffect(() => {
      if (!hiddeMenu && (scrollY > 100) && (scrollYDirection === 'down')) setHiddeMenu(true);
      else if (hiddeMenu && scrollYDirection === 'up') setHiddeMenu(false);
    }, [hiddeMenu, scrollYDirection, scrollY]);

    return { hiddeMenu };

  }
;
