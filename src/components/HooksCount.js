import React, {useState} from 'react'

function HooksCount() {
    const [count, setCount] = useState(0)

    const countIncrement = () => {setCount(count + 1) }
    
    return (
        <div>
            <button onClick={countIncrement}>Count - {count}</button>
            <p>{count}</p>
        </div>
    )
}

export default HooksCount
 