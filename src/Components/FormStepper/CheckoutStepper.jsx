import { Fragment, useEffect, useRef, useState } from "react";
import styles from "./FormStepper.module.css";

const CheckoutStepper = ({ stepsConfig = [] }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isComplete, setIsComplete] = useState(false);
  const [margins, setMargins] = useState({
    marginLeft: 0,
    marginRight: 0,
  });
  const stepRef = useRef([]);

  useEffect(() => {
    if (stepRef.current.length > 0) {
      setMargins({
        marginLeft: stepRef.current[0].offsetWidth / 2,
        marginRight: stepRef.current[stepsConfig.length - 1].offsetWidth / 2,
      });
    }
  }, [stepRef, stepsConfig.length]);

  if (!stepsConfig.length) {
    return <></>;
  }

  const handleNext = () => {
    setCurrentStep((prevStep) => {
      if (prevStep === stepsConfig.length) {
        setIsComplete(true);
        return prevStep;
      } else {
        return prevStep + 1;
      }
    });
  };

  const calculateProgressBarWidth = () => {
    return ((currentStep - 1) / (stepsConfig.length - 1)) * 100;
  };

  console.log(
    "calculateProgressBarWidth",
    currentStep,
    calculateProgressBarWidth()
  );

  const ActiveComponent = stepsConfig[currentStep - 1]?.Component;

  const resetBtnClickHandler = () => {
    setCurrentStep(1);
    setIsComplete(false);
  };

  return (
    <Fragment>
      <div className={styles.stepper}>
        {stepsConfig.map((step, index) => {
          return (
            <div
              key={step.name}
              ref={(el) => (stepRef.current[index] = el)}
              className={`${styles.step} ${
                currentStep > index + 1 || isComplete ? styles.complete : ""
              } ${currentStep === index + 1 ? styles.active : ""}`}
            >
              <div
                className={`${styles.stepNumber} ${
                  currentStep === index + 1 ? styles.activeStepNumber : ""
                } ${
                  currentStep > index + 1 || isComplete
                    ? styles.completeStepNumber
                    : ""
                }`}
              >
                {currentStep > index + 1 || isComplete ? (
                  <span>&#10003;</span>
                ) : (
                  index + 1
                )}
              </div>
              <div className={styles.stepName}>{step.name}</div>
            </div>
          );
        })}

        <div
          className={styles.progressBar}
          style={{
            width: `calc(100% - ${margins.marginLeft + margins.marginRight}px)`,
            marginLeft: margins.marginLeft,
            marginRight: margins.marginRight,
          }}
        >
          <div
            className={styles.progress}
            style={{ width: `${calculateProgressBarWidth()}%` }}
          ></div>
        </div>
      </div>

      <div className={styles.btn_container}>
        <ActiveComponent />
        {!isComplete && (
          <button className={styles.btn} onClick={handleNext}>
            {currentStep === stepsConfig.length ? "Finish" : "Next"}
          </button>
        )}

        {isComplete && (
          <button className={styles.btn} onClick={resetBtnClickHandler}>
            Reset
          </button>
        )}
      </div>
    </Fragment>
  );
};

export default CheckoutStepper;
