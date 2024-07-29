import React from "react";
import styles from "./Section12.module.css";
import video1 from "../../../assets/video/video01.mp4";
import video2 from "../../../assets/video/video02.mp4";
import video3 from "../../../assets/video/video03.mp4";

const Section12 = () => {
  const data = [
    {
      id: 1,
      heading: "Technology",
      paragraph:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. ",
      video: video1,
    },
    {
      id: 2,
      heading: "Digital Marketing",
      paragraph:
        "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.",
      video: video2,
    },
    {
      id: 3,
      heading: "UI/UX Design",
      paragraph:
        "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. ",
      video: video3,
    },
  ];

  return (
    <div className={styles.section12}>
      {data.map((item, index) => (
        <div
          key={item.id}
          className={`${styles.row} ${index % 2 !== 0 ? styles.reverse : ""}`}
        >
          <div className={styles.content}>
            <h2>{item.heading}</h2>
            <p>{item.paragraph}</p>
          </div>
          {/* <div className={styles.imageContainer}>
            <img src={item.image} alt={item.heading} />
          </div> */}
          <div className={styles.videoContainer}>
            <video
              className={styles.video}
              src={item.video}
              autoPlay
              loop
              muted
              playsInline
              loading="lazy"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Section12;
