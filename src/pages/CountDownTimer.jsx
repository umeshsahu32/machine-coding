import { useEffect } from "react";
import { useState } from "react";
import React from "react";

const CountDownTimer = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const [isStart, setIsStart] = useState(false);
  const [timerId, setTimerId] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const inputChangeHandler = (e) => {
    const value = parseInt(e.target.value);
    const id = e.target.id;

    if (id === "hour") {
      setHours(id);
    } else if (id === "min") {
      setMinutes(value);
    } else if (id === "sec") {
      setSeconds(value);
    }
  };

  const isStartBtnHandler = () => {
    if (hours === 0 && seconds === 0 && minutes === 0) {
      alert("Invalid Data");
      return;
    } else {
      setIsStart(true);
    }
  };

  const runTimer = (h, m, s, t) => {
    if (s > 0) {
      setSeconds((prev) => prev - 1);
    } else if (m > 0 && s === 0) {
      setMinutes((prev) => prev - 1);
      setSeconds(59);
    } else if (h > 0 && m === 0) {
      setMinutes(59);
      setSeconds(59);
      setHours((prev) => prev - 1);
    }

    if (h === 0 && m === 0 && s === 0) {
      alert("Timer Finished");
      clearInterval(t);
    }
  };

  useEffect(() => {
    let timer;
    if (isStart) {
      timer = setInterval(() => {
        runTimer(hours, minutes, seconds, timer);
      }, 1000);

      setTimerId(timer);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isStart, hours, minutes, seconds]);

  const pauseBtnHandler = () => {
    setIsPaused(true);
    clearInterval(timerId);
  };

  const resumeBtnHandle = () => {
    setIsPaused(false);
    runTimer(hours, minutes, seconds, timerId);
  };

  const resetTimerHandler = () => {
    clearInterval(timerId);
    setIsStart(false);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  };

  return (
    <div className="bg-slate-100 min-h-screen flex flex-col gap-5 p-10 items-center">
      <h3 className="text-3xl text-slate-700 font-bold">Countdown Timer</h3>
      {!isStart && (
        <div className="flex flex-col gap-5 items-center">
          <div className="flex gap-5">
            <input
              className="w-24 h-24 border-2 border-gray-600 shadow-lg rounded-lg text-center outline-none text-2xl"
              id="hour"
              placeholder="HH"
              onChange={inputChangeHandler}
              maxLength={2}
            />
            <input
              className="w-24 h-24 border-2 border-gray-600 shadow-lg rounded-lg text-center outline-none text-2xl"
              id="min"
              placeholder="MM"
              onChange={inputChangeHandler}
              maxLength={2}
            />
            <input
              className="w-24 h-24 border-2 border-gray-600 shadow-lg rounded-lg text-center outline-none text-2xl"
              id="sec"
              placeholder="SS"
              onChange={inputChangeHandler}
              maxLength={2}
            />
          </div>
          <button
            onClick={isStartBtnHandler}
            className="px-5 py-2 border-red-300 bg-red-700 transition-all duration-300 ease-in-out text-white rounded-lg text-2xl hover:bg-red-900 "
          >
            Start
          </button>
        </div>
      )}
      {isStart && (
        <div>
          <div className="flex gap-8 justify-center items-center text-6xl ">
            <div>{hours < 10 ? `0${hours}` : hours}</div>
            <span>:</span>
            <div>{minutes < 10 ? `0${minutes}` : minutes}</div>
            <span>:</span>
            <div>{seconds < 10 ? `0${seconds}` : seconds}</div>
          </div>
          <div className="flex justify-between py-10">
            <button
              onClick={isPaused ? resumeBtnHandle : pauseBtnHandler}
              className="px-5 py-2 border-red-300 bg-red-700 transition-all duration-300 ease-in-out text-white rounded-lg text-2xl hover:bg-red-900 "
            >
              {isPaused ? "Resume" : "Pause"}
            </button>{" "}
            <button
              onClick={resetTimerHandler}
              className="px-5 py-2 border-red-300 bg-red-700 transition-all duration-300 ease-in-out text-white rounded-lg text-2xl hover:bg-red-900 "
            >
              Reset
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CountDownTimer;
