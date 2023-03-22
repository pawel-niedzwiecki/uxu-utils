import React from 'react';
import { Facebook, Twitter, Youtube } from 'react-feather';
import { Link, LoadingLine } from './../../../components';
import { Box, BoxSocialMedia, Header, Item, Wrapper } from './component.siteBar.style';
import { useMenu } from '../../../hooks';
import { Props } from './component.siteBar.props';
import { SiteBarCover } from './component.siteBar.fragment.cover';
import { SiteBarFilter } from './component.siteBar.fragment.filter';

export const SiteBar: Props = ({ data: { cover, filter, socialMedia } }) => {
  const { hiddeMenu } = useMenu();

  return (
    <Wrapper>
      <Box top={hiddeMenu ? 15 : 115}>
        {SiteBarCover({ cover })}
        {SiteBarFilter({ filter })}
        <BoxSocialMedia>
          <Item><Header>Social media</Header></Item>
          <Item><LoadingLine height='3rem' borderRadius='default' /></Item>
          <Item><LoadingLine height='3rem' borderRadius='default' /></Item>
          <Item><LoadingLine height='3rem' borderRadius='default' /></Item>
          <Item><LoadingLine height='3rem' borderRadius='default' /></Item>
          <Item><Link href='/' title='facebook'><Facebook /></Link></Item>
          <Item><Link href='/' title='youtube'><Youtube /></Link></Item>
          <Item><Link href='/' title='twitter'><Twitter /></Link></Item>
        </BoxSocialMedia>
      </Box>
    </Wrapper>
  );
};
