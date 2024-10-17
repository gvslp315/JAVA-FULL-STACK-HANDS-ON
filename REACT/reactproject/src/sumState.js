import { Component } from "react";

class Sum extends Component{
    constructor(){
        super()
        this.state={
            n1:0,
            n2:0,
            sum:0
        }
        
    }
    render(){
        return(
            <b>
                <br></br>Enter n1
                <input type="text" value={this.state.n1} onChange={(e)=>this.setState({n1:e.target.value})}></input>
                <br></br>Enter n2
                <input type="text" value={this.state.n2} onChange={(e)=>this.setState({n2:e.target.value})}></input>
                <br></br><button onClick={()=>this.setState({sum:parseInt(this.state.n1)+parseInt(this.state.n2)})}>FIND SUM</button>
                <b>sum:{this.state.sum}</b>
            </b>
        )
    }
}
export default Sum;