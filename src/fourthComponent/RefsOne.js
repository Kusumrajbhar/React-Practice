import React, { Component } from 'react'

class RefsOne extends Component {
    constructor(props) {
        super(props)
             this.inputRef = React.createRef()  //1st step to create
    }

    componentDidMount(){
        this.inputRef.current.focus()
        console.log(this.inputRef)  //as object having methods focus and many more 
    }
    
    // focusInput() {
    //     this.inputRef.current.focus()
    // }

    clickHandler = () => {
        alert(this.inputRef.current.value)  //fetches value of input field
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef}/>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default RefsOne

//1st step to create --- this.inputRef = React.createRef()
//2nd step to attach ref use reserved ref attribute --- ref={this.inputRef}
//3rd step call the method