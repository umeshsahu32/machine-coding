import React, { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/mousewheel";
import styles from "./Section11.module.css";

const Section11 = () => {
  const stats = [
    { number: "500+", label: "Clients Served" },
    { number: "1 M+", label: "Leads Generated" },
    { number: "200+", label: "Sales Expert" },
    { number: "100+", label: "Awards" },
  ];

  return (
    <Fragment>
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>
              Big Dreams,
              <br /> Bigger Numbers
            </h2>
            <p className={styles.paragraph}>
              We are moving ahead with relentless energy to achieve amazing
              results that speak volumes. We don't intend to slow down either!
            </p>
          </div>
          <div className={styles.carouselContainer}>
            <Swiper
              direction="vertical"
              mousewheel={true}
              loop={true}
              autoplay={{
                delay: 3000,
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
          <div className={styles.gridContainer}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.gridItem}>
                <div className={styles.number}>{stat.number}</div>
                <div className={styles.label}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Section11;
