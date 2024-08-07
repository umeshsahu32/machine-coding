import React, { Fragment } from "react";
import styles from "./Section23.module.css";

const Section23 = () => {
  const arr = [
    { id: 1, text: "Advance Targeting" },
    { id: 2, text: "Lead Qualification" },
    { id: 3, text: "Quality Assurance" },
  ];
  return (
    <Fragment>
      <div className={styles.quality_container}>
        {arr.map((item) => {
          return (
            <div key={item.id} className={styles.quality_box}>
              {item.text}
            </div>
          );
        })}
      </div>

      <div className={styles.image_container}>
        <div className={styles.image_text}>
          <h1>But I must explain</h1>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large.
          </p>
        </div>
      </div>

      <div className={styles.gradientBackground}>
        <div className={styles.content}>
          <h1>Flexibility & Scalability </h1>
          <p>
            Your paragraph text goes here. This is a description or any other
            content you want to place in the center of the gradient background.
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Section23;
