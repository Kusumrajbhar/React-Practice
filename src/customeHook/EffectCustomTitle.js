import React, { useEffect } from 'react'

export const EffectCustomTitle = (count) => {
    useEffect(()=>{
        document.title = `count ${count}`
    },[count])
}
