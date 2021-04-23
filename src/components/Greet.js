import React from 'react';

function Greet(props) {
    console.log(props)
    //props.name = "shreya"
    const {name, lastName, children} = props
    return (
    <>
    <h1>I am functional Component of {name} {lastName}</h1>
    <p>{children}</p>
    </>
    )
}

//const Greet = () => <h1>Hello Kusum</h1>

export default Greet;