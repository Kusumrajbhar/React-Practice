import React from 'react';

function Greet(props) {
    console.log(props)
    //props.name = "shreya"
    return (
    <>
    <h1>I am functional Component of {props.name} {props.lastName}</h1>
    <p>{props.children}</p>
    </>
    )
}

//const Greet = () => <h1>Hello Kusum</h1>

export default Greet;