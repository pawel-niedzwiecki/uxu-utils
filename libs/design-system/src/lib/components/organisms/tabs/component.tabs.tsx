import React from 'react';
import { Button, Link } from './../../../components';
import type { Tab } from './component.tabs.types';
import { ComponentTabsType } from './component.tabs.types';
import { Item, List } from './component.tabs.styles';

export const Tabs: ComponentTabsType = ({ tabs, ...args }) => {
  const btn = (data: Tab) => {
    if (typeof data.value === 'string')
      return (
        <Link href={data.value} title={data.title} prefix={data?.icon} size="small">
          <span>{data.title}</span>
        </Link>
      );
    else
      return (
        <Button prefix={data?.icon} onClick={data.value} size="small">
          <span>{data.title}</span>
        </Button>
      );
  };

  return (
    <List {...args}>
      {tabs?.map((data, i) => (
        <Item className={data?.active ? 'active' : ''} key={i}>
          {btn(data)}
        </Item>
      ))}
    </List>
  );
};
