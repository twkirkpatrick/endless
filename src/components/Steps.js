import React, { useEffect, useState } from "react";
import { getSteps } from "../utils/API";
import { sortSteps } from "../utils/sortSteps";

const Steps = () => {
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    getSteps().then((steps) => {
      const sortedSteps = sortSteps(steps);
      console.log(sortedSteps);
    });
  }, []);

  return <div className="steps">Hello</div>;
};

export default Steps;
