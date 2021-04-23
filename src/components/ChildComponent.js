import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            {/* <button onClick={props.greetHandler}>Greet</button> */}
            <button onClick={()=>props.greetHandler('siddhi')}>Greet</button>
        </div>
    )
}

export default ChildComponent
