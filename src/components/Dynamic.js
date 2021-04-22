import React, {Component} from 'react';
//{} using this we can render dynamic content from component
class Dynamic extends Component {
    render() {
        let content = ''
        if(true){
            content = "Welcome";
        }
        return( 
            <div> 
            <h1>
            {/* {content} */}
            </h1>
          {/* <p>{ 5 == 3 ? "yes" : "No"}</p> */}
            <p>{new Date().toLocaleTimeString()}</p>
            </div>
        )
    }
}

export default Dynamic;