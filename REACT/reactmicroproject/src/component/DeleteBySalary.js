// import { Component } from "react";

// class DELETE extends Component{
//     render(){
//         return(
//             <h1>DELETE Employee file</h1>
            

//         )
// }
    
// }
// export default DELETE
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
import axios from "axios";
import '../App.css';
class DeleteBySalary extends Component{
    constructor(){
        super()
        this.state={
            eid:'',
            empName:'',
            empSalary:'',
            result:'',
            flag:false,
            empNameError:'',
            
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
        this.setState({empSalaryError:error});
        if(!error){
            this.setState({flag:true})
            axios.delete("http://localhost:1212/delete-employee-salary/"+this.state.empSalary)
            .then(() =>{
            document.getElementById("Result").innerHTML="<b> Object has been deleted Successfully</b>"
            })
            .catch((error) => {
               console.error("There was an error inserting the employee!", error);
           });
            e.preventDefault()   
    }
    }
    render(){
        return(
            <div width="80%" class="test" >
                <h1 align="center">EMPLOYEE MANAGEMENT SYSTEM</h1>
                <form class="form-horizontal"> 
                    <div className="form-group">
                <label for="empSalary"><b>EMPLOYEE Salary</b></label>
                <input type="text" class="form-control" value={this.state.empSalary} onChange={this.changeSalary}></input>
                <br></br>
                <div><font color='red'><b>{this.state.empSalaryError}</b></font></div>
                </div>
                <br></br>
               
            <nav align="center">   <button type="submit" className="btn btn-danger"onClick={this.handleSubmit}>DELETE By Salary</button></nav> 
             &nbsp;&nbsp;&nbsp;
                </form>
                <br></br>
                {this.state.flag ? 
                <table id="Result">   
                </table>
                :''
                }
            </div>
        )
    }
}
export default DeleteBySalary;

