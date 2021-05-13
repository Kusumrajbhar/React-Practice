import React,{useReducer} from 'react'

function MultipleUseReducer() {
    const initialState = 0;

    const reducer = (state, action) => {
     console.log(state, action)
     if (action === 'Increment') {
         return state + 1;
     }
     if (action === 'Decrement') {
         return state - 1;
     }
    }

    const [state, dispatch] = useReducer(reducer, initialState); //this returns state and dispatch here 
     //state = initialState and dispatch to trigger action

     const [count, dispatchCount] = useReducer(reducer, initialState)

    return (
        <>
        <div>
            {state}
            <button onClick={()=>dispatch('Increment')}>Increment</button>
            <button onClick={()=>dispatch('Decrement')}>Decrement</button>
        </div>
          <div>
          {count}
          <button onClick={()=>dispatchCount('Increment')}>Increment</button>
          <button onClick={()=>dispatchCount('Decrement')}>Decrement</button>
      </div>
      </>
    )
}

export default MultipleUseReducer
