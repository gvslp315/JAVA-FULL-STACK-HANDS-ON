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
class DeleteByName extends Component{
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
        let error=this.validateempName(this.state.empName);
        this.setState({empNameError:error});
        if(!error){
            this.setState({flag:true})
            axios.delete("http://localhost:1212/delete-employee-name/"+this.state.empName)
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
                <label for="empName"><b>EMPLOYEE NAME</b></label>
                <input type="text" class="form-control" value={this.state.empname} onChange={this.changeName}></input>
                <br></br>
                <div><font color='red'><b>{this.state.empNameError}</b></font></div>
                </div>
                <br></br>
               
            <nav align="center">   <button type="submit" className="btn btn-danger"onClick={this.handleSubmit}>DELETE By Name</button></nav> 
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
export default DeleteByName;

