import React, { useEffect } from "react";
import { getSteps } from "../utils/API";

const Steps = () => {
  useEffect(() => {
    getSteps().then((res) => console.log(res));
  }, []);
  return <div className="steps">Hello</div>;
};

export default Steps;
