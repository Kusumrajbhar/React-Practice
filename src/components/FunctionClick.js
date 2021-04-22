import react from 'react'

function FunctionClick(){
    const clickHandler = () => {
        alert('clicked');
    }                                            //don't use () with handler {clickHandler}
    return (
        <div>
            <button onClick = {clickHandler}>Click</button>  
        </div>
    )
}

export default FunctionClick