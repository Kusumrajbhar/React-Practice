import React from 'react'
import './App.css'
import ContextA from './contextComponent/ContextA'
import {UserProvider} from './contextComponent/UserContext'

function AppContext() {
    return (
        <div className="App">
            {/* <UserProvider  value="kusum"> */}
                <ContextA />
            {/* </UserProvider>
             */}
        </div>
    )
}

export default AppContext
 