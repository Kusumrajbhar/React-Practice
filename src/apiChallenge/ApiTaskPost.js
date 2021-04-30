import React, { Component } from 'react'

export class ApiTaskPost extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            userName: ''
        }
    }
    
    changeHandler = (e) => {
     this.setState({
         [e.target.name]: e.target.value
     })
    }

    render() {
        return (
            <div>
            <form>
                <div>
                    <input type='text' name='userName'  onChange={this.changeHandler}/>
                </div>
            </form>  
            </div>
        )
    }
}

export default ApiTaskPost
