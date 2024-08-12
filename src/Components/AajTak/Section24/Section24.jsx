import React, { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import styles from "./Section24.module.css";
import { serviceData } from "./serviceData";

const Section24 = () => {
  return (
    <Fragment>
      <section className={styles.section}>
        <div className={styles.heading}>
          <h2>Boost your business with</h2>
          <h3>Amazing Section</h3>
        </div>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 8000 }}
          className={styles.swiper}
        >
          {serviceData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className={styles.banner_container}>
                <img
                  src={item.image}
                  alt={`Slide ${index + 1}`}
                  className={styles.image}
                />
                <div className={styles.text_container}>
                  <h3>{item.secondaryHeading}</h3>
                  <p>{item.paragraph}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </Fragment>
  );
};

export default Section24;
