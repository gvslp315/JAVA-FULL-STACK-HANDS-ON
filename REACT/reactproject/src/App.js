import { Component } from "react";









class App extends Component{
  render(){
    return(
      <div>
        Enter first number<input type="text"/><br></br>
        Enter Second  number<input type="text"/><br></br>
        <select>
          <option>select</option>
          <option>Addition</option>
          <option>Substraction</option>
          <option>Multiplication</option>
          <option>Division</option>
        </select><br></br>
        <button>calculate</button>
      </div>
    )
  }
}
// import './App.css';
// import Child3 from './Child3';

// function App() {
//   return (
//     <div class="Child">
//        <h3>I am parent component</h3>
//        <Child3></Child3>
        
//     </div>
//   );
// }

// function Child(){
//   return(
//     <div class="text">
//     <h1>this is child component</h1>
//     <Child1></Child1>
//     </div>
//   )
// }
//   function Child1(){
//     return(
//       <div class="child1">
//       <h1>this is child component</h1>
//       {/* <Child3></Child3> */}
//       </div>
//     )

// }

export default App;
