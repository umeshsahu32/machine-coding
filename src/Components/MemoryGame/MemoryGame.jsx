import React from "react";
import { Fragment, useState, useEffect } from "react";
import HeadingComponent from "../HelperComponent/HeadingComponent/HeadingComponent";
import styles from "./MemoryGame.module.css";
import _ from "lodash";

const generateRandomNumbers = (size = 4) => {
  if (size % 2 !== 0) return "Invalid input";
  const totalNumbers = (size * size) / 2;
  let numbers = [];

  // Generate the numbers array with each number twice
  for (let i = 1; i <= totalNumbers; i++) {
    numbers.push(i);
    numbers.push(i);
  }

  // Shuffle the numbers array
  // Method 1
  for (let i = numbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
  }

  // Method 2
  //   numbers.sort(() => Math.random() - 0.5);

  // Method 3
  //   function shuffleArray(array) {
  //     return _.shuffle(array);
  //   }
  //   numbers = shuffleArray(numbers);

  return numbers;
};

const GRID_SIZE = 4;

const MemoryGame = () => {
  const [gameStage, setGameStage] = useState("initial");
  const [num, setNum] = useState(generateRandomNumbers(GRID_SIZE));
  const [opened, setOpened] = useState([]);
  const [solvedList, setSolvedList] = useState([]);

  const handleStart = () => {
    setGameStage("start");
    setOpened([]);
    setSolvedList([]);
    setNum(generateRandomNumbers(GRID_SIZE));
  };

  const getClassName = (num, index) => {
    if (solvedList.includes(num)) {
      return styles.remove;
    } else if (opened.includes(index)) {
      return styles.show;
    } else {
      return styles.hide;
    }
  };

  const handleClick = (num, index) => {
    if (opened.length === 2) return;
    setOpened((prev) => [...prev, index]);
  };

  useEffect(() => {
    if (opened.length === 2) {
      //num qual
      //num not equal
      setTimeout(() => {
        const id1 = opened[0];
        const id2 = opened[1];
        if (num[id1] === num[id2]) {
          //if equal than remove the cards
          setSolvedList((prev) => [...prev, num[id1]]);
        }
        setOpened([]);
      }, 1000);
    }
  }, [opened]);

  useEffect(() => {
    if (solvedList.length === (GRID_SIZE * GRID_SIZE) / 2) {
      setGameStage("finished");
    }
  }, [solvedList]);

  //  @ JSX START
  return (
    <Fragment>
      <HeadingComponent heading="Memory Game" />
      <div className={styles.container}>
        {gameStage === "initial" && (
          <button className={styles.play_now_btn} onClick={handleStart}>
            Play Game
          </button>
        )}
        {gameStage === "start" && (
          <div className={styles.game}>
            <div
              className={styles.cards}
              style={{
                gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`,
                gridTemplateRows: `repeat(${GRID_SIZE}, 1fr)`,
              }}
            >
              {num.map((num, i) => (
                <div
                  key={i}
                  className={`${styles.card} ${getClassName(num, i)}`}
                  onClick={() => handleClick(num, i)}
                >
                  {num}
                </div>
              ))}
            </div>
          </div>
        )}

        {gameStage === "finished" && (
          <Fragment>
            <div className={styles.game_finished}>
              <p>Congratulations. Click to play again</p>
              <button className={styles.play_now_btn} onClick={handleStart}>
                Restart
              </button>
            </div>
          </Fragment>
        )}
      </div>
    </Fragment>
  );
};

export default MemoryGame;
