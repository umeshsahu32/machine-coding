import React, { Fragment, useState } from "react";
import styles from "./QuizApp.module.css";
import QuestionComponent from "./QuestionComponent";
import QuizResult from "./QuizResult";
import questions from "./questions.json";
import HeadingComponent from "../HelperComponent/HeadingComponent/HeadingComponent";

const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  // Keep all of the logic in App.jsx

  const handleNextQuestion = (isCorrect) => {
    setCurrentQuestion(currentQuestion + 1);
    setUserAnswers([...userAnswers, isCorrect]);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers([]);
  };

  console.log("userAnswers", userAnswers);
  console.log("currentQuestion", currentQuestion);

  return (
    <Fragment>
      <HeadingComponent heading="Quiz App" />
      <div className={styles.parent}>
        {/* Questions Component */}
        {currentQuestion < questions.length && (
          <QuestionComponent
            question={questions[currentQuestion]}
            onAnswerClick={handleNextQuestion}
          />
        )}

        {/* Result Component */}
        {currentQuestion === questions.length && (
          <QuizResult
            userAnswers={userAnswers}
            questions={questions}
            resetQuiz={resetQuiz}
          />
        )}
      </div>
    </Fragment>
  );
};

export default QuizApp;
