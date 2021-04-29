import React, { Component } from 'react'
import Input from './Input'

//import input into it and use focusInput() 
class FocusInput extends Component {
    constructor(props) {
        super(props)
             this.componentRef = React.createRef()
    }

    clickHandler = () => {
        this.componentRef.current.focusInput()
    }
    
    render() {
        return (
            <div>
                <Input ref={this.ComponentRef}/>
                <button onClick={this.clickHandler}>Focus Input</button>
                
            </div>
        )
    }
}

export default FocusInput
