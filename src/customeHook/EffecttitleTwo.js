import React,{ useState } from 'react'
import { EffectCustomTitle } from './EffectCustomTitle'

export default function EffecttitleTwo() {

    const [count, setCount] = useState(10)
    EffectCustomTitle(count)

    return (
        <div>
             <button onClick={()=>setCount(count + 1)}>one {count}</button>
        </div>
    )
}
