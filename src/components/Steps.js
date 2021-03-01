import React, { useEffect, useState } from "react";
import { getSteps } from "../utils/API";
import { sortSteps } from "../utils/sortSteps";
import { getRecentDate } from "../utils/getRecentDate";
import StepItem from "./StepItem";

const Steps = () => {
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    getSteps().then((stepsArray) => {
      const sortedSteps = sortSteps(stepsArray);
      setSteps(getRecentDate(sortedSteps));
    });
    //eslint-disable-next-line
  }, []);

  return (
    <div className="container">
      <h3 className="step-heading">How It Works</h3>
      <div id="step-wrapper">
        {steps &&
          steps.map((step) => <StepItem step={step} key={step.stepNumber} />)}
      </div>
    </div>
  );
};

export default Steps;
