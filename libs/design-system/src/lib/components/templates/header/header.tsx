import React, { useState } from 'react';
import classnames from 'classnames';
import { Modal, Hamburger } from './../../atoms';
import { HeaderProps } from './header.types';
import styles from './header.module.scss';

export function Header({ leftComponents, rightComponents, mobileHamburgerMenu }: HeaderProps) {
  const [isHamburgerOpen, setHamburgerOpen] = useState(false);

  const handleHamburgerClick = () => {
    setHamburgerOpen(prevState => !prevState);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={classnames('container', styles.headerContainer)}>
          <div className={styles.left}>{leftComponents} {mobileHamburgerMenu && <Hamburger open={isHamburgerOpen} onClick={handleHamburgerClick} className={styles.hamburger} />}</div>
          <div className={styles.right}>{rightComponents}</div>
        </div>
      </header>
      {mobileHamburgerMenu && (
        <Modal open={isHamburgerOpen} className={styles.modalMenu}>
          <div className={classnames('container', styles.modalMenuContainer)}>
            {mobileHamburgerMenu}
          </div>
        </Modal>
      )}
    </>
  );
}
