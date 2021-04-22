import react, { useState } from 'react'

let FunctionSetState = () => {
    let [state, setState] = useState({
        message: "Welcome"
    })
    const handleClick = () => {
        alert("Thanks For Visiting")
        setState({
            message: "Thank You for Visiting"
        })
    }
    return (
        <div>
            {state.message}
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}

export default FunctionSetState