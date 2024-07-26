import React from "react";
import { Fragment, useState, useEffect } from "react";
import styles from "./ShoppingList.module.css";
import HeadingComponent from "../HelperComponent/HeadingComponent/HeadingComponent";
import { debounceQuery } from "../AutoSuggestion/debounce";
import Loader from "../AutoSuggestion/Loader";

const ShoppingList = () => {
  const [inputVal, setInputVal] = useState("");
  const [dataList, setDataList] = useState([]);
  const [loader, setLoader] = useState(false);
  const [bucketList, setBucketList] = useState([]);

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

  const handleShoppingList = (e, idx) => {
    e.preventDefault();
    if (idx) {
      const obj = {
        id: Date.now(),
        data: dataList[idx],
        isDone: false,
      };
      const copyBucketList = [...bucketList];
      copyBucketList.push(obj);
      setBucketList(copyBucketList);
    }
    setInputVal("");
  };

  const handleRightClick = (id) => {
    const copyBucketList = [...bucketList];
    const newBucketList = copyBucketList.map((item) => {
      if (item.id == id) {
        item.isDone = !item.isDone;
      }
      return item;
    });
    setBucketList(newBucketList);
  };

  const handleDelete = (id) => {
    const copyBucketList = [...bucketList];
    const newList = copyBucketList.filter((item) => item.id != id);
    setBucketList(newList);
  };

  const handleActions = (e) => {
    const action = e.target.getAttribute("data-id");
    const [type, id] = action.split(":");
    if (type === "update") {
      handleRightClick(id);
    } else if (type === "delete") {
      handleDelete(id);
    }
  };

  // @ JSX START
  return (
    <Fragment>
      <HeadingComponent heading="Shopping List" />
      <div className={styles.parent_container}>
        <input
          className={styles.input}
          name="text"
          placeholder="Search..."
          type="search"
          onChange={(e) => setInputVal(e.target.value)}
          value={inputVal}
        />
        {inputVal && (
          <div className={styles.suggestion_list}>
            {loader ? (
              <Loader />
            ) : dataList.length > 0 ? (
              dataList.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={styles.list_item}
                    data-id={index}
                    onClick={(e) => handleShoppingList(e, index)}
                  >
                    {item}
                  </div>
                );
              })
            ) : (
              <p className={styles.search_result}>No Search Result Found</p>
            )}
          </div>
        )}

        <div className={styles.bucket} onClick={handleActions}>
          {bucketList.length > 0 ? (
            bucketList.map((item, index) => {
              return (
                <div className={styles.shopping_item} key={index}>
                  <button
                    data-id={`update:${item.id}`}
                    // onClick={() => handleRightClick(item.id)}
                  >
                    ✓
                  </button>
                  <div className={item.isDone ? styles.strike : ""}>
                    {item.data}
                  </div>
                  <button
                    data-id={`delete:${item.id}`}
                    // onClick={() => handleDelete(item.id)}
                  >
                    X
                  </button>
                </div>
              );
            })
          ) : (
            <p className={styles.search_result}> No List Found</p>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default ShoppingList;
