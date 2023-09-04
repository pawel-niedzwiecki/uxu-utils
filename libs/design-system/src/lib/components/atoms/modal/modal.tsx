import React, { useMemo } from "react";
import classnames from 'classnames';
import styles from './modal.module.scss'
import type { ModalProps } from "./types";


export function Modal ( {open = false, className, children}: ModalProps ) {
  const style = useMemo(() => ({
    display: `${open ? "block" : "none"}`,
  }), [open]);

  const bodyCSS = useMemo(() => `
    body {
      overflow: ${open ? 'hidden' : 'scroll'};
    }
  `, [open]);

  return (
    <div className={classnames(styles.modalContainer, className)} style={style}>
      {children}
      <style jsx global>{bodyCSS}</style>
    </div>
  )
}
