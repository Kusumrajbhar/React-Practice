import React, { useState } from 'react'

function HookCounter2() {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)

    const incrementThree = () => {
        setCount(count + 3)
    }

    const incrementFive = () => {
        for (let i = 0; i < 5; i++) {
            setCount(prevCount => prevCount + 1)
        }
    }

    return (
        <div>
            Count: {count}<br /><br />
            <button onClick={() => setCount(initialCount)}>Reset</button><br /><br />
            <button onClick={() => setCount(count + 1)}>Increment</button><br /><br />
            <button onClick={() => setCount(count - 1)}>Decrement</button><br /><br />
            <button onClick={incrementThree}>Increment 3</button><br /><br />
            <button onClick={incrementFive}>Increment 5</button><br /><br />
        </div>
    )
}

export default HookCounter2
