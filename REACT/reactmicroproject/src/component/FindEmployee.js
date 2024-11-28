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

class Find extends Component{
    constructor(){
        super()
        this.state={
            eid:'',
            empName:'',
            empSalary:'',
           
            flag:false,
            eidError:'',
            empNameError:'',
            empSalaryError:'',
            result:[],
         message:"Object fecteched successfully"
        }
        //this.Employee = this.Employee.bind(this);
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
        this.setState({eidError:error})
      
        if(!error){
            this.setState({flag:true})
            axios.get("http://localhost:1212/read-employee/"+this.state.eid)
            .then((response) =>{
                console.log(response.data);      
                this.setState({result: response.data})
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
                <label for="empid"><b>EMPLOYEE ID</b></label>
                <input type="text" class="form-control" value={this.state.eid} onChange={this.changeId}></input>
                <br></br>
                <div><font color='red'><b>{this.state.eidError}</b></font></div>
                </div>              
                <br></br>
               <nav  align="center"> <button type="submit" className="btn btn-success"onClick={this.handleSubmit}>FIND</button></nav> &nbsp;&nbsp;&nbsp;
                </form>
                <br></br>
                {this.state.flag ?  
                <div align="center" id="Result"> 
                       <h3>Employee Id:{this.state.result.empId}</h3>
                       <h3>Employee Id:{this.state.result.empName}</h3>
                       <h3>Employee Id:{this.state.result.empSalary}</h3>
                       <h3>{this.state.message}</h3>
                </div>
                :''
                }
            </div>
        )
    }
}
export default Find;

