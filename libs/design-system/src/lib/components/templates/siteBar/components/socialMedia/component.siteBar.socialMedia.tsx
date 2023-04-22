import React from 'react';
import { Link, LoadingLine } from '../../../../index';
import { BoxSocialMedia, Header, Item } from '../../component.siteBar.styles';
import type { SocialMediaProps } from './../../component.siteBar.types';
import { functionSelectIcon } from '../../../../../utils';

export const SiteSocialMedia = ({ socialMedia }: { socialMedia?: SocialMediaProps }) => {
  if (socialMedia) {
    const { isLoading, list } = socialMedia;
    const showList =
      list?.length &&
      list.map((item, index) => (
        <Item key={index}>
          <Link href={item.url} title={item.typ}>
            {functionSelectIcon(item.typ, 20)}
          </Link>
        </Item>
      ));
    const showAnimationLoad = new Array(4).fill(undefined).map((_, index) => (
      <Item key={index}>
        <LoadingLine height="3rem" borderRadius="default" />
      </Item>
    ));

    return (
      <BoxSocialMedia>
        <Item>
          <Header>Social Media</Header>
        </Item>
        {isLoading ? showAnimationLoad : showList}
      </BoxSocialMedia>
    );
  } else return null;
};
