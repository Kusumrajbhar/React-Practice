import React, { Component } from 'react'
import Child from './Child'

class Parent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: '',
            // show: false
        }
    }

   inputChange = (e) => {
       this.setState({
         name: e.target.value,
        //show:true
       })   
   } 
    
    render() {
        return (
            <div>
                <input type='text' onChange={this.inputChange}/>
                <Child  name={this.state.name} />
            </div>
        )
    }
}

export default Parent

