import React, { Fragment, useState } from "react";
import styles from "./RatingStar.module.css";
import HeadingComponent from "../HelperComponent/HeadingComponent/HeadingComponent";

const RatingStar = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  console.log("rating ", rating);

  console.log("hover ", hover);

  console.log("((rating && hover) || hover) ", (rating && hover) || hover);

  return (
    <Fragment>
      <HeadingComponent heading="Rating Star" />
      <div className={styles.star_container}>
        {[1, 2, 3, 4, 5].map((num) => {
          return (
            <button
              key={num}
              onClick={() => setRating(num)}
              onMouseOver={() => setHover(num)}
              onMouseLeave={() => setHover(rating)}
              className={styles.star_button}
            >
              <span
                className={`${styles.star} ${
                  num <= ((rating && hover) || hover) ? styles.on : styles.off
                }`}
              >
                &#9733;
              </span>
            </button>
          );
        })}
      </div>
    </Fragment>
  );
};

export default RatingStar;
