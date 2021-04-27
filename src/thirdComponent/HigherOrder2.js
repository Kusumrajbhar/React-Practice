//Increae counter on hover
import React, { Component } from 'react'
import UpdatedComponent from './HigherOrder3'

class HigherOrder2 extends Component {
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
        const {count, incrementCount, name} = this.props //
        //const {count} = this.state
        return (
            <div>
                {/* <h1 onMouseOver={incrementCount}>{this.props.name} Hover {count} times </h1> */}
                <h1 onMouseOver={incrementCount}>{name} Hover {count} times </h1>
            </div>
        )
    }
}

export default UpdatedComponent(HigherOrder2)  //updatedComponet function accept original component i.e
                                            //HigherOrder1 and returns new component as HigherOrder3

