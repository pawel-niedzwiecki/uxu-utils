import React from 'react';

import { Link, LoadingLine } from './../../../components';
import { BoxMenu, Header, Item } from './component.siteBar.style';
import { FilterProps } from './component.siteBar.props';

export const SiteBarFilter = ({ filter }: { filter?: FilterProps }) => {
  if (filter) {
    const { isLoading, links } = filter;
    const showLinks = links?.length && links.map((link) => (
      <Item>
        <Link
          type='button'
          color='primarry'
          variant={link.active ? 'disabled' : 'primary'} href={link.slug}
          title={link.title}>{link.title}</Link>
        <span>{link.score}</span>
      </Item>
    ));
    const showAnimationLoad = new Array(4).fill(undefined).map((_, i) => {
      return (
        <Item key={i}>
          <LoadingLine height='3rem' width='70%' borderRadius='default' /><span>0</span>
        </Item>);
    });

    return (
      <BoxMenu>
        <Item><Header>Filtruj</Header></Item>
        {isLoading ? showAnimationLoad : showLinks}
      </BoxMenu>
    );
  } else return null;
};
