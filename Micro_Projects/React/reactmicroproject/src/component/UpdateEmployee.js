// import { Component } from "react";

// class Update extends Component{
//     render(){
//         return(
//             <h1>UPDATE Employee file</h1>
            

//         )
// }
    
// }
// export default Update
import { Component } from "react";
import Employee from "../model/Employee";
import axios from "axios";



class Update extends Component{
    constructor(){
        super()
        this.state={
            eid:'',
            empName:'',
            empSalary:'',
            result:'',
            flag:false,
            eidError:'',
            empNameError:'',
            empSalaryError:''
        }
    } 
    validateEid = (eid) =>{
        let reg=/^[0-9]+$/;
        if(eid===''){
            return "Eid is Required";
        }
        else if(!reg.test(eid)){
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
        this.setState({eid:e.target.value})
        let error=this.validateEid(this.state.eid);
        this.setState({eidError:error})
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
        e.preventDefault();
        let error=this.validateEid(this.state.eid);
        this.setState({eidError:error})
        let error1=this.validateempName(this.state.empName);
        this.setState({empNameError:error1})
        let error2=this.validateempSalary(this.state.empSalary);
        this.setState({empSalaryError:error2})
        if(!error && !error1 && !error2){
            this.setState({flag:true})
            let employee =new Employee()
            employee.setId(this.state.eid)
            employee.setName(this.state.empName)
            employee.setSalary(this.state.empSalary)
            axios.put("http://localhost:3004/employees/"+this.state.eid,employee)
            .then(() =>{
            document.getElementById("Result").innerHTML="<b> Object has been updated Successfully</b>"
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
                <input type="text" class="form-control" value={this.state.eid} onChange={this.changeId}></input>
                <br></br>
                <div><font color='red'><b>{this.state.eidError}</b></font></div>
                </div>
                <br></br>
                <div>
                <label for="empname"><b>EMPLOYEE NAME</b></label>
                <input type="text" class="form-control"value={this.state.empName} onChange={this.changeName}></input>
                </div>
                <br></br>  
                <div><font color='red'><b>{this.state.empNameError}</b></font></div>
                <br></br>
                <div>
                <label for="empsalary" ><b>EMPLOYEE SALARY</b></label>
                <input type="text" class="form-control" value={this.state.empSalary} onChange={this.changeSalary}></input>
                <br></br>
                </div>
                <div><font color='red'><b>{this.state.empSalaryError}</b></font></div>
                <br></br>
                <button type="submit" className="btn btn-success"onClick={this.handleSubmit}>UPDATE</button> &nbsp;&nbsp;&nbsp;
                </form>
                <br></br>
                {this.state.flag ? 
                <table align="center">
                    <tr><th>Employee Id</th><th>Employee Name</th><th>Employee Salary</th></tr>
                    <tr><td>{this.state.eid}</td><td>{this.state.empName}</td><td>{this.state.empSalary}</td></tr>
                   <div id="Result"></div>
                </table>
                :''
                }
            </div>
        )
    }
}
export default Update;

