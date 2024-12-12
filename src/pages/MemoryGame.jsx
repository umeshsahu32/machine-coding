import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const MemoryGame = () => {
  const [numbers, setNumbers] = useState([]);
  const [filliped, setFilliped] = useState([]);
  const [solved, setSolved] = useState([]);

  const [won, setWon] = useState(false);
  const [disable, setDisable] = useState(false);

  const GRID_SIZE = 4;

  const initiateGame = () => {
    const totalNumbers = GRID_SIZE ** 2;
    const totalPairs = Math.floor(totalNumbers / 2);
    const numberArray = [];

    for (let i = 1; i <= totalPairs; i++) {
      numberArray.push(i);
      numberArray.push(i);
    }

    const shuffledArray = numberArray.sort(() => Math.random() - 0.5);
    setNumbers(shuffledArray);
    setSolved([]);
    setFilliped([]);
    setWon(false);
    setDisable(false);
  };

  useEffect(() => {
    initiateGame();
  }, []);

  const isFilliped = (index) =>
    filliped.includes(index) || solved.includes(numbers[index]);

  const isSolved = (index) => solved.includes(numbers[index]);

  const checkMatch = (secondIndex) => {
    const firstVal = numbers[filliped[0]];
    const secondVal = numbers[secondIndex];

    if (firstVal === secondVal) {
      setSolved((prev) => [...prev, firstVal, secondVal]);
      setFilliped([]);
      setDisable(false);
    } else {
      setTimeout(() => {
        setFilliped([]);
        setDisable(false);
      }, 800);
    }
  };

  const handleClick = (i) => {
    if (won || disable) return;

    if (filliped.length === 0) {
      setFilliped([i]);
      return;
    }

    if (filliped.length === 1) {
      setDisable(true);
      if (i !== filliped[0]) {
        setFilliped((prev) => [...prev, i]);
        checkMatch(i);
      } else {
        setFilliped([]);
        setDisable(false);
      }
    }
  };

  useEffect(() => {
    if (numbers.length === solved.length && solved.length > 0) {
      setWon(true);
    }
  }, [solved]);

  return (
    <div className="bg-blue-50 min-h-screen flex flex-col gap-6 items-center p-10">
      <h3 className="text-blue-600 font-bold text-3xl">Memory Game</h3>
      <div
        className="grid gap-4"
        style={{ gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)` }}
      >
        {numbers.map((item, i) => {
          return (
            <button
              onClick={() => handleClick(i)}
              className={`w-24 h-24 border border-gray-600 rounded-lg shadow-lg  text-xl font-bold transition-all duration-300 ease-in-out ${
                isSolved(i)
                  ? "bg-green-500 text-white"
                  : isFilliped(i)
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300"
              } `}
            >
              {isFilliped(i) ? item : "?"}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default MemoryGame;
