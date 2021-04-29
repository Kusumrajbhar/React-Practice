import React from 'react'
import {UserConsumer} from './UserContext'

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
