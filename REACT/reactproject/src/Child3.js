
import './Child3.css'

import {Component} from 'react'
function Child3(){
    return(
        <div>
        <h1 class="text">I am Child OF Parent component</h1>
        <Child></Child>
        </div>
    )
}
class Child extends Component{
    render(){
        return(
            <>
            <h1>this class chind4 component</h1>
            <Child1></Child1>
            </>

        )
    }

}
class Child1 extends Component{
    render(){
        return(
            <h1>this class chind1 component</h1>
        )
    }

}

export default Child3