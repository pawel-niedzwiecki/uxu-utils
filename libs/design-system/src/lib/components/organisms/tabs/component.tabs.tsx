import React from 'react';
import {Link, Button} from 'components'
import type {Props, Tab} from './component.tabs.types';
import {List, Item} from './component.tabs.style';

export const Tabs: Props = ({tabs, ...args}, props) => {

  const btn = (data: Tab) => {
   if(typeof data.value === 'string') return <Link href={data.value} title={data.title} prefix={data?.icon}>{data.title}</Link>
  else return <Button title={data.title} prefix={data?.icon} onClick={data.value}>{data.title}</Button>
  }

  return (
    <List {...props} {...args}>
      {tabs?.map((data, i) => <Item className={data?.active ? 'active' : ""}>{btn(data)}</Item>)}
    </List>
  )
}

