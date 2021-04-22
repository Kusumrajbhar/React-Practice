import React, {Component} from 'react';

class Message extends Component {
    constructor(){
        super()
        this.state = {                            //this.state is a object
            Message : "Welcome Visitor"
        }
       // console.log("state",this.state);
    }
    
    changedMessage() {
        alert("Good Morning")
        this.setState({                                //setState is a function
            Message : "Thank You for Subscribing"
        })
       // console.log("setState", this.setState)
    }
    render() {
        return (
        <div>    
        <h1>{this.state.Message}</h1>
        <button onClick={() => this.changedMessage()}>Subscribe</button>
        </div>
        )
    }
}

export default Message