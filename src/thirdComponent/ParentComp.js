import React, { Component, PureComponent } from 'react'
import MemoCompo from './MemoCompo'
import PureComp from './PureComp'
import RegularComp from './RegularComp'

class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"Kusum"
        }
    }
//if will make parent to pure component it will render once all component then stops rendering coz
//pure compenents check state with previous state if it finds same do not render again    
//if parent not render, children will also not render  
    componentDidMount() {
        setInterval(()=> {
            this.setState({
                name: 'kusum'
            })
        },
        5000)
    }

    render() {
        console.log('*********Parent console********')
        return (
            <>
                Parent Component
                 {/* <MemoCompo name={this.state.name} /> */}
                <PureComp name={this.state.name}/>
                {/* <RegularComp name={this.state.name}/> */}
            </>
        )
    }
}

export default ParentComp

//output looks like
// *********Parent console********
//  Pure Component Console     //this executed one tm coz state kusum set to anothe state kusum first bt lated it will found it to same hence will not execute
// (6)*********Parent console********
//*********Parent console********


