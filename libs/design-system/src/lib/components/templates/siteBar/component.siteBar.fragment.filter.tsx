import React from 'react';
import { DummyIMG, LoadingLine } from './../../../components';
import { BoxMenu, Header, Item } from './component.siteBar.style';
import { FilterProps } from './component.siteBar.props';

export const SiteBarFilter = ({ filter }: { filter?: FilterProps }) => {
  if (filter) {
    const { isLoading, links } = filter;
    const showLinks = links ? <p>img nexjs</p> : <Item><DummyIMG height='13rem' /></Item>;
    const showAnimationLoad = new Array(4).fill(undefined).map(() => {
      return (
        <Item>
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
