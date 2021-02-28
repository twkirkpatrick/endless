import React from "react";

const StepItem = ({ step: { stepNumber, title, body } }) => {
  return (
    <div>
      <h1>0{stepNumber}</h1>
      <h4>{title}</h4>
      <p>{body}</p>
    </div>
  );
};

export default StepItem;
