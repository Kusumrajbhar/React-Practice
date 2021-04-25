import React, {useState, useEffect} from 'react'

function UseEffect2() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    //useEffect called after every render
    useEffect(() => {
        console.log('useEffect - updating document title')
        document.title = `you clicked ${count} times`
    },[count])    //we want that useEffect act only after count rendering bt i was render after name updation
                  //hence we provide it limitation i.e [count] now it will change only after count render
   
  
    const countIncrement = () => {
        setCount(count+1)
    }

    const setNameHandler = (event) => {
        //console.log(event)
        setName(event.target.value)    
    }
    
    return (
        <div>
            <input 
            type='text'
            value={name}
            onChange={setNameHandler} />
            <button onClick={countIncrement}>Count - {count}</button>
        </div>
    )
}

export default UseEffect2
