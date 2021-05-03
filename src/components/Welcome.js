import React, {Component} from 'react';
import { Link } from 'react-router-dom' 
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
        <h1>
        I am class Component Of {this.props.name} {this.props.lastName} 
        </h1>
        <p style={this.greet}>hello</p>                 {/*internal css */}

        <Link to = './counter'>
        <button className="welcome">Click me</button>  {/*external css */}
        </Link>

        <p style={{color:"green"}}>Please Click the button</p> {/*inline css */}
        </div>
        )
    }
}

export default Welcome