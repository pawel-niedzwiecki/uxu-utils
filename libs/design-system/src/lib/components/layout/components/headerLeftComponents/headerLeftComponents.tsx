import React from 'react';
import { Logo, Link, SearchEngineInModal } from '../../../index';
import styles from './headerLeftComponents.module.scss';
import classnames from 'classnames';
import type { HeaderLeftComponentsProps } from './types';


export function HeaderLeftComponents({ menuItems, isLinkActive, searchEngine }: HeaderLeftComponentsProps) {

  const createNavLink = ( slug: string, title: string ) => (
    <li key={slug}>
      <Link href={slug} title={title} className={classnames ( {[ styles.active ]: isLinkActive ( slug )} )}>
        {title}
      </Link>
    </li>
  );

  return (
    <>
      <Link href="/" title="wTrasie" className={classnames(styles.logoMobile, styles.logo)}>
        <Logo brand="wTrasieShort" className={styles.logo}/>
      </Link>
      <Link href="/" title="wTrasie" className={classnames(styles.logoDesktop, styles.logo)}>
        <Logo brand="wTrasie" className={styles.logo}/>
      </Link>
        <nav className={styles.nav}>
          {menuItems.map(({ slug, title }) => createNavLink(slug, title))}
        </nav>
      <SearchEngineInModal
        className={styles.wrapperSearch}
        defaultSuggestions={searchEngine?.defaultSuggestions}
        onSearchQuery={searchEngine?.onSearchQuery}
      />
    </>
  );
};
