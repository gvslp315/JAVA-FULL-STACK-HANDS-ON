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
// import Employee from "../model/Employee";
import axios from "axios";
import '../App.css';
class DELETE extends Component{
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
   
    changeId = (e) =>{
        this.setState({eid:e.target.value})
        let error=this.validateEid(this.state.eid);
        this.setState({eidError:error})
    }
  
    handleSubmit = (e) =>{
        e.preventDefault();
        let error=this.validateEid(this.state.eid);
        this.setState({eidError:error});
        if(!error){
            this.setState({flag:true})
            axios.delete("http://localhost:1212/delete-employee/"+this.state.eid)
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
                <label for="empid"><b>EMPLOYEE ID</b></label>
                <input type="text" class="form-control" value={this.state.eid} onChange={this.changeId}></input>
                <br></br>
                <div><font color='red'><b>{this.state.eidError}</b></font></div>
                </div>
                <br></br>
               
                <button type="submit" className="btn btn-danger"onClick={this.handleSubmit}>DELETE</button> &nbsp;&nbsp;&nbsp;
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
export default DELETE;

