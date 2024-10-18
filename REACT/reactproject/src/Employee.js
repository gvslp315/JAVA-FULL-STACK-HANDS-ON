import { Component } from "react";

class Employee extends Component{
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
        //this.Employee = this.Employee.bind(this);

    }
  
    validateEid = (eid) =>{
        let reg=/^[0-9]+$/;
        if(eid===''){
            return "eid is required";
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
            return "emp name is required";
        }
        else if(!reg.test(empName)){
            return "Invalid emp name"
        }
        else{
            return null;
        }

    }
    validateempSalary = (empSalary) =>{
        let reg=/^[0-9]+$/;
        if(empSalary===''){
            return "empSalary is required";
        }
        else if(!reg.test(empSalary)){
            return "Invalid empSlary"
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
        
    }
    }
    render(){
        return(
            <div align="center" width="80%">
                <form>
                <label for="empid">Employee ID</label>
                <input type="text" value={this.state.eid} onChange={this.changeId}></input>
                <br></br>
                <div><font color='red'><b>{this.state.eidError}</b></font></div>
                <br></br>

                <label for="empname">Employee NAME</label>
                <input type="text" value={this.state.empName} onChange={this.changeName}></input>
                <br></br>
                <div><font color='red'><b>{this.state.empNameError}</b></font></div>
                <br></br>
                <label for="empsalary">Employee SALARY</label>
                <input type="text" value={this.state.empSalary} onChange={this.changeSalary}></input>
                <br></br>
                <div><font color='red'><b>{this.state.empSalaryError}</b></font></div>
                <br></br>
                <button type="submit" onClick={this.handleSubmit}>SUBMIT</button>
                
                </form>
                <br></br>
                {this.state.flag ? 
                <div>
                    <br></br>Employee Id:{this.state.eid}
                    <br></br>Employee Name:{this.state.empName}
                    <br></br>Employee SALARY:{this.state.empSalary}
                </div>
                :''

                }
                

            </div>
        )
    }
}
export default Employee;

