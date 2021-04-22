import React, { Component } from 'react'

class OnchangeEvent extends Component {
    constructor(props) {
        super(props)
            this.state = {
             username: '',
             age: null
        }
    }

    changeHandler = (event) => {
        
        console.log(event)
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({
             [nam]: val
        })
    }

    submitHandler = (event) => {
       event.preventDefault();
        alert("You are submitting" + " " + this.state.username)
    }

    // validationHandler = (event) => {
    //    let nam = event.target.name;
    //    let val = event.target.value;
    //    if(nam==="age"){
    //        if(!Number(val)){
    //            alert("your age must be a number");
    //        }
    //    }
    //    this.setState({
    //        [nam]:val
    //    });
    // }
    
    // upperCase =() => {
        
    // }


    render() {
        return (
            <form onSubmit={this.submitHandler}>
            <h1>Hello {this.state.username}</h1>
            <p>Enter Your Name: </p>
            <input
            type='text'
            name='username'
            id="uppercase"
            onChange={this.changeHandler}
            onKeyUp={this.upperCase}
            /> <br/>
            <p>Enter Your Age</p>
            <input 
            type='text'
            name='age'
            onChange={this.changeHandler}
            />
            <br/>
            <input 
            type= 'submit'
            />   
            </form>
        )
    }
}

export default OnchangeEvent
