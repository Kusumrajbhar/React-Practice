import React from 'react'

function ListOutputting(props) {
    //const names = ["kusum", "Shraddha", "Siddhi"]
    const  nameItem = props.names
   // const nameList =  nameItem.map(name => <li>{name}</li>)
    return (
        <div> 
         {nameItem}

         {/* {
             names.map(name => <h2>{name}</h2>)
         } */}

            {/* <h2>{names[0]}</h2>
            <h2>{names[1]}</h2>
            <h2>{names[2]}</h2> */}
        </div>
    )
}

export default ListOutputting
