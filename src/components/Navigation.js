import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Navigation extends Component {
   alertHandler = () => {
       alert('You are loggedIn')
       this.props.history.push('/welcome')
   }

    render() {
        return (
            <div>
               <button onClick={this.alertHandler}>Login</button> <br />
               {/* <button onClick={()=> this.props.history.push('/counter')}>counter page</button> */}
            </div>
        )
    }
}

export default withRouter(Navigation)   //withRouter HOC
