//increase counter on button click
import React, { Component } from 'react'
import UpdatedComponent from './HigherOrder3'

class HigherOrder1 extends Component {
    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //          count: 0
    //     }
    // }
    
    // incrementCount = () => {
    //     this.setState({
    //         count: this.state.count + 1
    //     })
    // }

    render() {
        //using props from higherOrder3 component
        const {count, incrementCount} = this.props   //destructuring
        //const { count } = this.state   //destructuring
         return (
            <div>
               {/* <button onClick={this.incrementCount}>{this.props.name} clicked {count} times</button>  */}
               <button onClick={incrementCount}>{this.props.name} clicked {count} times</button> 
            </div>
        )
    }
}

export default UpdatedComponent(HigherOrder1)  //updatedComponet function accept original component i.e
                                               //HigherOrder1 and returns new component as HigherOrder3
