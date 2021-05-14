import React from "react";
import CounterCustome from "./CounterCustome";

function CounterTwo() {
  const [increment, decrement, count] = CounterCustome(5, 5); //(5,5)=(initialCount, value)
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={increment}>OneInc </button>
      <button onClick={decrement}>TwoDec</button>
    </div>
  );
}

export default CounterTwo;
