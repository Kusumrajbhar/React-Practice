import React from 'react'
//import styles from '../../src/ModuleCss.modole.css'  - way to import 
//stylesheet.module.css - can access only locally not globally
//normal .css can access globally 
 //'<h1 style={styles.success}>inline<h1/>'  success is className

const paragraph = {
    fontsize: '50px',
    color: 'blue'
}

function CssFirst(props) {
    let className=props.primary ? 'primary' : ''
    return (
        <div>
            <h1 className={`${className} font-xl`}>Stylesheet</h1>  {/*aply two classes using backtick*/}
            <h1 style={paragraph}>inline</h1>
        </div>
    )
}

export default CssFirst
