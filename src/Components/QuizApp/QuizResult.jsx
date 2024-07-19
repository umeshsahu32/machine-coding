import React, { Fragment } from "react";
import styles from "./QuizApp.module.css";

const QuizResult = ({ userAnswers, questions, resetQuiz = () => {} }) => {
  const correctAnswers = userAnswers.filter((answer) => answer).length;
  return (
    <Fragment>
      <div className={styles.results}>
        <h2>Quiz Result</h2>
        <p>
          You answered {correctAnswers} out of {questions.length} questions{" "}
          <span onClick={resetQuiz}>Click here to Retry</span>
        </p>
        <ul>
          {questions.map((question, index) => {
            return (
              <li key={index} data-correct={userAnswers[index]}>
                Q{index + 1}. {question.question}
                <b>
                  {userAnswers[index]
                    ? ""
                    : `- ${
                        question.answerOptions.find((ans) => ans.isCorrect).text
                      }`}
                </b>
              </li>
            );
          })}
        </ul>
      </div>
    </Fragment>
  );
};

export default QuizResult;
