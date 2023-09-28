import React, { useEffect, useRef } from "react";
import classnames from 'classnames';
import styles from './modal.module.scss';
import ReactDOM from 'react-dom';
import type { ModalProps } from "./types";

export function Modal({ open = false, className, children, onClick, renderDirectlyInBody = false, onClose }: ModalProps) {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const modalDiv = document.createElement('div');
    modalRef.current = modalDiv;
    document.body.appendChild(modalDiv);

    return () => {
      if (modalDiv) {
        document.body.removeChild(modalDiv);
      }
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'scroll';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && open) {
        onClose?.();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'scroll';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  const modalContent = (
    <div
      className={classnames(styles.modalContainer, className)}
      onClick={onClick}
    >
      {children}
    </div>
  );

  if (!renderDirectlyInBody) {
    return modalRef.current ? ReactDOM.createPortal(modalContent, modalRef.current) : null;
  } else {
    return modalContent;
  }
}
