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
    // const style = {
    // background: 'url(https://www.bing.com/images/search?view=detailV2&ccid=MPA32ocb&id=C4172E3A2D887946D3C574F2EC0D7AF455BB944A&thid=OIP.MPA32ocb1_oMX7l5lFs-5gHaDC&mediaurl=https%3a%2f%2fcapstoneguide.com%2fwp-content%2fuploads%2f2020%2f05%2femployee.png&exph=227&expw=554&q=employee+management+system+background+images+hd&simid=608050130292520470&FORM=IRPRST&ck=F3A57B49964065D5A73E49EE26CE8903&selectedIndex=3&itb=0&adlt=STRICT);'
    // };
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
        e.preventDefault()

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
             axios.post("http://localhost:3004/employees",employee)
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
                <input type="text" class="form-control" name="eid" value={this.state.eid} onChange={this.changeId}></input>
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
                    <tr><td>{this.state.eid}</td><td>{this.state.empName}</td><td>{this.state.empSalary}</td></tr>
                    <div id="Result" align="center"></div>
                </table>
                :''

                }
                
                

            </div>
        )
    }
}
export default Insert;

