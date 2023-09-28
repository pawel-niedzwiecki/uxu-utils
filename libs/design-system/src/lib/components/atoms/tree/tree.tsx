import React, { createContext, useState, useMemo } from 'react';
import classnames from 'classnames';
import styles from './tree.module.scss';
import { TreeProps, ITreeContext } from './types'

export const TreeContext = createContext<ITreeContext> ({
  full: false,
  activeSlug: "",
  activeBranch: null,
  setActiveBranch: () => {/* empty */},
});

export const Tree: React.FC<TreeProps> = ({children, activeSlug, full}) => {
  const [activeBranch, setActiveBranch] = useState<string | null>(null);

  const contextValue = useMemo(() => ({
    activeBranch,
    setActiveBranch,
    activeSlug,
    full: !!full
  }), [activeBranch, activeSlug, full]);

  return (
    <TreeContext.Provider value={contextValue}>
      <ul className={classnames(styles.tree, {[styles.full]: full})}>{children}</ul>
    </TreeContext.Provider>
  );
};
