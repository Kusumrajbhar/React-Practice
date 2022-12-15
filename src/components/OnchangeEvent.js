import React, { Component } from 'react'

class OnchangeEvent extends Component {
   constructor(props) {
     super(props)
     //controlled input element 
            this.state = {
             username: '',
             age: null,
             count: 0,
             uncontrolled : ''
        }
       // this.changeHandler = this.changeHandler.bind(this);
       this.submitHandler = this.submitHandler.bind(this);
       //this.increseCount = this.increseCount.bind(this);
    }

    //uncontolled input element
    inputValue = React.createRef();

      changeHandler(event){       
        console.log(event)
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({
             [nam]: val
        })
    } 

    uncontrolledChanhgeHandler = () => {
        this.setState({uncontrolled: `Tha uncontrolled value is ${this.inputValue.current.value}`})
    }

    submitHandler(event){
       event.preventDefault();
        alert("You are submitting" + " " + this.state.username)
    }

    increseCount = () => {
        this.setState({count: this.state.count+1})
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
            <>
            <form onSubmit={this.submitHandler}>
            <h1>Hello {this.state.username}</h1>
            <p>Enter Your Name: </p>
            <input
            type='text'
            name='username'
            id="uppercase"
            placeholder='controlled'
            onChange={this.changeHandler}
            onKeyUp={this.upperCase}
            /> <br/>
            <p>Enter Your Age</p>
            <input 
            type='text'
            name='age'
            placeholder='controlled'
            onChange={this.changeHandler}
            />
            <br/>
            <input 
            type= 'submit'
            />   
            <br />
            <input type="text" placeholder='uncontrolled' ref={this.inputValue} onChange={this.uncontrolledChanhgeHandler}/>
            <h2>{this.state.uncontrolled}</h2>
            </form>
            <button type="submit" onClick={this.increseCount}>Count-{this.state.count}</button>
            </>
        )
    }
}

export default OnchangeEvent
