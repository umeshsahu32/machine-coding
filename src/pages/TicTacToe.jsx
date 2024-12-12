import React, { useState } from "react";

const initiateGame = () => Array(9).fill(null);

const TicTacToe = () => {
  const [game, setGame] = useState(initiateGame());
  const [isXTurn, setIsXTurn] = useState(true);

  const WINNING_PATTER = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const calculateWinner = (currentBoard) => {
    for (let i = 0; i < WINNING_PATTER.length; i++) {
      const [a, b, c] = WINNING_PATTER[i];
      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        return currentBoard[a];
      }
    }

    return null;
  };

  const handleClick = (index) => {
    const winner = calculateWinner(game);

    if (winner || game[index]) return;

    let newGame = [...game];
    newGame[index] = isXTurn ? "X" : "O";
    setGame(newGame);
    setIsXTurn(!isXTurn);
  };

  const getStatus = () => {
    const winner = calculateWinner(game);
    if (winner) return `Player ${winner} Won`;
    if (!game.includes(null)) return "Its a Draw";
    return isXTurn ? "X Turn" : "O turn";
  };

  const resetB5tnHandler = () => {
    setGame(initiateGame());
    setIsXTurn(true);
  };

  return (
    <div className="bg-blue-50 min-h-screen flex flex-col  items-center p-10 gap-10">
      <h3 className="text-3xl text-blue-700 font-bold">Tic Tac Toe</h3>
      <div className="grid grid-cols-3 gap-4">
        {game.map((item, index) => {
          return (
            <button
              onClick={() => handleClick(index)}
              className={`w-20 h-20 text-white text-3xl font-bold rounded-lg ${
                item === "X"
                  ? "bg-red-600 "
                  : item === "O"
                  ? "bg-green-600"
                  : "bg-gray-300"
              }`}
            >
              {item}
            </button>
          );
        })}
      </div>
      <div className="flex items-center gap-10">
        <span className="text-2xl font-bold text-blue-500">{getStatus()}</span>
        <button
          onClick={() => resetB5tnHandler()}
          className="bg-red-500 px-5 py-3 text-xl text-white rounded-lg transition-all duration-300 ease-in-out hover:bg-red-600"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default TicTacToe;
