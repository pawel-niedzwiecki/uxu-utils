import React, { useState } from 'react';
import classnames from 'classnames';
import { useSiteConfig } from './../../../hooks';
import { HeaderProps } from './header.types';
import { Modal } from './../../atoms/modal';
import { Hamburger } from './../../atoms/hamburger';
import styles from './header.module.scss';

export function Header({ leftAlignedComponents, rightAlignedComponents, mobileVerticalModal }: HeaderProps) {
  const { client } = useSiteConfig();
  const [isHamburgerOpen, setHamburgerOpen] = useState(false);
  const isMobile = client?.platform?.isMobile;

  const handleHamburgerClick = () => {
    setHamburgerOpen(prevState => !prevState);
  };

  const renderRightAlignedComponents = () => (
    !isMobile ? rightAlignedComponents : (
      mobileVerticalModal && (
        <Hamburger open={isHamburgerOpen} onClick={handleHamburgerClick} />
      )
    )
  );

  return (
    <>
      <header className={styles.header}>
        <div className={classnames('container', styles.headerContainer)}>
          <div className={styles.left}>{leftAlignedComponents}</div>
          <div className={styles.right}>
            {renderRightAlignedComponents()}
          </div>
        </div>
      </header>
      {mobileVerticalModal && isMobile && (
        <Modal open={isHamburgerOpen} className={styles.modalMenu}>
          <div className={classnames('container', styles.modalMenuContainer)}>
            {mobileVerticalModal}
            {isMobile && rightAlignedComponents}
          </div>
        </Modal>
      )}
    </>
  );
}
