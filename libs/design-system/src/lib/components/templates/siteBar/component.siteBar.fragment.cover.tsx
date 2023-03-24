import React from 'react';
import Image from 'next/image';
import { DummyIMG, LoadingLine } from './../../../components';
import { BoxCover, BoxImg, Header, Item } from './component.siteBar.style';
import { CoverProps } from './component.siteBar.props';

export const SiteBarCover = ({ cover }: { cover?: CoverProps }) => {
  if (cover) {
    const { isLoading, img } = cover;
    const showImg = img ? (
        <Item>
          <BoxImg>
            <Image layout='fill' objectFit='cover' alt={img.alt} src={img.url} />
          </BoxImg>
        </Item>
      )
      : (
        <Item>
          <DummyIMG height='13rem' />
        </Item>
      );

    return (
      <BoxCover>
        <Item><Header>Cover</Header></Item>
        {isLoading ? <Item><LoadingLine height='13rem' borderRadius='default' /></Item> : showImg}
      </BoxCover>
    );
  } else return null;
};
