import { useEffect, useState } from "react";

export default function Effect(){
    const [count,setCount]=useState(0);

    useEffect(
        ()=>{
            document.getElementById("Resultdiv").innerHTML=`you clicked ${count} timmes;`;
        }
    )
    return(
        <div>
            <div id="Resultdiv">

            </div>
            <button onClick={()=> setCount(count+1)}>lClick ME</button>
            <br></br>
            {count}
        </div>
    )
}