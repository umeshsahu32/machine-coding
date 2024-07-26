import React, { Fragment, useState } from "react";
import styles from "./UndoableCounter.module.css";
import HeadingComponent from "../HelperComponent/HeadingComponent/HeadingComponent";

function HistoryDisplay({ history }) {
  return (
    <Fragment>
      {history.length > 0 ? (
        <ul className={styles.history_list}>
          {[...history].reverse().map((item, index) => (
            <li key={index}>
              {item.action}&nbsp;&nbsp;&nbsp;&nbsp;[{item.prevVal}
              &nbsp;&nbsp;,&nbsp;&nbsp;{item.currVal}]
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.history_result}>No history found</p>
      )}
    </Fragment>
  );
}

const UndoableCounter = () => {
  const [value, setValue] = useState(0);
  const [history, setHistory] = useState([]);
  const [redoList, setRedoList] = useState([]);
  const [undoCount, setUndoCount] = useState(0);
  const MAX_UNDO = 5;
  const MAX_REDO = 5;

  const maintainedHistory = (key, prevVal, currVal) => {
    const obj = {
      action: key,
      prevVal,
      currVal,
    };
    setHistory((prevHistory) => [...prevHistory, obj]);
  };

  // @
  const handleClick = (key) => {
    const val = parseInt(key);
    maintainedHistory(key, value, value + val);
    setValue((prevVal) => prevVal + val);
  };

  // @ UNDO BUTTON HANDLER
  const handleUndoBtn = () => {
    if (history.length > 0 && undoCount < MAX_UNDO) {
      const lastAction = history[history.length - 1];
      setRedoList((prevRedoList) => [
        ...prevRedoList.slice(-MAX_REDO + 1),
        lastAction,
      ]);
      setValue(lastAction.prevVal);
      setHistory((prevHistory) => prevHistory.slice(0, -1));
      setUndoCount((prevCount) => prevCount + 1);
    }
  };

  // @ REDO BUTTON HANDLER
  const handleRedo = () => {
    if (redoList.length > 0 && undoCount > 0) {
      const nextAction = redoList[redoList.length - 1];
      maintainedHistory(nextAction.action, value, nextAction.currVal);
      setValue(nextAction.currVal);
      setRedoList((prevRedoList) => prevRedoList.slice(0, -1));
      setUndoCount((prevCount) => prevCount - 1);
    }
  };

  // @ RESET BUTTON HANDLER
  const resetBtn = () => {
    setValue(0);
    setUndoCount(0);
    setHistory([]);
  };

  // @ JSX START
  return (
    <Fragment>
      <HeadingComponent heading="Undoable Counter" />
      <div className={styles.parent_container}>
        <div className={styles.action_button}>
          <button
            onClick={handleUndoBtn}
            disabled={history.length === 0 || undoCount >= MAX_UNDO}
          >
            Undo {undoCount}/{MAX_UNDO}
          </button>
          <button
            onClick={handleRedo}
            disabled={redoList.length === 0 || undoCount === 0}
          >
            Redo {redoList.length}/{MAX_REDO}
          </button>
          <button onClick={resetBtn}>Reset</button>
        </div>

        <div className={styles.user_actions}>
          {["-100", "-10", "-1"].map((item, index) => {
            return (
              <button
                key={index}
                className={styles.decrement_btn}
                onClick={() => handleClick(item)}
              >
                <span>{item}</span>
              </button>
            );
          })}
          <div className={styles.value}>{value}</div>
          {["+1", "+10", "+100"].map((item, index) => {
            return (
              <button
                key={index}
                className={styles.decrement_btn}
                onClick={() => handleClick(item)}
              >
                <span>{item}</span>
              </button>
            );
          })}
        </div>

        <div className={styles.history}>
          <HistoryDisplay history={history} />
        </div>
      </div>
    </Fragment>
  );
};

export default UndoableCounter;
