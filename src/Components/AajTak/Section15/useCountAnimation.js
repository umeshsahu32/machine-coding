import { useState, useEffect, useRef } from "react";

const useCountAnimation = (endValue, duration = 2000, startValue = 0) => {
  const [count, setCount] = useState(startValue);
  const countRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTimestamp;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      let currentCount = Math.floor(
        progress * (endValue - startValue) + startValue
      );

      currentCount = currentCount < 10 ? `0${currentCount}` : currentCount;

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [isVisible, endValue, duration, startValue]);

  return { count, countRef };
};

export default useCountAnimation;
