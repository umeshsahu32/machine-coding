import React, { useEffect } from "react";
import { Fragment, useState } from "react";
import HeadingComponent from "../HelperComponent/HeadingComponent/HeadingComponent";
import styles from "./CountDownTimer.module.css";

const CountDownTimer = () => {
  const [isStart, setIsStart] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [timerId, setTimerId] = useState(0);
  const [time, setTime] = useState({
    hours: "",
    minutes: "",
    seconds: "",
  });

  //  @ START BUTTON CLICK HANDLER
  const startClickHandler = (e) => {
    e.preventDefault();
    if (time.hours !== "" || time.minutes !== "" || time.seconds !== "") {
      setIsStart(true);
    }
  };

  //  @ RESET BUTTON CLICK HANDLER
  const resetClickHandler = (e) => {
    e.preventDefault();
    setTime({
      hours: "",
      minutes: "",
      seconds: "",
    });
    clearInterval(timerId);
    setIsStart(false);
  };

  // @ PAUSE BUTTON CLICK HANDLER
  const pauseClickHandler = (e) => {
    e.preventDefault();
    setIsPaused(true);
    clearInterval(timerId);
  };

  // @ RESUME BUTTON CLICK HANDLER
  const resumeClickHandler = (e) => {
    e.preventDefault();
    setIsPaused(false);
    runTimer(time, timerId);
  };

  // @ INPUT CHANGE HANDLER
  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setTime({
      ...time,
      [name]: parseInt(value) > 60 ? 60 : parseInt(value),
    });
  };

  // @ RUN TIMER FUNCTION
  const runTimer = (time, tdi) => {
    if (time.seconds > 0) {
      setTime({
        ...time,
        seconds: time.seconds - 1,
      });
    } else if (time.seconds === 0 && time.minutes > 0) {
      setTime({
        ...time,
        minutes: time.minutes - 1,
        seconds: 59,
      });
    } else {
      setTime({
        ...time,
        hours: time.hours - 1,
        minutes: 59,
        seconds: 59,
      });
    }

    if (
      (time.hours === 0 || time.hours === "") &&
      (time.minutes === 0 || time.minutes === "") &&
      (time.seconds === 0 || time.seconds === "")
    ) {
      setTime({
        ...time,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
      clearInterval(tdi);
      alert("Timer is Complete");
      setIsStart(false);
      setTime({
        ...time,
        hours: "",
        minutes: "",
        seconds: "",
      });
    }
  };

  // @ CALL RUN TIMER FUNCTION
  useEffect(() => {
    let tid;

    if (isStart) {
      tid = setInterval(() => {
        runTimer(time, tid);
      }, 1000);

      setTimerId(tid);
    }

    return () => {
      clearInterval(tid);
    };
  }, [isStart, time]);

  // @JSX START
  return (
    <Fragment>
      <HeadingComponent heading="Count Down Timer" />
      {!isStart && (
        <div className={styles.input_container}>
          <div className={styles.input_box}>
            <input
              type="number"
              name="hours"
              placeholder="HH"
              onChange={(e) => inputChangeHandler(e)}
              onInput={(e) => {
                if (e.target.value.length > 2) {
                  e.target.value = e.target.value.slice(0, 2);
                }
              }}
              value={time.hours}
            />
            <input
              type="number"
              name="minutes"
              placeholder="MM"
              onChange={(e) => inputChangeHandler(e)}
              onInput={(e) => {
                if (e.target.value.length > 2) {
                  e.target.value = e.target.value.slice(0, 2);
                }
              }}
              value={time.minutes}
            />
            <input
              type="number"
              name="seconds"
              placeholder="SS"
              onChange={(e) => inputChangeHandler(e)}
              onInput={(e) => {
                if (e.target.value.length > 2) {
                  e.target.value = e.target.value.slice(0, 2);
                }
              }}
              value={time.seconds}
            />
          </div>
          <button
            onClick={(e) => startClickHandler(e)}
            className={styles.timer_start}
          >
            Start
          </button>
        </div>
      )}

      {isStart && (
        <div className={styles.input_container}>
          <div className={styles.timer_box}>
            <div>
              {time.hours < 10
                ? time.hours === ""
                  ? "00"
                  : `0${time.hours}`
                : time.hours}
            </div>
            <span>&nbsp;:&nbsp;</span>
            <div>
              {" "}
              {time.minutes < 10
                ? time.minutes === ""
                  ? "00"
                  : `0${time.minutes}`
                : time.minutes}
            </div>
            <span>&nbsp;:&nbsp;</span>
            <div>{time.seconds < 10 ? `0${time.seconds}` : time.seconds}</div>
          </div>
          <div className={styles.action_box}>
            <button
              onClick={(e) => {
                if (isPaused) {
                  resumeClickHandler(e);
                } else {
                  pauseClickHandler(e);
                }
              }}
            >
              {isPaused ? "Resume" : "Pause"}
            </button>
            <button onClick={(e) => resetClickHandler(e)}>Reset Button</button>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default CountDownTimer;
