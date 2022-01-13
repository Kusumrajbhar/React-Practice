import React from "react";
import UseToggle from "./UseToggle";

const ToggleComponent = () => {
  const [value, toggleValue] = UseToggle(false);
  return (
    <div>
      <div>{value.toString()}</div>
      <button onClick={toggleValue}>Toggle</button>
      <button onClick={() => toggleValue(true)}>Make true</button>
      <button onClick={() => toggleValue(false)}>Make false</button>
    </div>
  );
};

export default ToggleComponent;
