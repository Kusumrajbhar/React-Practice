import react, { useState } from 'react'

const FunctionSetState = () => {
    const [state, setState] = useState({
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
            <br/>
            {state.message}<br/><br/>
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}

export default FunctionSetState