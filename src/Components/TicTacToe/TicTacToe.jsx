import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import HeadingComponent from "../HelperComponent/HeadingComponent/HeadingComponent";
import styles from "./TicTacToe.module.css";

const TicTacToe = () => {
  const [matrix, setMatrix] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [won, setWon] = useState(null);

  const handleUserClick = (e) => {
    if (!won) {
      const position = e.target.id;
      console.log(position);
      const copyMatrix = [...matrix];
      copyMatrix[position] = isXTurn ? "X" : "O";
      setIsXTurn(!isXTurn);
      setMatrix(copyMatrix);
    }
  };

  const resetGame = () => {
    setMatrix(Array(9).fill(null));
    setWon(null);
    setIsXTurn(true);
  };

  const decideWinner = () => {
    //winner chance
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (matrix[a] && matrix[a] === matrix[b] && matrix[a] === matrix[c]) {
        setWon(matrix[a]);
        return;
      }
    }
  };

  useEffect(() => {
    decideWinner();
  }, [matrix]);

  return (
    <Fragment>
      <HeadingComponent heading="Tic Tac Toe" />
      <div className={styles.parent}>
        <div className={styles.board} onClick={handleUserClick}>
          {matrix.map((item, index) => {
            return (
              <div key={index} id={index} className={styles.box}>
                {item}
              </div>
            );
          })}
        </div>
        <div className={styles.game_info}>
          <button onClick={resetGame}>Reset</button>{" "}
          <div>{`${isXTurn ? "X" : "O"} Player Turn`}</div>
          {won && <div>Player {won} won the Game</div>}
        </div>
      </div>
    </Fragment>
  );
};

export default TicTacToe;
