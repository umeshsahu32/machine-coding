import React, { Fragment, useState, useEffect } from "react";
import HeadingComponent from "../HelperComponent/HeadingComponent/HeadingComponent";
import styles from "./JobBoard.module.css";
import axios from "axios";
import Loader from "../AutoSuggestion/Loader";

const JobBoard = () => {
  const [postIDs, setPostIDs] = useState([]);
  const [postMetadata, setPostMetadata] = useState([]);
  const [showLoader, setShowLoader] = useState(false);

  const getDataFn = async (url) => {
    try {
      const res = await axios.get(url);
      return res.data;
    } catch (err) {
      console.error("Error: ", err);
    }
  };

  const extractTitleAndHiringText = (inputString) => {
    // Split the string using "is hiring" as the delimiter
    const parts = inputString?.split(")");

    // The title is the first part and the hiring text is the second part
    const title = `${parts[0]?.trim()})`;
    const hiringText = `is hiring${parts[1]?.trim()}`;

    return { title, hiringText };
  };

  const getDateFromEpoch = (epochTime) => {
    // Create a new Date object from the epoch time
    const date = new Date(epochTime * 1000);

    // Get day, month, and year
    const day = String(date.getDate()).padStart(2, "0");
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();

    // Format the date as dd mmmm yyyy
    return `${day} ${month} ${year}`;
  };

  const fetchPostMetadata = async (ids) => {
    const apiCalls = ids.map((id) => {
      const url = `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`;
      const res = getDataFn(url);
      return res;
    });
    const results = await Promise.all(apiCalls);
    if (results.length) {
      const newArr = results.map((item) => {
        const { title, hiringText } = extractTitleAndHiringText(item.title);
        const obj = {
          jobTitle: title,
          jobInfo: hiringText,
          date: getDateFromEpoch(item.time),
          url: item.url
            ? item.url
            : `https://news.ycombinator.com/item?id=${item.id}`,
        };
        return obj;
      });

      let copyPostMetadata = [...postMetadata];
      copyPostMetadata = [...copyPostMetadata, ...newArr];
      setPostMetadata(copyPostMetadata);
    }
  };

  const handleLoadMore = (e) => {
    e.preventDefault();
    const copyIds = [...postIDs];
    if (copyIds.length > 0) {
      const ids = copyIds.splice(0, 6); // [7] ids=1,2,3,4,5,6,
      fetchPostMetadata(ids);
      setPostIDs(copyIds);
    }
  };

  const fetchPostIDs = async () => {
    setShowLoader(true);
    const url = "https://hacker-news.firebaseio.com/v0/jobstories.json";
    const data = await getDataFn(url);
    const ids = data.splice(0, 9); //60 records-> 9-> 51
    setPostIDs(data);
    fetchPostMetadata(ids);
    setShowLoader(false);
  };

  useEffect(() => {
    fetchPostIDs();
  }, []);

  return (
    <Fragment>
      <HeadingComponent heading="Job Board" />
      <div className={styles.parent}>
        {showLoader ? (
          <Loader />
        ) : (
          <div className={styles.cards}>
            {postMetadata.map((post) => (
              <a className={styles.card} href={post.url} target="_blank">
                <div className={styles.company_info}>{post.jobTitle}</div>
                <div className={styles.hiring_info}>{post.jobInfo}</div>
                <div className={styles.date}>{post.date}</div>
              </a>
            ))}
          </div>
        )}
        {!showLoader && (
          <button
            onClick={(e) => handleLoadMore(e)}
            className={styles.more_load_btn}
          >
            Load More
          </button>
        )}
      </div>
    </Fragment>
  );
};

export default JobBoard;
