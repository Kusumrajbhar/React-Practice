import React from 'react'
import './App.css'
import ContextA from './contextComponent/ContextA'
import {UserProvider} from './contextComponent/UserContext'

//wrape with provider component

function AppContext() {
    return (
        <div className="App">
            {/* <UserProvider value='welcome'>   
                <ContextA />
            </UserProvider>         */}
        </div>
    )
}

export default AppContext
 