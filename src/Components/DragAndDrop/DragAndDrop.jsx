import React from "react";
import { Fragment, useState, useRef } from "react";
import HeadingComponent from "../HelperComponent/HeadingComponent/HeadingComponent";
import styles from "./DragAndDrop.module.css";
import { FaPencilAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const DragAndDrop = () => {
  const TASK = "TASK";
  const PROGRESS = "PROGRESS";
  const COMPLETE = "COMPLETE";
  const [value, setValue] = useState("");
  const [tasks, setTasks] = useState([]);
  const [dragTask, setDragTask] = useState(null);
  const [updateItem, setUpdateItem] = useState(null);
  const inputRef = useRef();

  const onKeyDownHandler = (e) => {
    if (e.key === "Enter") {
      if (updateItem) {
        //user is coming for an update
        const obj = {
          title: value,
          id: updateItem.id,
          status: updateItem.status,
        };
        const copyTask = [...tasks];
        const filterList = copyTask.filter((item) => item.id !== updateItem.id);
        setTasks((prevTask) => [...filterList, obj]);
        setUpdateItem(null);
        setValue("");
      } else {
        const obj = {
          title: value,
          status: TASK,
          id: Date.now(),
        };

        setTasks((prevTasks) => [...prevTasks, obj]);
        setValue("");
      }
    }
  };

  const handleDrag = (e, item) => {
    setDragTask(item);
  };

  const handleDragNDrop = (status) => {
    let copyTask = [...tasks];
    copyTask = copyTask.map((item) => {
      if (dragTask.id === item.id) {
        item.status = status;
      }
      return item;
    });
    setTasks(copyTask);
    setDragTask(null);
  };

  const handleDrop = (e) => {
    const status = e.target.getAttribute("data-status"); //TODO,DOING,DONE
    console.log("dropping ", status);
    if (status === TASK) {
      handleDragNDrop(TASK);
    } else if (status === PROGRESS) {
      handleDragNDrop(PROGRESS);
    } else if (status === COMPLETE) {
      handleDragNDrop(COMPLETE);
    }
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const deleteTask = (item) => {
    let copyTask = [...tasks];
    copyTask = copyTask.filter((task) => task.id != item.id);
    setTasks(copyTask);
  };

  const updateTask = (task) => {
    setUpdateItem(task);
    setValue(task.title);
    inputRef.current.focus();
  };

  //   @ JSX START
  return (
    <Fragment>
      <HeadingComponent heading="Drag & Drop" />
      <div className={styles.container}>
        <input
          type="text"
          placeholder="Enter Task"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => onKeyDownHandler(e)}
          ref={inputRef}
        />

        <div className={styles.board}>
          <div
            className={styles.task}
            data-status={TASK}
            onDrop={handleDrop}
            onDragOver={onDragOver}
          >
            <h3>Task</h3>
            <div className={styles.task_item}>
              <ul>
                {tasks.length > 0 &&
                  tasks.map((item, index) => {
                    return (
                      item.status === TASK && (
                        <li
                          key={index}
                          draggable
                          onDrag={(e) => handleDrag(e, item)}
                        >
                          <span>{item.title}</span>
                          <div className={styles.task_action_btn}>
                            <span onClick={() => updateTask(item)}>
                              <FaPencilAlt />
                            </span>
                            <span onClick={(e) => deleteTask(item)}>
                              <MdDelete />
                            </span>
                          </div>
                        </li>
                      )
                    );
                  })}
              </ul>
            </div>
          </div>
          <div
            className={styles.progress}
            data-status={PROGRESS}
            onDrop={handleDrop}
            onDragOver={onDragOver}
          >
            <h3>In Progress</h3>
            <div className={styles.task_item}>
              <ul>
                {tasks.length > 0 &&
                  tasks.map((item, index) => {
                    return (
                      item.status === PROGRESS && (
                        <li
                          key={index}
                          draggable
                          onDrag={(e) => handleDrag(e, item)}
                        >
                          <span>{item.title}</span>
                          <div className={styles.task_action_btn}>
                            <span onClick={() => updateTask(item)}>
                              <FaPencilAlt />
                            </span>
                            <span onClick={(e) => deleteTask(item)}>
                              <MdDelete />
                            </span>
                          </div>
                        </li>
                      )
                    );
                  })}
              </ul>
            </div>
          </div>
          <div
            className={styles.completed}
            data-status={COMPLETE}
            onDrop={handleDrop}
            onDragOver={onDragOver}
          >
            <h3>Completed</h3>
            <div className={styles.task_item}>
              <ul>
                {tasks.length > 0 &&
                  tasks.map((item, index) => {
                    return (
                      item.status === COMPLETE && (
                        <li
                          key={index}
                          draggable
                          onDrag={(e) => handleDrag(e, item)}
                        >
                          <span>{item.title}</span>
                          <div className={styles.task_action_btn}>
                            <span onClick={() => updateTask(item)}>
                              <FaPencilAlt />
                            </span>
                            <span onClick={(e) => deleteTask(item)}>
                              <MdDelete />
                            </span>
                          </div>
                        </li>
                      )
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default DragAndDrop;
