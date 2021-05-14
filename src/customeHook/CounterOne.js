import React from "react";
import CounterCustome from "./CounterCustome";

function CounterOne() {
  const [increment, decrement, count] = CounterCustome(10, 2);
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={increment}>OneInc {count}</button>
      <button onClick={decrement}>TwoDec {decrement}</button>
    </div>
  );
}

export default CounterOne;
