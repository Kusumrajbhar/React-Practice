import React, { useState } from "react";

const UseToggle = (defaultValue) => {
  const [value, setValue] = useState(defaultValue);
  const toggleValue = (value) => {
    setValue((currentValue) =>
      typeof value === "boolean" ? value : !currentValue
    );
  };
  return [value, toggleValue];
};

export default UseToggle;
