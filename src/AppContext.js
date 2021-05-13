import React, { useState } from 'react'
import './App.css'
import ContextA from './contextComponent/ContextA'
import {UserProvider} from './contextComponent/UserContext'

//wrape with provider component

function AppContext() {
    const [state,setState] = useState('kusum')

    const handler = () => {
     return setState('shraddha')
    }

    return (
        <div className="App">
            {/* <UserProvider value={handler} >   
                <ContextA />
            </UserProvider>         */}
        </div>
    )
}

export default AppContext
 