
import './App.css';

// import Insert from './component/InsertEmployee';
// import Update from './component/UpdateEmployee';
// import DELETE from './component/DeleteEmployee';
// import Find from './component/FindEmployee';
// import Findall from './component/FindAllEmployee';
import Employee from './component/EmployeeHome';
function App() {
  return (
    
    <div  >
     {/* // <h1 align="center">WELCOME TO REACT JS 
      </h1> */}
      <Employee></Employee>
      {/* <Insert></Insert>
      <DELETE></DELETE>
      <Find></Find>
      <Findall></Findall>
      <Update></Update> */}

    </div>


  );
}

//REACT CSS STYLING
// function App(){
//   let mystyle={color:'aqua',background:"black"}
//   return(
//     <div>
//       <h1 style={{color:'red',background:'blue'}}>CSS INLINE STYLING</h1>
//       <h1 style={mystyle}>CSS STYLING JAVA SCRIPT OBJECT</h1>
//       <h1 class="test">CSS STYLE SHEET</h1>

//     </div>
//   )
// }

export default App;
