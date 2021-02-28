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
      console.log(steps);
    });
  }, []);

  return (
    <div id="steps">
      <h3 className="step-heading">How It Works</h3>
      {steps && steps.map((step) => <StepItem step={step} />)}
    </div>
  );
};

export default Steps;
