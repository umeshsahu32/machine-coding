import React, { Fragment } from "react";
import styles from "./QuizApp.module.css";

const QuestionComponent = ({ question, onAnswerClick = () => {} }) => {
  return (
    <Fragment>
      <div className={styles.question}>
        <h2>{question.question}</h2>
        <ul className={styles.options}>
          {question.answerOptions.map((option) => {
            return (
              <li key={option.text}>
                <button onClick={() => onAnswerClick(option.isCorrect)}>
                  {option.text}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </Fragment>
  );
};

export default QuestionComponent;
