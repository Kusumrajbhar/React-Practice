import React, { Component } from 'react';

class Message extends Component {
    constructor() {
        super()
        this.state = {                            //this.state is a object
            Message: "Welcome Visitor"
        }
        // console.log("state",this.state);
        this.changedMessage = this.changedMessage.bind(this)
    }

    changedMessage() {
        alert("Good Morning")
        this.setState({                                //setState is a function
            Message: "Thank You for Subscribing"
        })
        // console.log("this", this)           //on {this.chamgedMessage} gives *this* value undefined
        // console.log("setState", this.setState)
    }
    render() {
        return (
            <div>
                <h1>{this.state.Message}</h1>
                {/* this keywork needs to bind else it will throw error */}
                <button onClick={this.changedMessage}>Subscribe</button>
            </div>
        )
    }
}

export default Message

//{() => this.changedMessage()} calling changedMessage function and using ()=> returning its value
//{this.changedMessage}  returning value of the function not the calling function for calling this.changedMessage()

//<button onClick={this.changedMessage}>Subscribe</button>  //this throws errow of setState undefined coz this keyword
//4 methods of binding
//1. <button onClick={this.changedMessage.bind(this)}>Subscribe</button>
//2. <button onClick={() => this.changedMessage()}>Subscribe</button>
//3. bind in constructor i.e this.changedMessage = this.changedMessage.bind(this) then in return statment write
//<button onClick={this.changedMessage}>Subscribe</button> 
//4. instead of making handler in class way write it with arrow function then will get the value of this
//and our code will run 
//code:   
// changedMessage=() => {
// alert("Good Morning")
// this.setState({                                
//     Message : "Thank You for Subscribing"
// })