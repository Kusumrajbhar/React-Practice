import React, { useState } from "react";
import usePrevious from "./usePrevious";

const PreviousComponent = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Kusum");
  const previousCount = usePrevious(count);
  return (
    <div>
      {count} - {previousCount}
      <div> {name} </div>
      <button onClick={() => setCount((preCount) => preCount + 1)}>
        count
      </button>
      <button onClick={() => setName("shraddha")}>name</button>
    </div>
  );
};

export default PreviousComponent;
