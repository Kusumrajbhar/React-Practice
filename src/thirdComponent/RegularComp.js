import React, { Component } from 'react'
//props from parentComp

class RegularComp extends Component {
    render() {
        console.log('Regular console')
        return (
            <div>
                Regular Component {this.props.name}
            </div>
        )
    }
}

export default RegularComp

//regular component not effected by any shallow difference they will re render the components



//*********Parent console********
//  Regular console
//  *********Parent console********
//  Regular console
//  *********Parent console********
//  Regular console
//  *********Parent console********
//  Regular console


//this will be output even if state is same i.e kusum not changing, then also regular comp will render
//coz they don't act like pure comp.
//as pure comp only renders when there is change in state