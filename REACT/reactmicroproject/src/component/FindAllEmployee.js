// import { Component } from "react";

// class Findall extends Component{
//     render(){
//         return(
//             <h1>Find ALL Employee file</h1>
            

//         )
// }
    
// }
// export default Findall

import { Component } from "react";
import axios from "axios";
import '../App.css';
class Findall extends Component{
    constructor(){
        super()
        this.state={
           employees:[],
           flag:false
        }
    }
    handleSubmit = () =>{
        this.state.flag=true
        axios.get("http://localhost:1212/readall-employee")
        .then((response) =>{
            console.log(response.data);
            this.setState({employees: response.data})
        })
        .catch((error) => {
           console.error("There was an error find the employee!", error);
       });    
    }
    render(){
        return(

            <div width="80%" class="test" align="center">
                <h1 align="center"> EMPLOYEE MANAGEMENT SYSTEM</h1>
                <br></br>
                
                <button type="submit" className="btn btn-info"onClick={this.handleSubmit}>FIND ALL</button> &nbsp;&nbsp;&nbsp;
                <br></br>
                {this.state.flag ? 
                <table class="table"border="4" style={{ marginTop: "20px", width: "100%" }}>
              <thead>
                <tr>
                  <th>Employee ID</th>
                  <th>Employee Name</th>
                  <th>Employee Salary</th>
                </tr>
              </thead>
              <tbody>
                {this.state.employees.map((employee) => (
                  <tr key={employee.empId}>
                    <td>{employee.empId}</td>
                    <td>{employee.empName}</td>
                    <td>{employee.empSalary}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            :''}
            </div>
        )
    }
}
export default Findall;

