import React, { Fragment } from "react";
import Carousel01 from "./Carousels/Carousel01/Carousel01";
import Carousel02 from "./Carousels/Carousel02/Carousel02";
import styles from "./CardCarousel.module.css";

const CardCarousel = () => {
  return (
    <Fragment>
      <Carousel01 />
      <Carousel02 />
    </Fragment>
  );
};

export default CardCarousel;
