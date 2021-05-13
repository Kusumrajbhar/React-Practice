import React from 'react'
import {UserConsumer} from './UserContext'

//wrape with consumer component

function ContextC() {
  
    return (
       <UserConsumer> 
           {
             (username) => {
               {console.log('value',username())}
               return <div>Hello {username()}</div>
             }
           }
       </UserConsumer>
    )
}

export default ContextC
