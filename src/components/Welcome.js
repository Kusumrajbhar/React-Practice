import React, {Component} from 'react';
import { Link, NavLink } from 'react-router-dom' 
//here props coming from App.js 

class Welcome extends Component {
     greet = {
        color:'red',
        fontSize: '20px'
    }
    render() {
        const {name, lastName} = this.props
        return (
        <div>
        <Link to = 'counter'>
        <h1>
        I am class Component Of {this.props.name} {this.props.lastName} 
        </h1>
        </Link>
        <p style={this.greet}>hello</p>                 {/*internal css */}

        <Link to = './counter'>
        <button className="welcome">Click me</button>  {/*external css */}
        </Link>
        
        <NavLink myActive ='activeLink' to='/greet'>
        <p style={{color:"green"}}>Please Click the button</p> {/*inline css */}
        </NavLink>

        <Link to='/counter'>
        <p> testing Link</p>
        </Link>

        </div>
        )
    }
}

export default Welcome

//can link to anything heading, text, para also
//to='counter' , to='/counter' --- both works
//to='/counter' -- absolute path and to ='/counter/welcome' -- relative path