import Employee from "./Employee";
//import Login from "./Login";

//import Life from "./classlifecycle";
//import Effect from "./HookEffect";

//import RenderIf from "./RenderIf";

//import Counter from "./HookState";


function App(){
 return(
  <Employee></Employee>
//<Login></Login>
//<RenderIf input="35"></RenderIf>
//{/* <Counter></Counter> */}

// <Life/> */
//<Effect></Effect>


 )
}




// import States from "./States";
// import Set from "./setState"
// import Sum from "./sumState"
// function App(){

//   return(
//     <>
//     <b>I am App Component</b>
//      <States name="prabhas"></States>
//      <Set></Set>
//      <Sum></Sum>
     

//     </>
//   )
// }









//   Props App component
// import Props from './Props';
// function App(props){
//   let name="Ramu"
//   return(
//     <div>
//       <h1>App component</h1>
//       <h2>User ID:{props.eid}</h2>
//       <Props name={name} email="gvslp@gmail.com"></Props>
//     </div>
//   )
// }

// //Default props
// Props.defaultProps={
//   salary:100000
// }











// import { Component } from "react";
// //Calculator Component

// class App extends Component{

//   constructor(props){
//     super(props);
//     this.state={
//       n1:0,
//       n2:0,
//       calculate:0,
//       option:''
//     }

//     this.Calculate = this.Calculate.bind(this);
//   }
//      Calculate(){
     
//       switch(this.state.option){
//         case "Addition":
//           this.setState({calculate : parseInt(this.state.n1) + parseInt(this.state.n2)});
//           break;
//         case "Substraction":
//           this.setState({calculate : this.state.n1 - this.state.n2});
//           break;
//         case "Multiplication":
//           this.setState({calculate : this.state.n1 * this.state.n2});
//           break;
//         case "Division":
//           this.setState({calculate : this.state.n1 / this.state.n2});
//           break;
//         default:
//             this.setState({ calculate:0 });


//       }

//     }
  
//   render(){
//     return(
//       <div>
//         Enter first number<input type="number" value={this.state.n1} onChange={(e)=>this.setState({n1: e.target.value})}/><br></br>
//         Enter Second  number<input type="number" value={this.state.n2} onChange={(e)=>this.setState({n2: e.target.value})}/><br></br>
//         <select onChange={(e)=>this.setState({option: e.target.value})}>
//           <option >select</option>
          
//           <option>Addition</option>
//           <option>Substraction</option>
//           <option>Multiplication</option>
//           <option>Division</option>
//         </select><br></br>
//         <button onClick={this.Calculate}>calculate</button>
//         <br></br>
//         <b>Calculaton={this.state.calculate}</b>
//       </div>
//     )
//   }
// }


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
