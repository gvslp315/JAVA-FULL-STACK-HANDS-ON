// function RenderIf(props){
//     let n = props.input;

import { Component } from "react"

//     //IF RENDERING CONDITION
// // if(n%2===0){
// //     return <Even input={n}/>
// // }
// // else{
// //     return <Odd input={n}/>
// // }


//         //LOGICAL AND OPERATOR

// // return(
// // <>

// // {n%2===0 && <Even input={n}></Even>}
// // {n%2 !==0 && <Odd input={n}></Odd>}
// // </>
// // )

// }

export default  class Teranary extends Component{
    constructor(props){
        super(props)
        this.state={
            num:'',
            flag:false,
            result:''

        }
    }
    changeNum = (e) =>{
        this.setState({num:e.target.value, flag : false});
        

    }

    handleResult =() =>{
    this.state.flag=true
    if(this.state.num%2===0){
        this.setState({result:"Even"})
    }
    else{
        this.setState({result:"Odd"})
    }

        

    }
    render(){
        return(
            <div>
            <label for="number">Enter the number</label>
            <input type="number" value={this.state.num} onChange={this.changeNum}></input>
            <br></br>

            <button type="submit" onClick={this.handleResult}>SUbmit</button>
            <br></br>
           {this.state.flag?
            <div>
            
            {this.state.result==="Even" ? <Even input={this.state.num}></Even> : <Odd input={this.state.num}></Odd>}
            
            </div>:''
           }
            </div>


        )
    }
}





function Odd(props){
    return(
        <b>{props.input}:is ODD</b>
    )
}
function Even(props){
    return(
        <b>{props.input}:is Even</b>
    )
}
//export default RenderIf;