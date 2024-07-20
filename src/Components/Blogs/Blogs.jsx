import React from "react";
import styles from "./Blogs.module.css";

const BlogPost = ({ image, date, title, author, category, link }) => (
  <div className={styles.blogPost}>
    <div className={styles.imageWrapper}>
      <img src={image} alt={title} className={styles.image} />
      <span className={styles.date}>{date}</span>
    </div>
    <h2 className={styles.title}>{title}</h2>
    <div className={styles.meta}>
      <span className={styles.author}>{author}</span>
      <span className={styles.category}>{category}</span>
    </div>
    <a href={link} className={styles.readMore}>
      Read More →
    </a>
  </div>
);

const Blog = () => {
  const posts = [
    {
      image:
        "https://plus.unsplash.com/premium_photo-1677654188365-7b466569f123?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",
      date: "DECEMBER 12",
      title: "Eum ad dolor et. Autem aut fugiat debitis",
      author: "Julia Parker",
      category: "Politics",
      link: "#",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1677654188365-7b466569f123?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",
      date: "JULY 17",
      title: "Et repellendus molestiae qui est sed omnis",
      author: "Mario Douglas",
      category: "Sports",
      link: "#",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1677654188365-7b466569f123?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",
      date: "SEPTEMBER 05",
      title: "Quia assumenda est et veritati tirana ploder",
      author: "Lisa Hunter",
      category: "Economics",
      link: "#",
    },
  ];

  return (
    <div className={styles.blogContainer}>
      {posts.map((post, index) => (
        <BlogPost key={index} {...post} />
      ))}
    </div>
  );
};

export default Blog;
