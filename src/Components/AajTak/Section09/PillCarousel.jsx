import React, { Fragment } from "react";
import styles from "./PillCarousel.module.css";

const Pills = ({ items, onClick, active }) => {
  return (
    <Fragment>
      <div className={styles.carousel}>
        {items.map((item, index) => (
          <button
            key={index}
            className={`${styles.pill} ${
              active === item.category_id ? styles.active : ""
            }`}
            onClick={() => onClick(item.category_id)}
          >
            {item.category}
          </button>
        ))}
      </div>
    </Fragment>
  );
};

function PillCarousel({ categories, onClick, active }) {
  return (
    <Fragment>
      <div className={styles.container}>
        <Pills items={categories} onClick={onClick} active={active} />
      </div>
    </Fragment>
  );
}

export default PillCarousel;
