import React , {useState} from 'react'

function Child(props) {

    const [visible, setVisible] = useState(false)
    const [temp, setTemp] = useState('')
 
    const display = () => {
        setVisible(true)
        setTemp('neha')
    }


    return (
        <div>
            {/* {props.show?  <button onClick={props.handler }>button</button> : null } */}
            <button onClick={display}>button</button>          
            {visible && props.name} {temp}
        </div>
    )
}

export default Child
