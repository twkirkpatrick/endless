import React, { useEffect, useState } from "react";
import { getSteps } from "../utils/API";
import { sortSteps } from "../utils/sortSteps";
import { getRecentDate } from "../utils/getRecentDate";

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
    <div className="steps">
      {steps && steps.map((step) => <h1>{step.title}</h1>)}
    </div>
  );
};

export default Steps;
