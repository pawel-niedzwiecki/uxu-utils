import React from 'react';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import { useSiteConfig } from './../../../hooks';
import { Footer, Header, SiteBar, Container } from './../../index';
import { MobileVerticalModal } from './components/mobileHamburgerMenu'
import { HeaderLeftComponents } from './components/headerLeftComponents'
import { HeaderRightComponents } from './components/headerRightComponents'
import { menuItems } from "./consts";
import styles from './layoutListingPost.module.scss';
import type { LayoutListingPostProps } from './types';

export function LayoutListingPost({ topElement, siteBarLeft, siteBarRight, footer, seo, children, searchEngine }: LayoutListingPostProps) {
  const router = useRouter ();
  const currentSlug = router?.pathname || '/';
  const { client} = useSiteConfig ();
  const isDesktop = client?.platform.isDesktop || false;
  const isLinkActive = ( slug: string ) => currentSlug === slug;
  return (
    <>
      <NextSeo {...seo} />
      <Header
        mobileHamburgerMenu={MobileVerticalModal({ currentSlug, menuItems, isLinkActive })}
        leftComponents={HeaderLeftComponents( {isDesktop, menuItems, isLinkActive, searchEngine })}
        rightComponents={isDesktop && HeaderRightComponents({modalAlignment: 'right', switchModalButtonText: 'sugestia'})}
      />
      <div className={styles.menuSpacer}></div>
      {topElement}
      <Container>
        <div className={styles.container}>
          {(isDesktop && siteBarLeft) && <SiteBar site="left">{siteBarLeft}</SiteBar>}
          <div style={{position: 'relative'}}>{children}</div>
          {(isDesktop && siteBarRight) && <SiteBar site="right">{siteBarRight}</SiteBar>}
        </div>
      </Container>
      <Footer {...footer} />
    </>
  );
}
