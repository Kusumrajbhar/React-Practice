import React, {useState} from 'react'

function UseStateObject() {
    const [name, setName] = useState({firstName: "", lastName: ''})
    
    const firstNameChange=(event)=>{
        console.log("spread",{...name})
        console.log(event.target)
        setName({...name, firstName: event.target.value })
         //initially firstName was empty //user enter kusum will get store in firstname to access that write name.firstName
            //we uses spread operator to get all values from state and then update     
    }
    
    const lastNameChange=(kusum)=>{
        setName({...name, lastName: kusum.target.value })
    }
  console.log(name.firstName,"name")
    return (
        <form>
            <input 
            type="text" 
            value={name.firstName}   //value will store the value enter by the user in input box
            onChange={(kusum)=>firstNameChange(kusum)}                                
            />                                                            
             <br/>
             <h2>Your first name is - {name.firstName}</h2>
             <br/>

             <input 
             type="text" 
            value={name.lastName} 
            onChange={lastNameChange}
            />
            <br/>
            <h2>Your last name is - {name.lastName}</h2>
        </form>
    )
}
export default UseStateObject
