import React, { useEffect, useRef, useState } from "react";
import styles from "./KnowMoreModal.module.css";

const KnowMoreModal = ({ isOpen, onClose, data }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        modalRef.current?.classList.add(styles.open);
      }, 50); // Small delay to ensure the modal is in the DOM
      document.body.style.overflow = "hidden";
    } else {
      modalRef.current?.classList.remove(styles.open);
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const handleClose = () => {
    modalRef.current?.classList.remove(styles.open);
    modalRef.current?.classList.add(styles.closing);
    setTimeout(() => {
      modalRef.current?.classList.remove(styles.closing);
      onClose();
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <div className={`${styles.modalOverlay}`} onClick={handleClose}>
      <div
        className={`${styles.modal} `}
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.modalHeader}>
          <button className={styles.closeButton} onClick={handleClose}>
            &times;
          </button>
        </div>
        <div className={styles.modalBody}>
          <img src={data.image} alt="image11" />
          <div className={styles.modal_text}>
            <h3>{data.primary_heading}</h3>
            <ul>
              {data.primary_list.map((item) => {
                return <li>{item}</li>;
              })}
            </ul>

            <h3>{data.secondary_heading}</h3>
            <ul>
              {data.secondary_list.map((item) => {
                return <li>{item}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowMoreModal;
