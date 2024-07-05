import React, { Fragment, useEffect, useState } from "react";
import styles from "./AutoSuggestion.module.css";
import HeadingComponent from "../HelperComponent/HeadingComponent/HeadingComponent";
import { debounceQuery } from "./debounce";
import Loader from "./Loader";

const AutoSuggestion = () => {
  const [inputVal, setInputVal] = useState("");
  const [dataList, setDataList] = useState([]);
  const [loader, setLoader] = useState(false);

  // ! INITIAL API CALL
  const initAPICall = async () => {
    setLoader(true);
    const url = `https://api.frontendeval.com/fake/food/${inputVal}`;
    const data = await debounceQuery(url);
    setDataList(data);
    setLoader(false);
  };

  useEffect(() => {
    if (inputVal) {
      initAPICall();
    }
  }, [inputVal]);

  //@ JSX START
  return (
    <Fragment>
      <HeadingComponent heading="Auto Suggestion" />

      <div className={styles.parent_container}>
        <input
          className={styles.input}
          name="text"
          placeholder="Search..."
          type="search"
          onChange={(e) => setInputVal(e.target.value)}
          value={inputVal}
        />
        <div className={styles.suggestion_list}>
          {loader ? (
            <Loader />
          ) : dataList.length > 0 ? (
            dataList.map((item, index) => {
              return (
                <div key={index} className={styles.list_item}>
                  {item}
                </div>
              );
            })
          ) : (
            <p className={styles.search_result}>No Search Result Found</p>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default AutoSuggestion;
