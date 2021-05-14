import React, {useState} from 'react'
import { EffectCustomTitle } from './EffectCustomTitle'

export default function EffectTitleOne() {

const [count, setCount] = useState(0)
EffectCustomTitle(count)
    return (
        <div>
            <button onClick={()=>setCount(count + 1)}>one {count}</button>
        </div>
    )
}
