import {Component} from "react";

class Props extends Component{
    render(){
        return(
            <div>
                <br></br>Name:{this.props.name}
                <br></br>Email:{this.props.email}
                <br></br>salary:{this.props.salary}
                <Child location="Hyderabad"></Child>
            </div>
        )
    }

}
function Child(props){
    return(
        <b>
            <br></br>
            I am child component
            <br></br>Location:{props.location}
        </b>
    )
}
export default Props;