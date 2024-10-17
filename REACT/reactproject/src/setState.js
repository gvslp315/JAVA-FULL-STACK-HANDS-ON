import { Component } from "react";

class Set extends Component{
    constructor(){
        super()
        this.state={
            name:'ram'
        }
    }
    render(){
        return(
            <b>
                <br></br>Enter your name
                <input type="text" value={this.state.value} onChange={(e)=>this.setState({name:e.target.value})}></input>
                <br></br>Welcome {this.state.name}
            </b>
        )
    }
}
export default Set