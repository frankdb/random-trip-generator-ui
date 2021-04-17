import React from "react";
import Button from "../layout/Button";

const FlowController = ({ step }) => {
  console.log(step, "in flow controller");

  if (step.type === "textInput") {
    return (
      <div className="flex flex-col items-center justify-center">
        <h2 className="mb-8 text-2xl font-bold">{step.question}</h2>
        <input type="text" />
      </div>
    );
  } else if (step.type === "dropdown") {
    return (
      <div className="flex flex-col items-center justify-center">
        <h2 className="mb-8 text-2xl font-bold">{step.question}</h2>
        <input type="radio" id="usa" name="location" value="1" />
        <input type="radio" id="outside usa" name="location" value="2" />
      </div>
    );
  } else {
    return null;
  }
};

export default FlowController;
