import React, {Component} from 'react'

const UpdatedComponent = (OrginalComponent) => { //updatedComponet function accept original component i.e
                                         //HigherOrder1 and returns new component as HigherOrder3
    class NewComponent extends Component {
        constructor(props) {
            super(props)
        
            this.state = {
                 count: 0
            }
        }
        
        incrementCount = () => {
            this.setState({
                count: this.state.count + 1
            })
        }
        //{...this.props} coz now child comp r bound to HOC function i will pass prop from App.js
        //it will not accept hence use **spread operator**  
        render() {
            return <OrginalComponent 
            
            count={this.state.count}
            {...this.props}
            incrementCount={this.incrementCount}
            />
        }
    }
    return NewComponent
}

export default UpdatedComponent  //exported so that can import by 1 and 2  

//in HigherOrder1 we export like  UpdatedComponent(HigherOrder1) means we r passing higherOrder1 as a 
//argument to the function UpdatedComponent means now 
//i.e const UpdatedComponent = (HigherOrder1 ) => { 
//and   render() {
//     return <HigherOrder1   ---- so props will pass to this components
//     name='kusum'
//     count={this.state.count}
//     incrementCount={this.incrementCount}
//     />
// }



//its easy to pass diferent parameters from hoc to child 
//i.e const UpdatedComponent = (OrginalComponent, increasedCount) 
//increasedCount -- this is the parameter used to increse any number of count from child comp
// count: this.state.count + increasedCount
//export default UpdatedComponent(HigherOrder2,5) //this will incresed by 5  --from higherOrder2  
//refer hoc video 3rd 