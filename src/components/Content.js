import React from "react";
import Button from "./Button";

const Content = () => {
  return (
    <div className="content">
      <h4>New Games & Accessories</h4>
      <h1>
        <span>Monthly Packages.</span>
        <span>Excitement delivered daily.</span>
      </h1>
      <div className="paragraph">
        <p>
          What's the best way to shop for the latest video games and
          peripherals? How about never shopping at all? You'll get new stuff on
          your doorstep - every month.
        </p>
      </div>
      <Button />
    </div>
  );
};

export default Content;
