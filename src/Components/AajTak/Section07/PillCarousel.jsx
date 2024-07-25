import React, { useRef, Fragment, useState } from "react";
import styles from "./PillCarousel.module.css";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

const Pills = ({ items, onClick, active }) => {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    const container = carouselRef.current;
    if (container) {
      const scrollAmount = direction === "left" ? -400 : 400;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className={styles.carouselContainer}>
      <button
        className={`${styles.scrollButton} ${styles.leftButton}`}
        onClick={() => scroll("left")}
      >
        <IoChevronBackOutline />
      </button>
      <div className={styles.carousel} ref={carouselRef}>
        {items.map((item, index) => (
          <div
            key={index}
            className={`${styles.pill} ${
              active === item.id ? styles.active : ""
            }`}
            onClick={() => onClick(item.id)}
          >
            {item.category}
          </div>
        ))}
      </div>
      <button
        className={`${styles.scrollButton} ${styles.rightButton}`}
        onClick={() => scroll("right")}
      >
        <IoChevronForwardOutline />
      </button>
    </div>
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
