import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)  
        this.state = {
             count: 0
        }
    }

    increment() {
        this.setState({      //setState having 2 parameter 1-object, 2-Callback 
            count: this.state.count + 1
        },                                //never write code after the setState instead write in call back
        () => {
            console.log("Callback Value", this.state.count)
        }
        )

        this.setState(prevState => ({  //when u have to update previous state pass function as argument instead of object
            count: prevState.count + 1
        }))
        // this.state.count = this.state.count + 1   //never modify the state directly for modification use setstate 
        console.log(this.state.count)   //never write after end of setState
    }

    incrementThree() {
        this.increment()
        this.increment()
        this.increment()
    }
    
    render() {
        return (
            <div>
                Count - {this.state.count}<br/>
                <button onClick={()=>this.incrementThree()}>Increment</button>
            </div>
        )
    }
}

export default Counter
