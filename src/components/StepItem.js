import React from "react";

const StepItem = ({ step: { stepNumber, title, body } }) => {
  return (
    <div className="step-container">
      <h1 className="step-content step-number">0{stepNumber}</h1>
      <h5 className="step-content title">{title}</h5>
      <p className="step-body">{body}</p>
    </div>
  );
};

export default StepItem;
