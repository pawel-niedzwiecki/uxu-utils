// component/container.tsx

import React, { useState, useRef, useEffect } from 'react';
import { Context } from '../../context/context';
import { MenuContainerProps } from "./types";
import styles from './menuContainer.module.scss'

export function MenuContainer( { children, menuPosition = 'bottom' }: MenuContainerProps ) {
  const [isOpen, setIsOpen] = useState<boolean> ( false );
  const [containerSize, setContainerSize] = useState<{ width: number, height: number }> ( {width: 0, height: 0} );
  const containerRef = useRef<HTMLDivElement> ( null );

  const toggleMenu = () => setIsOpen ( !isOpen );

  useEffect ( () => {
    if (containerRef?.current) {
      const {width, height} = containerRef.current.getBoundingClientRect ();
      setContainerSize ( {width, height} );
    }
  }, [containerRef] );

  return (
    <Context.Provider value={{isOpen, setIsOpen, menuPosition, containerSize}}>
      <div ref={containerRef} onClick={toggleMenu} className={styles.container}>
        {children}
      </div>
    </Context.Provider>
  );
}
