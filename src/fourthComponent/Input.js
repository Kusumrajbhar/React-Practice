import React, { Component } from 'react'

class Input extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef() 
    }
    
    focusInput() {
        this.inputRef.current.focus()  //this function will be used in another component as a function
    }
    
    render() {
        return (
            <div>
               <input type="text" ref={this.inputRef} />
            </div>
        )
    }
}

export default Input
