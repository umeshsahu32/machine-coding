import React, { useRef, Fragment } from "react";
import styles from "./PillCarousel.module.css";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import HeadingComponent from "../HelperComponent/HeadingComponent/HeadingComponent";

const Pills = ({ items }) => {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    const container = carouselRef.current;
    if (container) {
      const scrollAmount = direction === "left" ? -200 : 200;
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
          <div key={index} className={styles.pill}>
            {item}
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

function PillCarousel() {
  const items = [
    "All",
    "Classicals",
    "JavaScript",
    "Money Heist",
    "Cloud computing",
    "Mixes",
    "T-Series",
    "Jukebox",
    "Indian pop music",
    "Disco",
    "Live",
    "Reggaeton",
    "Musical Theatre",
    "AI",
    "Laxmikant-Pyarelal",
    "Albums",
  ];

  return (
    <Fragment>
      <HeadingComponent heading="Pills Carousel" />
      <div className={styles.container}>
        <Pills items={items} />
      </div>
    </Fragment>
  );
}

export default PillCarousel;
