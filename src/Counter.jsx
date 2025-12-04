import { useState } from "react";

function Counter()
{
    let [counter,setCounter]=useState(0);
    return(
        <><h1> the counter value:{counter}</h1>
        <button onClick={() =>setCounter(counter +1)}>increment</button>
        <button onClick={() =>setCounter(counter -1)} disabled={counter===0}>decrement</button></>
    );

}
export default Counter;