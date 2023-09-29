import React from 'react';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import { Footer, Header, SiteBar, Container } from './../../index';
import { MobileVerticalModal, HeaderLeftComponents, HeaderRightComponents } from '../components'
import { menuItems } from "./consts";
import styles from './layoutPostView.module.scss';
import type { LayoutPostProps } from './types';

export function LayoutPostView({ topElement, siteBarLeft, footer, seo, children, searchEngine }: LayoutPostProps) {
  const router = useRouter ();
  const currentSlug = router?.pathname || '/';

  const isLinkActive = ( slug: string ) => currentSlug === slug;
  return (
    <>
      <NextSeo {...seo} />
      <Header
        mobileHamburgerMenu={MobileVerticalModal({ currentSlug, menuItems, isLinkActive })}
        leftComponents={HeaderLeftComponents( { menuItems, isLinkActive, searchEngine })}
        rightComponents={HeaderRightComponents({modalAlignment: 'right', switchModalButtonText: 'sugestia'})}
      />
      <div className={styles.menuSpacer}></div>
      {topElement}
      <Container>
        <div className={styles.container}>
          <div className={styles.siteBarLeft}>{siteBarLeft && <SiteBar site="left">{siteBarLeft}</SiteBar>}</div>
          <div style={{position: 'relative'}}>{children}</div>
        </div>
      </Container>
      <Footer {...footer} />
    </>
  );
}
