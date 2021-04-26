import React from 'react'

function ErrorHero(props) {
    if(props.heroName === 'joker') {
        throw new Error('not a hero')    //way to throw error in error boundary way 
    }
    return (
        <div>
            {props.heroName}
        </div>
    )
}

export default ErrorHero
