import {useState} from 'react'

function CounterCustome(initialCount, value) {
   
   const [count, setCount] = useState(initialCount)
   
   const increment = () => {
   setCount(preCount => preCount + value)
   }

   const decrement = () => {
    setCount(preCount => preCount - value)  
   }

return (
    [increment, decrement, count]
)
}

export default CounterCustome
