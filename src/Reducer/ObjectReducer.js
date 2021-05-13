import React, { useReducer } from "react";

function ObjectReducer() {
  const initialState = {
    firstCounter: 0,
    secondCounter: 10,
  };

  const reducer = (state, action) => {
    console.log(state, action);
    switch (action.type) {
      case "Increment":
        return {
          ...state,
          firstCounter: state.firstCounter + 1,
        };
      case "Decrement":
        return {
          ...state,
          firstCounter: state.firstCounter - 1,
        };
      case "IncrementByValue":
        return {
          ...state,
          secondCounter: state.secondCounter + action.value,
        };
      case "DecrementByValue":
        return {
          ...state,
          secondCounter: state.secondCounter - action.value,
        };
        case 'reset': return initialState
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState); //this returns state and dispatch here
  //state = initialState and dispatch to trigger action

  return (
    <div>
      <div>{state.firstCounter}</div>
      <button onClick={() => dispatch({ type: "Increment", value: 1 })}>
        Increment
      </button>
      <br />
      <button onClick={() => dispatch({ type: "Decrement", value: 1 })}>
        Decrement
      </button>
      <br />
      <button onClick={() => dispatch({ type: "IncrementByValue", value: 5 })}>
        IncrementByValue
      </button>
      <br />
      <button onClick={() => dispatch({ type: "DecrementByValue", value: 5 })}>
        DecrementByValue
      </button>
      <br />
      <button onClick={() => dispatch('reset')}>
        Reset
      </button>
      <div>{state.secondCounter}</div>
    </div>
  );
}

export default ObjectReducer;
