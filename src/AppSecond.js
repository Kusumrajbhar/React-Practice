//import React from 'react'
import React, {Component} from 'react';
import ListOutputting from './secondComponent/ListOutputting'
import ListOutputting2 from './secondComponent/ListOutputting2'
import CssFirst from './secondComponent/CssFirst'
import Pseudo from './secondComponent/Pseudo'
import RadiumConcept from './secondComponent/RadiumConcept';
import Home from './secondComponent/Home'
//import './regularCss'
//import styles from './'

function AppSecond() {
    //const names = ["kusum", "Shraddha", "Siddhi"];
    //onst nameList =  names.map((name,index) => <h2 key={index}> {index} {name}</h2>)
    return (
        <div className="AppSecond">
            <Home />
            {/* <Pseudo /> */}
            {/* <RadiumConcept /> */}
            {/* <CssFirst primary={false}/> */}
            {/* <ListOutputting names = {nameList} /> */}
            {/* <ListOutputting2 /> */}
        </div>
    )
}

export default AppSecond
