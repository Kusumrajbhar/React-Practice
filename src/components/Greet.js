import React from 'react';
import {useHistory} from "react-router-dom";

function Greet(props) {
    const history = useHistory();
    console.log(props)
    //props.name = "shreya"
    const {name, lastName, children} = props
    return (
    <>
    <h1>I am functional Component of {name} {lastName}</h1>
    <button onClick={()=>history.push("/welcome")}>Redirect</button>
    <p>{children}</p>
    </>
    )
}

//const Greet = () => <h1>Hello Kusum</h1>

export default Greet;