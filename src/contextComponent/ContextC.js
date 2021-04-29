import React from 'react'
import {UserConsumer} from './UserContext'

//wrape with consumer component

function ContextC() {
    return (
       <UserConsumer> 
           {
             (username) => {
               return <div>Hello {username}</div>
             }
           }
       </UserConsumer>
    )
}

export default ContextC
