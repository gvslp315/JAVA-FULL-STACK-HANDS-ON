import { Component } from "react";

export default class Life extends Component{
    constructor(){
        super()
        this.state={
            Count:0
        }
    }
    componentDidMount(){
        document.getElementById("Resultdiv").innerHTML="Component Did Mount menthod :" +this.state.Count

    }
    
    componentDidUpdate(){
        document.getElementById("Resultdiv").innerHTML="Component Did Update menthod :" +this.state.Count

    }
    render(){
        return(
            <div>
                <div id="Resultdiv">

                </div>
                <button onClick={()=>this.setState({Count:this.state.Count+1})}>Click Me</button>
                <b> Count:{this.state.Count}</b>

            </div>

        )
    }
}