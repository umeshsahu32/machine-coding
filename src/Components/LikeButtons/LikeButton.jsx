import React from "react";
import { Fragment, useState } from "react";
import styles from "./LikeButton.module.css";
import { HeartIcon, SpinnerIcon } from "./icons.jsx";
import HeadingComponent from "../HelperComponent/HeadingComponent/HeadingComponent.jsx";

const LikeButton = () => {
  const [liked, setLiked] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);

  const handleLikeUnlike = async () => {
    setError(null);
    setIsFetching(true);
    const url = "https://www.greatfrontend.com/api/questions/like-button";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: liked ? "unlike" : "like",
        }),
      });

      console.log("response", response);

      if (response.status >= 200 && response.status < 300) {
        setLiked(!liked);
      } else {
        const res = await response.json();
        console.log("res message-->", res);
        setError(res.message);
        return;
      }
    } finally {
      setIsFetching(false);
    }
  };

  return (
    <Fragment>
      <HeadingComponent heading="Like Button" />
      <div className={styles.parent}>
        <button
          onClick={handleLikeUnlike}
          className={`${styles.likeBtn} ${liked ? styles.liked : ""}`}
        >
          {isFetching ? <SpinnerIcon /> : <HeartIcon />}
          {liked ? "Liked" : "Like"}
        </button>
        {error && <div className="error">{error}</div>}
      </div>
    </Fragment>
  );
};

export default LikeButton;
