import React, { Component } from 'react'
import './App.css';
import ParentComp from './thirdComponent/ParentComp';
import PureComp from './thirdComponent/PureComp';
import HigherOrder1 from './thirdComponent/HigherOrder1'
import HigherOrder2 from './thirdComponent/HigherOrder2';

class AppThird extends Component {
    render() {
        return (
            <div className="App">
            {/* <ParentComp />     */}
            {/* <HigherOrder1 name='kusum'/>
            <HigherOrder2 name='shraddha'/>  */}
            </div>
        )
    }
}

export default AppThird
