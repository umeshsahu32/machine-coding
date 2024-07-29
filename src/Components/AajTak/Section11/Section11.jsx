import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/mousewheel";
import styles from "./Section11.module.css";

const Section11 = () => {
  const stats = [
    { number: "500+", label: "Clients" },
    { number: "11+", label: "Countries" },
    { number: "1200cr", label: "Revenue" },
    { number: "100+", label: "Awards" },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h2 className={styles.heading}>Big Dreams, Bigger Numbers</h2>
        <p className={styles.paragraph}>
          We are moving ahead with relentless energy to achieve amazing results
          that speak volumes. We don't intend to slow down either!
        </p>
      </div>
      <div className={styles.carouselContainer}>
        <Swiper
          direction="vertical"
          mousewheel={true}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Mousewheel, Autoplay]}
          className={styles.swiper}
        >
          {stats.map((stat, index) => (
            <SwiperSlide key={index} className={styles.slide}>
              <div className={styles.statNumber}>{stat.number}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Section11;
