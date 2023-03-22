import React from 'react';
import { DummyIMG, LoadingLine } from './../../../components';
import { BoxCover, Header, Item } from './component.siteBar.style';
import { CoverProps } from './component.siteBar.props';

export const SiteBarCover = ({ cover }: { cover?: CoverProps }) => {
  if (cover) {
    const { isLoading, img } = cover;
    const showImg = img ? <p>img nexjs</p> : <Item><DummyIMG height='13rem' /></Item>;

    return (
      <BoxCover>
        <Item><Header>Cover</Header></Item>
        {isLoading ? <Item><LoadingLine height='13rem' borderRadius='default' /></Item> : showImg}
      </BoxCover>
    );
  } else return null;
};
