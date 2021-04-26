import React, { Component } from 'react'

export class MountingLifeCycleB extends Component {
   constructor(props) {
       super(props)
   
       this.state = {
            name:'kusum'
       }
       console.log('lifecycleB constructor')
   }

   static getDerivedStateFromProps(props,state) {     //include static else being ignored
       console.log('getDerivedStaticFromProps')
       return null
   }
   
   componentDidMount() {
       console.log('LifecycleB componentDidMount')
   }

   componentDidUpdate() {
    console.log('LifecycleB componentDidUpdate')
   }

    render() {
        console.log('lifecycleB render')
        return (
            <div>
                Lifecycle B
            </div>
        )
    }
}

export default MountingLifeCycleB
