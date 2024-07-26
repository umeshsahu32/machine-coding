import axios from "axios";
import React, { useCallback } from "react";
import { Fragment, useState, useEffect, useRef } from "react";
import styles from "./InfiniteScroll.module.css";
import HeadingComponent from "../HelperComponent/HeadingComponent/HeadingComponent";

const InfiniteScroll = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(2);
  const [loading, setLoading] = useState(false);

  const loaderRef = useRef();

  const fetchImages = async (index) => {
    try {
      const url = `https://jsonplaceholder.typicode.com/photos?_page=${index}&_limit=10`;
      const result = await axios.get(url);
      return result.data;
    } catch (error) {
      console.log(error);
    }
  };

  const getData = useCallback(async () => {
    if (loading) return;
    setLoading(true);
    const data = await fetchImages(page);
    setImages((prevImages) => [...prevImages, ...data]);

    setTimeout(() => {
      setLoading(false);
    }, 6000);
    setPage((prev) => prev + 1);
  }, [page, loading]);

  const fetchFirstPage = async () => {
    const data = await fetchImages(1);
    setImages(data);
  };

  useEffect(() => {
    fetchFirstPage();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const target = entries[0];
      if (target.isIntersecting) {
        getData();
      }
    });

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [getData]);

  //   @ JSX START
  return (
    <Fragment>
      <HeadingComponent heading="Infinite Scroll" />
      <div className={styles.head}>
        {images.length > 0 &&
          images.map((image, idx) => (
            <img src={image?.thumbnailUrl} key={idx} alt="Dummy Images" />
          ))}

        <div ref={loaderRef}>{loading && <h2>Loading...</h2>}</div>
      </div>
    </Fragment>
  );
};

export default InfiniteScroll;
