import React from 'react'
//props coming from parentComp

function MemoCompo(props) {  //if we don't use memo this memo component will re-render even state not changing
    console.log('memo console') //hence we use React.memo() to avoid unneccery rendering
    //pure components in class and memo in function works the same
    return (
        <div>
            Memo {props.name}
        </div>
    )
}

export default React.memo(MemoCompo)  //this is the way of using memo


//by using memo first
//console will look like--
// *********Parent console********
// memo console
//(5)  *********Parent console********

//as in first rendering name changes from kusum to shraddha hense memo console executed
//bt after change name remains same hence memocom will not execute only parent will re render
//hence memo excutes only when there is change in state, prevents from unneccesary rendering
