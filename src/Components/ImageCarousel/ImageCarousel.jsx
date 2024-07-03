import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import styles from "./ImageCarousel.module.css";
import HeadingComponent from "../HelperComponent/HeadingComponent/HeadingComponent";
import PageLoader from "../HelperComponent/PageLoader/PageLoader";

const ImageCarousel = () => {
  const [imageList, setImageList] = useState([]);
  const [imageIndex, setImageIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchImages = async () => {
    setLoading(true);
    const url = "https://dummyjson.com/products";

    const result = await axios.get(url);

    const productImageList = result.data.products.map((item) => {
      return item.images[0];
    });

    setImageList(productImageList);
    setLoading(false);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handleClick = (direction) => {
    const currentIndex = imageIndex;
    const lastIndex = imageList.length - 1;

    if (direction === "left") {
      if (currentIndex === 0) {
        setImageIndex(lastIndex);
      } else {
        setImageIndex(currentIndex - 1);
      }
    }

    if (direction === "right") {
      if (currentIndex === lastIndex) {
        setImageIndex(0);
      } else {
        setImageIndex(currentIndex + 1);
      }
    }
  };

  useEffect(() => {
    const autoLoop = setInterval(() => {
      handleClick("right");
    }, 3000);

    return () => {
      clearInterval(autoLoop);
    };
  }, [imageIndex]);

  return (
    <Fragment>
      {loading ? (
        <PageLoader />
      ) : (
        <Fragment>
          <div className={styles.container}>
            <div>
              <HeadingComponent heading="Image Carousel" />
            </div>
            <div className={styles.image_carousel}>
              <button onClick={() => handleClick("left")}>{"<"}</button>
              <img src={imageList[imageIndex]} alt="" />
              <button onClick={() => handleClick("right")}>{">"}</button>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default ImageCarousel;
