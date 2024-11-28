// import { Component } from "react";

// class Insert extends Component{
//     render(){
//         return(
//             <h1>Insert Employee file</h1>
            

//         )
// }
    
// }
// export default Insert
import { Component } from "react";
import Employee from "../model/Employee";
import axios from "axios";
class Insert extends Component{
    constructor(){
        super()
        this.state={
            empId:'',
            empName:'',
            empSalary:'',
            result:'',
            flag:false,
            eidError:'',
            empNameError:'',
            empSalaryError:''
        }
    }
  
    validateEid = (empId) =>{
        let reg=/^[0-9]+$/;
        if(empId===''){
            return "Eid is Required";
        }
        else if(!reg.test(empId)){
            return "Invalid eid"
        }
        else{
            return null;
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
    validateempSalary = (empSalary) =>{
        let reg=/^[0-9]+$/;
        if(empSalary===''){
            return "Emp Salary is Required";
        }
        else if(!reg.test(empSalary)){
            return "Invalid Emp Salary"
        }
        else{
            return null;
        }
    }
    changeId = (e) =>{
        this.setState({empId:e.target.value})
        let error=this.validateEid(this.state.eid);
        this.setState({empIdError:error})
    }
    changeName = (e) =>{
        this.setState({empName:e.target.value})
        let error1=this.validateempName(this.state.empName);
        this.setState({empNameError:error1})
    }
    changeSalary = (e) =>{
        this.setState({empSalary:e.target.value})
        let error2=this.validateempSalary(this.state.empSalary);
        this.setState({empSalaryError:error2})
    }

   
    handleSubmit = (e) =>{
        e.preventDefault()

        let error=this.validateEid(this.state.empId);
        this.setState({eidError:error})

        let error1=this.validateempName(this.state.empName);
        this.setState({empNameError:error1})

        let error2=this.validateempSalary(this.state.empSalary);
        this.setState({empSalaryError:error2})

        if(!error && !error1 && !error2){
            this.setState({flag:true})
             let employee =new Employee()
             employee.setId(this.state.empId)
             employee.setName(this.state.empName)
             employee.setSalary(this.state.empSalary)
             axios.post("http://localhost:1212/create-employee",employee)
             .then(() =>{
             document.getElementById("Result").innerHTML="<b> Object has been inserted Successfully</b>"
             })
             .catch((error) => {
                console.error("There was an error inserting the employee!", error);
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
                <label for="empid"><b>EMPLOYEE ID</b></label>
                <input type="text" class="form-control" name="eid" value={this.state.empId} onChange={this.changeId}></input>
                <br></br>
                <div><font color='red'><b>{this.state.eidError}</b></font></div>
                </div>
                <br></br>
                <div>
                <label for="empname"><b>EMPLOYEE NAME</b></label>
                <input type="text" class="form-control" name="ename" value={this.state.empName} onChange={this.changeName}></input>
                </div>
                <br></br>
                <div><font color='red'><b>{this.state.empNameError}</b></font></div>
                <br></br>
                <div>
                <label for="empsalary" ><b>EMPLOYEE SALARY</b></label>
                <input type="text" class="form-control"  name="esalary" value={this.state.empSalary} onChange={this.changeSalary}></input>
                <br></br>
                </div>
                <div><font color='red'><b>{this.state.empSalaryError}</b></font></div>
                <br></br>
                <button type="submit" className="btn btn-primary"onClick={this.handleSubmit} >INSERT</button> &nbsp;&nbsp;&nbsp;
                </form>
                <br></br>
                {this.state.flag ? 
                <table align="center">
                    <tr><th>Employee Id</th><th>Employee Name</th><th>Employee Salary</th></tr>
                    <tr><td>{this.state.empId}</td><td>{this.state.empName}</td><td>{this.state.empSalary}</td></tr>
                    <div id="Result" align="center"></div>
                </table>
                :''

                }
              </div>
        )
    }
}
export default Insert;

