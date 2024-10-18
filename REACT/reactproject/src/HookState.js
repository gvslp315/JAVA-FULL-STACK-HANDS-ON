import { useState } from "react";

function Counter(){
    // const [count,setCoun]=useState(0)
    // const increment=()=>setCoun(count+1)
    // const decrement=()=>setCoun(count-1)
    // return(
    //     <div>
    //         <button onClick={increment}>Increment</button>
    //         <button onClick={decrement}>Decrement</button>
    //         <h2>{count}</h2>
    //     </div>

    // )

    const [name,setName]=useState('')
   


    
    return(
        <div>
            Enter the name<input type="text" onChange={(e)=>setName(e.target.value)}></input>
            

            <h1> Welcome -------{name}</h1>
        </div>
    )

}
export default Counter;