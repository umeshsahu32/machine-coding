import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import { Autoplay } from "swiper";
import styles from "./Section13.module.css";
import banner01 from "../../../assets/images/banner01.jpg";
import banner02 from "../../../assets/images/banner02.jpg";
import banner03 from "../../../assets/images/banner03.jpg";
// import SwiperCore, { Autoplay } from "swiper";
// SwiperCore.use([Autoplay]);
import { Autoplay } from "swiper/modules";

const data = [
  {
    id: 1,
    image: banner01,
    heading: "Heading 1",
    paragraph: "This is the first paragraph.",
  },
  {
    id: 2,
    image: banner02,
    heading: "Heading 2",
    paragraph: "This is the second paragraph.",
  },
  {
    id: 3,
    image: banner03,
    heading: "Heading 3",
    paragraph: "This is the third paragraph.",
  },
];

const Section13 = () => {
  return (
    <div className={styles.section13}>
      <Swiper
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              className={styles.slide}
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className={styles.overlay}>
                <h2>{item.heading}</h2>
                <p>{item.paragraph}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Section13;
