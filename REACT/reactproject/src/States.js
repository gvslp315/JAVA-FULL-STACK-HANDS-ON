import { Component } from "react";

class States extends Component{
    constructor(){
        super();
        this.state={
            email:"gvslp@gmail.com",
            location:"bengaluru"
        }
    }
    render(){
        return(
            <b>
                I am States component
                <br></br>Name:{this.props.name}
                <br></br>Email:{this.state.email}
                <br></br><Child location={this.state.location}></Child>
                <br></br>location:{this.state.location}
                <Child1></Child1>
            </b>
        )
    }

}
class Child1 extends States{
   
    render(){
        return (
            <b>
                <br>
                </br>I am a child1 Component
                <br></br>Location:{this.state.location}
            </b>
        )
    }
}

class Child extends Component{
    render(){
        return (
            <b>
                <br>
                </br>I am a Child Component
                <br></br>Loaction:{this.props.location}
            </b>
        )
    }
}

export default States