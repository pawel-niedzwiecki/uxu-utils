import React, { useState } from 'react';
import classnames from 'classnames';
import { useSiteConfig } from './../../../hooks';
import { Modal, Hamburger } from './../../atoms';
import { HeaderProps } from './header.types';
import styles from './header.module.scss';

export function Header({ leftComponents, rightComponents, mobileHamburgerMenu }: HeaderProps) {
  const { client } = useSiteConfig();
  const [isHamburgerOpen, setHamburgerOpen] = useState(false);
  const isMobile = client?.platform?.isMobile;

  const handleHamburgerClick = () => {
    setHamburgerOpen(prevState => !prevState);
  };

  const renderRightAlignedComponents = () => (
    !isMobile ? rightComponents : (
      mobileHamburgerMenu && (
        <Hamburger open={isHamburgerOpen} onClick={handleHamburgerClick} />
      )
    )
  );

  return (
    <>
      <header className={styles.header}>
        <div className={classnames('container', styles.headerContainer)}>
          <div className={styles.left}>{leftComponents}</div>
          <div className={styles.right}>
            {renderRightAlignedComponents()}
          </div>
        </div>
      </header>
      {mobileHamburgerMenu && isMobile && (
        <Modal open={isHamburgerOpen} className={styles.modalMenu}>
          <div className={classnames('container', styles.modalMenuContainer)}>
            {mobileHamburgerMenu}
            {isMobile && rightComponents}
          </div>
        </Modal>
      )}
    </>
  );
}
