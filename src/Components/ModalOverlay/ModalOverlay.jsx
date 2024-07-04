import React from "react";
import { Fragment, useState } from "react";
import styles from "./ModalOverlay.module.css";
import HeadingComponent from "../HelperComponent/HeadingComponent/HeadingComponent";
import Modal from "./Modal";

const ModalOverlay = () => {
  const [isShow, setIsShow] = useState(false);
  const [isOfferAccepted, setIsOfferAccepted] = useState(false);

  const handleOfferAccept = () => {
    setIsOfferAccepted(true);
    setIsShow(false);
  };

  return (
    <Fragment>
      <HeadingComponent heading="Modal Overlay" />
      <div className={styles.show_offer}>
        {!isOfferAccepted && (
          <button onClick={() => setIsShow(true)} className={styles.offer_btn}>
            Show Offer
          </button>
        )}

        {isOfferAccepted && <div style={{ fontSize: 50 }}>Offer Accepted</div>}
      </div>

      {isShow && (
        <Modal
          handleClose={() => setIsShow(false)}
          handleOfferAccept={handleOfferAccept}
        />
      )}
    </Fragment>
  );
};

export default ModalOverlay;
