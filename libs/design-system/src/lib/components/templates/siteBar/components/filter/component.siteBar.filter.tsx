import React from 'react';

import { Link, LoadingLine } from '../../../../index';
import { BoxMenu, Header, Item } from '../../component.siteBar.styles';
import type { FilterProps } from '../../primary/component.siteBar.types';

export const SiteBarFilter = ({ filter }: { filter?: FilterProps }) => {
  if (filter) {
    const { isLoading, links } = filter;
    const showLinks =
      links?.length &&
      links.map((link, index) => (
        <Item key={index}>
          <Link type="button" color="primarry" variant={link.active ? 'disabled' : 'primary'} href={link.slug} title={link.title}>
            {link.title}
          </Link>
          <span>{link.score}</span>
        </Item>
      ));
    const showAnimationLoad = new Array(4).fill(undefined).map((_, index) => {
      return (
        <Item key={index}>
          <LoadingLine height="3rem" width="70%" borderRadius="default" />
          <span>0</span>
        </Item>
      );
    });

    return (
      <BoxMenu>
        <Item>
          <Header>Filtruj</Header>
        </Item>
        {isLoading ? showAnimationLoad : showLinks}
      </BoxMenu>
    );
  } else return null;
};
