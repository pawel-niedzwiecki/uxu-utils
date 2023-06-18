import type { PropsWithChildren } from 'react'
import { ArrowDown, ArrowUp } from 'react-feather'
import React, { useState } from "react";
import styles from './component.collapse.module.scss';

type CollapseProps = PropsWithChildren<{
  label: { title: string, bold?: boolean };
  isOpen: boolean;
  className?: string;
  onClick: () => void;
}>

const Collapse = ( {children, label, isOpen, onClick, className, ...args}: CollapseProps ) => {
  return (
    <div className={`${styles.collapseComponent} ${isOpen ? styles.open : ""} ${className ? className : ""}`} {...args}>
      <div className={styles.collapseContent}>
        <button className={styles.collapseButton} style={{fontWeight: `${label?.bold ? "bold" : "normal"}`}} onClick={onClick}>{label.title} {isOpen ? <ArrowUp size={20}/> : <ArrowDown size={20}/>}</button>
        {children}
      </div>
    </div>
  );
};

type ItemProps = PropsWithChildren<{
  className?: string;
  label: { title: string, bold?: boolean };
}>

type CollapseGroupProps = PropsWithChildren<{
  items: ItemProps[];
  initialOpenIndex?: number;
}>

const CollapseGroup = ( {items, initialOpenIndex}: CollapseGroupProps ) => {
  const [openIndex, setOpenIndex] = useState<number | null> ( initialOpenIndex || null );

  return (
    <>
      {items.map ( ( item, index ) => (
        <Collapse
          {...item}
          key={index}
          isOpen={openIndex === index}
          onClick={() => setOpenIndex ( openIndex === index ? null : index )}
        >
          {item.children}
        </Collapse>
      ) )}
    </>
  );
};

export { Collapse, CollapseGroup };
