import React, { useEffect, useState } from "react";
import styles from "./NotificationToaster.module.css";
import {
  AiFillWarning,
  AiFillCheckCircle,
  AiFillCloseCircle,
  AiFillInfoCircle,
} from "react-icons/ai";

const Notification = ({ id, message, type, duration = 3000 }) => {
  const [width, setWidth] = useState(100);

  let icon;

  if (type === "success") {
    icon = <AiFillCheckCircle />;
  } else if (type === "error") {
    icon = <AiFillCloseCircle />;
  } else if (type === "warning") {
    icon = <AiFillWarning />;
  } else if (type === "info") {
    icon = <AiFillInfoCircle />;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setWidth((oldWidth) => {
        if (oldWidth <= 0) {
          clearInterval(timer);
          return 0;
        }
        return oldWidth - 100 / (duration / 100);
      });
    }, 100);

    return () => clearInterval(timer);
  }, [duration]);

  return (
    <div className={`${styles.notification} ${styles[type]}`}>
      <span className={styles.icon}>{icon}</span>
      <span>{message}</span>
      <div className={styles.progressBar} style={{ width: `${width}%` }}></div>
    </div>
  );
};

const NotificationToaster = ({ notifications }) => {
  return (
    <div className={styles.notificationContainer}>
      {notifications.map((notification) => (
        <Notification key={notification.id} {...notification} />
      ))}
    </div>
  );
};

export default NotificationToaster;
