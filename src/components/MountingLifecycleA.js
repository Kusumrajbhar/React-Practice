import React, { Component } from 'react'
import MountingLifeCycleB from './MountingLifeCycleB'

export class MountingLifecycleA extends Component {
   constructor(props) {
       super(props)
   
       this.state = {
            name:'kusum'
       }
       console.log('lifecycleA constructor')
   }

   static getDerivedStateFromProps(props,state) {     //include static else being ignored
       console.log('getDerivedStaticFromProps A')   //accept props and state 
       return null                            //has to return null or an object represent updated state
   }
   
   componentDidMount() {
       console.log('LifecycleA componentDidMount')
       document.title = `your name is ${this.state.name}` 
   }

   componentDidUpdate() {
    console.log('LifecycleA componentDidUpdate')
    document.title = `your name is ${this.state.name}` 
   }

   shouldComponentUpdate(newProps, newState) {  //after making t false dimount and didiupdate will not triggered
       console.log('shouldComponentUpdate() is Triggered')
       console.log("newProps",newProps)
       console.log("newState",newState)
       return false
   }

   changeState = () => {
       this.setState({
           name:'shraddha'
       })
   }

    render() {
        console.log('lifecycleA render')
        return (
            <div>
                <div>Lifecycle A</div>
                <button onClick={this.changeState}>Change  State - {this.state.name}</button>
                <MountingLifeCycleB />
            </div>
        )
    }
}

export default MountingLifecycleA
