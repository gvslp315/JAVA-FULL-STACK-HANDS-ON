// import { Component } from "react";

// class Find extends Component{
//     render(){
//         return(
//             <h1>FIND Employee file</h1>
            

//         )
// }
    
// }
// export default Find


import { Component } from "react";
import axios from "axios";
import '../App.css';

class FindBySalary extends Component{
    constructor(){
        super()
        this.state={
            eid:'',
            empName:'',
            empSalary:'',
           
            flag:false,
            empSalaryError:'',
            employees:[],
         message:"Object fecteched successfully"
        }
    }
    validateEmpSalary = (empSalary) =>{
        let reg=/^[0-9]+$/;
        if(empSalary===''){
            return "Empsalary is Required";
        }
        else if(!reg.test(empSalary)){
            return "Invalid empsalary"
        }
        else{
            return null;
        }
    }
   
    changeSalary= (e) =>{
        this.setState({empSalary:e.target.value})
        let error=this.validateEmpSalary(this.state.empSalary);
        this.setState({empSalaryError:error})
    }
   
    handleSubmit = (e) =>{
        e.preventDefault();
        let error=this.validateEmpSalary(this.state.empSalary);
        this.setState({empSalaryErrorr:error})
      
        if(!error){
            this.setState({flag:true})
            axios.get("http://localhost:1212/find-employee-salary/"+this.state.empSalary)
            .then((response) =>{
                console.log(response.data);      
                this.setState({employees: response.data})
            })
            .catch((error) => {
               console.error("There was an error find the employee!", error);
           });
            e.preventDefault();  
    }   
    }
    render(){
        return(
            <div width="80%" class="test" > 
                <h1 align="center">EMPLOYEE MANAGEMENT SYSTEM</h1>
                <form class="form-horizontal"> 
                    <div className="form-group">
                <label for="empsalary"><b>EMPLOYEE Salary</b></label>
                <input type="text" class="form-control" value={this.state.empSalary} onChange={this.changeSalary}></input>
                <br></br>
                <div><font color='red'><b>{this.state.empSalaryError}</b></font></div>
                </div>              
                <br></br>
               <nav  align="center"> <button type="submit" className="btn btn-success"onClick={this.handleSubmit}>FIND by Salary</button></nav> &nbsp;&nbsp;&nbsp;
                </form>
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
export default FindBySalary;

