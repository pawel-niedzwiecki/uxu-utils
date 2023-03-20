import React from 'react';
import { Button, Link } from './../../../components';
import type { Props, Tab } from './component.tabs.types';
import { Item, List } from './component.tabs.style';

export const Tabs: Props = ({ tabs, ...args }, props) => {

  const btn = (data: Tab) => {
    if (typeof data.value === 'string') return <Link href={data.value} title={data.title} prefix={data?.icon}>{data.title}</Link>;
    else return <Button prefix={data?.icon} onClick={data.value}>{data.title}</Button>;
  };

  return (
    <List {...props} {...args}>
      {tabs?.map((data, i) => <Item className={data?.active ? 'active' : ''} key={i}>{btn(data)}</Item>)}
    </List>
  );
};


