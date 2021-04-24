import React from 'react'
import Radium from 'radium'

function RadiumConcept() {
    const radiumStyle = {
        color:'red',
        ':hover': {
            backgroundColor: 'yellow'
        }
    }
    return (
        <div>
            <br/><br/>
            <button style={radiumStyle}>Radium Here</button>
        </div>
    )
}

export default Radium(RadiumConcept)
