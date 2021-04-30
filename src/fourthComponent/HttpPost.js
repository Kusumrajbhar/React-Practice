import React, { Component } from 'react'
import axios from 'axios'

class HttpPost extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             myId : '',
             myTitle : '',
             body : ''
        }
    }

    changeHandler = (e) => {
    this.setState({[e.target.name] : e.target.value})  //set name with value
    }

    submitHandler = (e) => {
     e.preventDefault()    //to prevent page refresh
     console.log(this.state)     //whatever filled in input box consoled as a object
     axios.post('https://jsonplaceholder.typicode.com/posts', this.state)  //this.state is the response value
     .then(response=>{
      console.log(response)
     })
     .catch(error=>{
      console.log(error)
     })
    }
    //after submit will see object added to data with unique id i.e 101
    
    render() {
        const {myId, myTitle, body } = this.state
        return (
            <>
            <form onSubmit={this.submitHandler}>
                <div>
                    <input type="text" name="myId" value={myId} onChange={this.changeHandler} />
                </div>
                <div>
                    <input type="text" name="myTitle" value={myTitle} onChange={this.changeHandler} />
                </div>
                <div>
                    <input type="text" name="body" value={body} onChange={this.changeHandler} />
                </div>
                <button type='submit'>Click here</button>
            </form>        
            </>
        )
    }
}

export default HttpPost


//[e.target.name] : e.target.value -- name field is target by e.target.name and set by the value 
// e.target.value(which is get by handler which access the value changed in input box) 
//initially     myId : '',
           // myTitle : '',   ---initially empty
           // body : ''
// this.setState({[e.target.name] : e.target.value})  -- this is used to set the value enter by user


