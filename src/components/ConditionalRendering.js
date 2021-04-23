import React, {useState} from 'react'

function ConditionalRendering() {
    const [isLoggedIn, setState] = useState(true)

    // return isLoggedIn && <div>Hello Kusum</div>     //short circuit operator

    return (
        isLoggedIn ?                            //ternary conditional operator
        <h3>Welcome Kusum</h3> : 
        <h3>Welcome Shraddha</h3>
    )
    
        // if (isLoggedIn) {                    //if else rendering
        //     return <h2>Welcome Kusum</h2>
        // }
        // else {
        //     return <h2>Welcome Shradda</h2>
        // }
        
}

export default ConditionalRendering
