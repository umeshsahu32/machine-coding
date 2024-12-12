import React from "react";
import { useEffect, useState } from "react";

const ImageCarousel = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [index, setIndex] = useState(0);

  const fetchProduct = async () => {
    setLoading(true);
    try {
      const URL = "https://fakestoreapi.com/products";
      const result = await fetch(URL);
      const productData = await result.json();
      setImages(productData);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  console.log("Images", images);

  const handleClick = (direction) => {
    const lastIndex = images.length - 1;
    if (direction === "left") {
      if (index === 0) {
        setIndex(lastIndex);
      } else {
        setIndex((prev) => prev - 1);
      }
    } else {
      if (index === lastIndex) {
        setIndex(0);
      } else {
        setIndex((prev) => prev + 1);
      }
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleClick("right");
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="bg-cyan-400 min-h-screen flex justify-center items-center">
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <div className="flex justify-center items-center gap-10">
          <button
            className="bg-gray-700 w-10 h-10 text-white text-2xl rounded-full "
            onClick={() => handleClick("left")}
          >
            {"<"}
          </button>
          <img
            src={images[index]?.image}
            className="w-[500px] h-[500px] object-contain"
          />
          <button
            className="bg-gray-700 w-10 h-10 text-white text-2xl rounded-full "
            onClick={() => handleClick("right")}
          >
            {">"}
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;
