import React, {Component} from 'react';
//here props coming from App.js 

class Welcome extends Component {
     greet = {
        color:'red',
        fontSize: '20px'
    }
    render() {
        return (
        <div>
        <h1>
        I am class Component Of {this.props.name} {this.props.lastName} 
        </h1>
        <p style={this.greet}>hello</p>                 {/*internal css */}
        <button className="welcome">Click me</button>  {/*external css */}
        <p style={{color:"green"}}>Please Click the button</p> {/*inline css */}
        </div>
        )
    }
}

export default Welcome