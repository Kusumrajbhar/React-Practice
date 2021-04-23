import React, {Component} from 'react';


class Welcome extends Component {
    render() {
        const greet = {
            color:'red',
            fontSize: '20px'
        }
        return (
        <div>
        <h1>
        I am class Component Of {this.props.name} {this.props.lastName}
        </h1>
        <p style={greet}>hello</p>                 {/*internal css */}
        <button className="Welcome">Click me</button>  {/*external css */}
        <p style={{color:"green"}}>Please Click the button</p> {/*inline css */}
        </div>
        )
    }
}

export default Welcome