import React, { useState, useEffect } from 'react'

function UseEffect1() {
const [count, setCount] = useState(0)

const incrementCount = () => {
    setCount(count + 1)
}

useEffect(() => {                     //useEffect runs after every render
    document.title = `you clicked ${count} times`    //updating title after every render
})

    return (
        <div>
            <button onClick={incrementCount}>Count : {count}</button>
        </div>
    )
}

export default UseEffect1
