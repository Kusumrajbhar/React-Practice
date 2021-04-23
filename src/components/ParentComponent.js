import React, { useState } from 'react'
import ChildComponent from './ChildComponent'

//how to pass a function from parent to child component and also parameter from child to parent component
function ParentComponent() {
    const [state, setState] = useState({
        message: "Kusum"
    })
   
   function buttonClicked(friend){
        alert(`Hello ${state.message} from ${friend}`)
        setState({
            message: "shraddha"
        })

    }

    return (
        <div>
            <ChildComponent greetHandler={buttonClicked}/>
        </div>
    )
}

export default ParentComponent
