import React from 'react'
import styles from './Mode.module.css'

const pseudo = {
background: 'yellow'
}

function Pseudo() {
    return (
        <div>
            <p className={styles.error}>About Neosoft</p>
            <h1 style={pseudo}>
            <a href="www.google.com">Neosoft Technology</a>
            </h1>
        </div>
    )
}

export default Pseudo
