import React, { Fragment } from "react";
import styles from "./Section05.module.css";
import { FaArrowRight } from "react-icons/fa";

const Section05 = () => {
  const posts = [
    {
      image:
        "https://plus.unsplash.com/premium_photo-1677654188365-7b466569f123?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",
      date: "December 12, 2024",
      title: "Moloco Ads",
      category: "Politics",
      link: "#",
      description:
        "Tencent’s Level Infinite exceeded ROAS target for Goddess of Victory: Nikke with Moloco i am good  some more text",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1677654188365-7b466569f123?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",
      date: "July 17, 2023",
      title: "Moloco Ads",
      author: "Mario Douglas",
      category: "Sports",
      link: "#",
      description:
        "Tencent’s Level Infinite exceeded ROAS target for  Goddess of Victory: Nikke with Moloco Goddess o yes some more",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1677654188365-7b466569f123?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",
      date: "March 05, 2024",
      title: "Moloco Ads",
      author: "Lisa Hunter",
      category: "Economics",
      link: "#",
      description:
        "Tencent’s Level Infinite exceeded ROAS target for Goddess of Victory: Nikke with Moloco Nikke with Moloco",
    },
  ];

  return (
    <Fragment>
      <div className={styles.container}>
        {posts.map((item, index) => {
          return (
            <div className={styles.card} key={index}>
              <img
                src={item.image}
                alt={item.title}
                className={styles.cardImage}
              />
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardSubtitle}>{item.category}</p>
                <p className={styles.cardDescription}>{item.description}</p>
                <div className={styles.cardFooter}>
                  <p className={styles.cardDate}>{item.date}</p>
                  <a href={item.link} className={styles.cardLink}>
                    <span>READ MORE </span>
                    <span>
                      <FaArrowRight />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default Section05;
