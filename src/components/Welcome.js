import React, {Component} from 'react';

class Welcome extends Component {
    render() {
        return <h1>
            I am class Component Of {this.props.name} {this.props.lastName}
            </h1>
    }
}

export default Welcome