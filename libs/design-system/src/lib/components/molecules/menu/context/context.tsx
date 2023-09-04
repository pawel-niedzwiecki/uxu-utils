// context/context.tsx

import { createContext, useContext } from 'react';
import { MenuContextValue } from './types'

const initalDefaultMenuContext: MenuContextValue = {
  isOpen: false,
  setIsOpen: () => { /** empty **/ },
  menuPosition: 'bottom',
  containerSize: { width: 0, height: 0 },
};

export const Context = createContext<MenuContextValue>(initalDefaultMenuContext);

export const useMenuContext = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error('useMenuContext must be used within a MenuProvider');
  }
  return context;
};
