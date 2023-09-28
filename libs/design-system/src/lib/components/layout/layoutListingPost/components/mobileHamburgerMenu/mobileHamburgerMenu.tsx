import React from 'react';
import { Tree, Branch } from './../../../../index';
import { menuItems } from "./../../consts";



type MobileVerticalModalProps = {
  currentSlug: string;
  menuItems: typeof menuItems;
  isLinkActive: (slug: string) => boolean;
};

export function MobileVerticalModal({ currentSlug, menuItems, isLinkActive }: MobileVerticalModalProps) {
 return (
    <Tree activeSlug={currentSlug} full>
      {menuItems.map (({ slug, title }: {slug: string, title: string }) => (
        <Branch key={slug} title={title} url={slug} active={isLinkActive ( slug )}/>
      ) )}
    </Tree>
  )
}
