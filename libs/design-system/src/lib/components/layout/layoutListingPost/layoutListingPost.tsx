import React from 'react';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import { useSiteConfig } from './../../../hooks';
import { Footer, Header, SiteBar, Container } from './../../index';
import { MobileVerticalModal, HeaderLeftComponents, HeaderRightComponents } from '../components'
import { menuItems } from "./consts";
import styles from './layoutListingPost.module.scss';
import type { LayoutListingPostProps } from './types';

export function LayoutListingPost({ topElement, siteBarLeft, siteBarRight, footer, seo, children, searchEngine }: LayoutListingPostProps) {
  const router = useRouter ();
  const currentSlug = router?.pathname || '/';

  const isLinkActive = ( slug: string ) => currentSlug === slug;
  return (
    <>
      <NextSeo {...seo} />
      <Header
        mobileHamburgerMenu={MobileVerticalModal({ currentSlug, menuItems, isLinkActive })}
        leftComponents={HeaderLeftComponents( { menuItems, isLinkActive, searchEngine })}
        rightComponents={HeaderRightComponents({ modalAlignment: 'right', switchModalButtonText: 'sugestia' })}
      />
      <div className={styles.menuSpacer}></div>
      {topElement}
      <Container>
        <div className={styles.container}>
          <div className={styles.siteBarLeft}>{siteBarLeft && <SiteBar site="left">{siteBarLeft}</SiteBar>}</div>
          <div style={{position: 'relative'}}>{children}</div>
          <div className={styles.siteBarRight}>{siteBarRight && <SiteBar site="right">{siteBarRight}</SiteBar>}</div>
        </div>
      </Container>
      <Footer {...footer} />
    </>
  );
}
