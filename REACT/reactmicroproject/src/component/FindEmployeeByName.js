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

class FindByName extends Component{
    constructor(){
        super()
        this.state={
            empId:'',
            empName:'',
            empSalary:'',
            flag:false,
            empNameError:'',  
            employees:[],
         message:"Object fecteched successfully"
        }
    }
    
    validateempName = (empName) =>{
        let reg=/^[a-zA-Z]+$/;
        if(empName===''){
            return "Emp Name is Required";
        }
        else if(!reg.test(empName)){
            return "Invalid Emp Name"
        }
        else{
            return null;
        }

    }
   
   
    changeName = (e) =>{
        this.setState({empName:e.target.value})
        let error1=this.validateempName(this.state.empName);
        this.setState({empNameError:error1})
    }
   
    handleSubmit = (e) =>{
        e.preventDefault();
        let error1=this.validateempName(this.state.empName);
        this.setState({empNameError:error1})
      
        if(!error1){
            this.setState({flag:true})
            axios.get("http://localhost:1212/find-employee-name/"+this.state.empName)
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
                <label for="empName"><b>EMPLOYEE Name</b></label>
                <input type="text" class="form-control" value={this.state.empName} onChange={this.changeName}></input>
                <br></br>
                
                </div>              
                <br></br>
               <nav  align="center"> <button type="submit" className="btn btn-success"onClick={this.handleSubmit}>FIND By Name</button></nav> &nbsp;&nbsp;&nbsp;
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
export default FindByName;

