import React, { useEffect, useRef, useState } from "react";
import styles from "./Section02.module.css";

const VideoModal = ({ isOpen, onClose, videoId, title }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      modalRef?.current?.classList.add(styles.open);
      document.body.style.overflow = "hidden";
    } else {
      modalRef?.current?.classList.remove(styles.open);
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const handleClose = () => {
    modalRef?.current?.classList.add(styles.closing);
    setTimeout(() => {
      modalRef?.current?.classList.remove(styles.closing);
      onClose();
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={handleClose}>
      <div
        className={styles.modal}
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.modalHeader}>
          <h2>{title}</h2>
          <button className={styles.closeButton} onClick={handleClose}>
            &times;
          </button>
        </div>
        <div className={styles.modalBody}>
          <iframe
            width="100%"
            height="315"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

const Section02 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <button onClick={openModal}>Open Video</button>
      <VideoModal
        isOpen={isModalOpen}
        onClose={closeModal}
        videoId="Vo3zBqXcDjQ"
        title="Dr. Agarwals"
      />
    </div>
  );
};

export default Section02;
