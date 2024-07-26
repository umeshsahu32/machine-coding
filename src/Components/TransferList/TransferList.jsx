import React, { Fragment, useState } from "react";
import HeadingComponent from "../HelperComponent/HeadingComponent/HeadingComponent";
import styles from "./TransferList.module.css";

const data = [
  { title: "First", id: 0, checked: false },
  { title: "Second", id: 1, checked: false },
  { title: "Third", id: 2, checked: false },
  { title: "Fourth", id: 3, checked: false },
];

const TransferList = () => {
  const [leftBoxItem, setLeftBoxItem] = useState(data);
  const [rightBoxItem, setRightBoxItem] = useState([]);

  // @ CHECKED STATUS TOGGLE FUNCTION
  const checkedList = (list, id, checked) => {
    return list.map((item) => {
      if (id === item.id) {
        return {
          ...item,
          checked: !checked,
        };
      }
      return item;
    });
  };

  // @ CLICK ON LIST ITEM FUNCTION
  const handleClick = (id, checked, direction) => {
    if (direction === "LEFT") {
      let copyList = [...leftBoxItem];
      copyList = checkedList(copyList, id, checked);
      setLeftBoxItem(copyList);
    } else {
      let copyList = [...rightBoxItem];
      copyList = checkedList(copyList, id, checked);
      setRightBoxItem(copyList);
    }
  };

  // @ MAKE CHECK ITEM VALUE FALSE
  const resetItems = (list) => {
    return list.map((item) => {
      return {
        ...item,
        checked: false,
      };
    });
  };

  // @ TRANSFER ITEM TO LEFT TO RIGHT OR RIGHT TO LEFT
  const handleTransferBtn = (dir) => {
    if (dir === "LEFT_TO_RIGHT") {
      if (leftBoxItem.length) {
        const copyList = [...leftBoxItem];
        const checkList = copyList.filter((item) => item.checked);
        const unCheckList = copyList.filter((item) => !item.checked);
        setRightBoxItem(resetItems([...rightBoxItem, ...checkList]));
        setLeftBoxItem(unCheckList);
      }
    } else {
      const copyList = [...rightBoxItem];
      const checkList = copyList.filter((item) => item.checked);
      const unCheckList = copyList.filter((item) => !item.checked);
      setLeftBoxItem(resetItems([...leftBoxItem, ...checkList]));
      setRightBoxItem(unCheckList);
    }
  };

  // @ JSX START
  return (
    <Fragment>
      <HeadingComponent heading="Transfer List" />
      <div className={styles.parent_container}>
        <div className={styles.container}>
          <div className={styles.box}>
            <ul>
              {leftBoxItem.map((item) => {
                const { id, title, checked } = item;
                return (
                  <li
                    key={id}
                    className={`${checked ? styles.checked : ""}`}
                    onClick={() => handleClick(id, checked, "LEFT")}
                  >
                    {title}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={styles.action_btn}>
            <button onClick={() => handleTransferBtn("LEFT_TO_RIGHT")}>
              Left To Right
            </button>
            <button onClick={() => handleTransferBtn("RIGHT_TO_LEFT")}>
              Right To Left
            </button>
          </div>
          <div className={styles.box}>
            <ul>
              {rightBoxItem.map((item) => {
                const { id, title, checked } = item;
                return (
                  <li
                    key={id}
                    className={`${checked && styles.checked}`}
                    onClick={() => handleClick(id, checked, "RIGHT")}
                  >
                    {title}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default TransferList;
