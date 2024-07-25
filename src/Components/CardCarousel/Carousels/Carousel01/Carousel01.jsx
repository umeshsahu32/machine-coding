import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./Carousel01.module.css";

const cardData = [
  {
    name: "Umesh Sahu",
    profession: "Software Developer",
    image:
      "https://fastly.picsum.photos/id/48/5000/3333.jpg?hmac=y3_1VDNbhii0vM_FN6wxMlvK27vFefflbUSH06z98so",
  },
  {
    name: "Shivam Gupta",
    profession: "Software Developer",
    image:
      "https://fastly.picsum.photos/id/48/5000/3333.jpg?hmac=y3_1VDNbhii0vM_FN6wxMlvK27vFefflbUSH06z98so",
  },
  {
    name: "Vishal Soni",
    profession: "Software Developer",
    image:
      "https://fastly.picsum.photos/id/48/5000/3333.jpg?hmac=y3_1VDNbhii0vM_FN6wxMlvK27vFefflbUSH06z98so",
  },
  {
    name: "Vikas Gupta",
    profession: "Software Developer",
    image:
      "https://fastly.picsum.photos/id/48/5000/3333.jpg?hmac=y3_1VDNbhii0vM_FN6wxMlvK27vFefflbUSH06z98so",
  },
  {
    name: "Sachin Bhandari",
    profession: "Software Developer",
    image:
      "https://fastly.picsum.photos/id/48/5000/3333.jpg?hmac=y3_1VDNbhii0vM_FN6wxMlvK27vFefflbUSH06z98so",
  },
  {
    name: "Divyansh Sharma",
    profession: "Software Developer",
    image:
      "https://fastly.picsum.photos/id/48/5000/3333.jpg?hmac=y3_1VDNbhii0vM_FN6wxMlvK27vFefflbUSH06z98so",
  },
  {
    name: "Shivam Yadav",
    profession: "Software Developer",
    image:
      "https://fastly.picsum.photos/id/48/5000/3333.jpg?hmac=y3_1VDNbhii0vM_FN6wxMlvK27vFefflbUSH06z98so",
  },
  {
    name: "Prasant Yadav",
    profession: "Software Developer",
    image:
      "https://fastly.picsum.photos/id/48/5000/3333.jpg?hmac=y3_1VDNbhii0vM_FN6wxMlvK27vFefflbUSH06z98so",
  },
];

const Carousel01 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.swiper}>
        <Swiper
          grabCursor={true}
          spaceBetween={30}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {cardData.map((card, index) => (
            <SwiperSlide key={index} className={styles.cardItem}>
              <img
                src={card.image}
                alt={`image of ${card.name}`}
                className={styles.userImage}
              />
              <h2 className={styles.userName}>{card.name}</h2>
              <p className={styles.userProfession}>{card.profession}</p>
              <button className={styles.messageButton}>Message</button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel01;
