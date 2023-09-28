import React, { useLayoutEffect, useRef, useState } from 'react';
import { useMenuContext } from '../../context/context';
import { MenuPopupProps, Position, Size } from "./types";
import { calculatePosition } from "./utils/calculatePosition";
import styles from './menuPopup.module.scss';
import classNames from 'classnames';

export function MenuPopup({ children, className }: MenuPopupProps) {
  const [menuPopupSize, setMenuPopupSize] = useState<Size>({ width: 0, height: 0 });
  const [position, setPosition] = useState<Position>({ top: '0', left: '0' });
  const { isOpen, containerSize, menuPosition } = useMenuContext();
  const menuPopupRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (menuPopupRef.current && isOpen && menuPopupSize.width === 0 && menuPopupSize.height === 0) {
      const { width, height } = menuPopupRef.current.getBoundingClientRect();
      setMenuPopupSize({ width, height });
    }
  }, [isOpen]);

  useLayoutEffect(() => {
    setPosition(calculatePosition(menuPosition, menuPopupSize, containerSize));
  }, [menuPosition, menuPopupSize, containerSize]);

  const popupClassName = classNames(styles.popup, className ? className : undefined);

  return (
    <div ref={menuPopupRef} className={popupClassName}>
      {children}
      <style jsx>{`
        div {
          top: ${position.top}${typeof position.top === 'number' ? 'px' : ''};
          left: ${position.left}${typeof position.left === 'number' ? 'px' : ''};
          display: ${isOpen ? 'block' : 'none'};
        }
      `}</style>
    </div>
  );
}
