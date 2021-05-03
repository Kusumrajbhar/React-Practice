import React, { useState, useEffect } from 'react'

function UseEffect1() {
const [count, setCount] = useState(0)

const incrementCount = () => {
    setCount(count + 1)
}
//useEffect have 2 parameters 1-callback function and 2-dependency
useEffect(() => {                     //useEffect runs after every render
 document.title = `you clicked ${count} times`    //updating title after every render
   console.log("useEffect")
})
console.log("count")
    return (
        <div>
            <button onClick={incrementCount}>Count : {count}</button>
        </div>
    )
}

export default UseEffect1

//useEffect act similar to didmount changes after component renders
//when count changes , useEffect runs after every change
//if we put dependency it will become dependent on changes of that dependency i.e[count] 
