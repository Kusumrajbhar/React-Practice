import { useState, useEffect } from "react";

const countCSS = {
    fontSize: "24px",
    fontWeight: "bold",
    color : "red"

}

const UseEffect = () => {
const [count, setCount] = useState(0);

return (
    <>
    <div style={{topMargin: "20px"}}>
    <button onClick={() => setCount(count+1)}>+</button>
    <div style={countCSS}>
    Count is {count};
    </div>
    <button onClick={() => setCount(count-1)}>-</button>
    </div>
    </>
)
}

export default UseEffect