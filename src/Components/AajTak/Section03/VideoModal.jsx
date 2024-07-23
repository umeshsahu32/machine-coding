import React, { useEffect, useRef, useState } from "react";
import styles from "./VideoModal.module.css";
import { FaYoutube } from "react-icons/fa";

const VideoModal = ({ isOpen, onClose, videoId, title }) => {
  const modalRef = useRef(null);
  const [loading, setLoading] = useState(true);

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

  const handleIframeLoad = () => {
    setLoading(false);
  };

  useEffect(() => {
    // Cleanup function
    return () => setLoading(true);
  }, [videoId]);

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
          {loading && (
            <div className={styles.loadingOverlay}>
              <FaYoutube className={styles.youtubeIcon} />
            </div>
          )}
          <iframe
            width="100%"
            height="315"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            onLoad={handleIframeLoad}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
