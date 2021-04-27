import React, { PureComponent } from 'react'
//props from parentComp

//renders only when there is shallow **difference**
//shallow comp = {(string = string returns true [primitive]), object should refer same object reference} 
class PureComp extends PureComponent {
    render() {                         //implements shouldComponentUpdate with a shallow comparision
        console.log('Pure Component Console')
        return (
            <div>
                Pure Component {this.props.name}
            </div>
        )
    }
}

export default PureComp

//shouldComponentUpdate -- if true executes didmount and didupdate lifecycles
//if false prevents to execute didmount and didupdate lifecycles

//similar way when pure Component founds shallow difference act true like shouldComponentUpdate
// and when pure Component founds no shallow differences act false like shouldComponentUpdate and prevents
//to render the components

