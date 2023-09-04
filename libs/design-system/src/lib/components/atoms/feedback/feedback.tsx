import React, { useState, useEffect, useRef } from "react";
import { Modal } from './../../atoms/modal';
import styles from './feedback.module.scss';

export function Feedback({ open = false }) {
  const [openModal, setOpenModal] = useState(() => open);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const { current } = wrapperRef;
      if (current && event.target && !current.contains(event.target as Node)) {
        setOpenModal(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [setOpenModal]);

  return (
    <div className={styles.wrapper} ref={wrapperRef}>
      <div className={styles.wrapperModal}>
        <Modal open={openModal} className={styles.modal}>
          jiji
        </Modal>
      </div>
      <button className="btn" onClick={() => setOpenModal(prevState => !prevState)}>
        feedback {`${openModal}`}
      </button>
    </div>
  );
}
