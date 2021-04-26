import React, { Component } from 'react'

class ErrorBoundary2 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
           hasError:false  
        }
    }

    static getDerivedStateFromError(error) {   //to throw the error
        return {
            hasError: true
        }
    }
     
    componentDidCatch(error, info) {       //to log the error
      console.log('error')
      console.log('info')
    }
    
    render() {
     if (this.state.hasError) {
         return <h1>Something went Wrong</h1>
     }else {
         return <h1>{this.props.children}</h1>
     }   
    }
}

export default ErrorBoundary2
