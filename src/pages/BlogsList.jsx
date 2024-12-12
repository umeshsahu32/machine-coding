import React, { useState, useEffect } from "react";
import styles from "./BlogsList.module.css";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const BlogsList = () => {
  const [blogData, setBlogData] = useState([]);

  // const fetchBlogs = async () => {
  //   const result = await fetch("../assets/json/data.json");
  //   console.log(result);
  //   const data = await result.json();
  //   setBlogData(data);
  // };

  useEffect(() => {
    fetch("../../public/data.json")
      .then((response) => response.json())
      .then((data) => setBlogData(data))
      .catch((error) => console.error("Error fetching blogs:", error));
  }, []);

  console.log("blogData", blogData);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3 className={styles.title}>Recent Post</h3>
        <p className={styles.subtitle}>
          Explore the insights and trends shaping our industry
        </p>
      </div>
      <div className={styles.blogList}>
        {blogData.map((item) => {
          return (
            <div key={item.id} className={styles.blogItem}>
              <div className={styles.blogContent}>
                <img
                  src={item.img}
                  alt={item.title}
                  className={styles.blogImage}
                />
                <div className="flex flex-col items-start">
                  <span className={styles.category}>{item.category}</span>
                  <h3 className={styles.blogTitle}>{item.title}</h3>
                  <p className={styles.blogDescription}>{item.description}</p>
                </div>
              </div>
              <div className={styles.learnMore}>
                <Link
                  to={`/blog/${item.title.replace(/ /g, "-")}`}
                  state={item}
                  onClick={() => console.log("Navigating with data:", item)} // Debugging line
                  className={styles.learnMoreButton}
                >
                  <span>
                    <MdOutlineArrowRightAlt size={24} />
                  </span>
                  <span>Learn More</span>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogsList;
