import React, { Fragment, useRef } from "react";
import styles from "./ModalOverlay.module.css";
import { IoCloseSharp } from "react-icons/io5";

const Modal = ({ handleClose, handleOfferAccept }) => {
  const modalRef = useRef(null);

  const handleOutsideClick = (e) => {
    if (modalRef.current && e.target === modalRef.current) {
      handleClose();
    }
  };

  return (
    <Fragment>
      <div
        className={styles.modal}
        onClick={(e) => handleOutsideClick(e)}
        ref={modalRef}
      >
        <div className={styles.modal_content}>
          <button onClick={handleClose} className={styles.close_btn}>
            <IoCloseSharp />
          </button>

          <div className={styles.content}>
            click the button below to accept our amazing offer!
          </div>

          <button className={styles.offer_btn} onClick={handleOfferAccept}>
            Accept Offer
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Modal;
