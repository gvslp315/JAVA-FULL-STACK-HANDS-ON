// import { Component } from "react";

import { Component } from "react";



// class Employee extends Component{
//     constructor(){
//         super()
//         this.state={
//             eid:'',
//             empName:'',
//             empSalary:'',
//             result:'',
//             flag:false,
//             eidError:'',
//             empNameError:'',
//             empSalaryError:''
           


//         }
//         //this.Employee = this.Employee.bind(this);

//     }
//     // const style = {
//     // background: 'url(https://www.bing.com/images/search?view=detailV2&ccid=MPA32ocb&id=C4172E3A2D887946D3C574F2EC0D7AF455BB944A&thid=OIP.MPA32ocb1_oMX7l5lFs-5gHaDC&mediaurl=https%3a%2f%2fcapstoneguide.com%2fwp-content%2fuploads%2f2020%2f05%2femployee.png&exph=227&expw=554&q=employee+management+system+background+images+hd&simid=608050130292520470&FORM=IRPRST&ck=F3A57B49964065D5A73E49EE26CE8903&selectedIndex=3&itb=0&adlt=STRICT);'
//     // };
//     validateEid = (eid) =>{
//         let reg=/^[0-9]+$/;
//         if(eid===''){
//             return "Eid is Required";
//         }
//         else if(!reg.test(eid)){
//             return "Invalid eid"
//         }
//         else{
//             return null;
//         }
//     }
//     validateempName = (empName) =>{
//         let reg=/^[a-zA-Z]+$/;
//         if(empName===''){
//             return "Emp Name is Required";
//         }
//         else if(!reg.test(empName)){
//             return "Invalid Emp Name"
//         }
//         else{
//             return null;
//         }

//     }
//     validateempSalary = (empSalary) =>{
//         let reg=/^[0-9]+$/;
//         if(empSalary===''){
//             return "Emp Salary is Required";
//         }
//         else if(!reg.test(empSalary)){
//             return "Invalid Emp Salary"
//         }
//         else{
//             return null;
//         }
//     }
//     changeId = (e) =>{
//         this.setState({eid:e.target.value})
//         let error=this.validateEid(this.state.eid);
//         this.setState({eidError:error})
//     }
//     changeName = (e) =>{
//         this.setState({empName:e.target.value})
//         let error1=this.validateempName(this.state.empName);
//         this.setState({empNameError:error1})
//     }
//     changeSalary = (e) =>{
//         this.setState({empSalary:e.target.value})
//         let error2=this.validateempSalary(this.state.empSalary);
//         this.setState({empSalaryError:error2})
//     }

   
//     handleSubmit = (e) =>{
//         e.preventDefault();

//         let error=this.validateEid(this.state.eid);
//         this.setState({eidError:error})

//         let error1=this.validateempName(this.state.empName);
//         this.setState({empNameError:error1})

//         let error2=this.validateempSalary(this.state.empSalary);
//         this.setState({empSalaryError:error2})

//         if(!error && !error1 && !error2){
//             this.setState({flag:true})
        
//     }
//     }
//     render(){
//         return(

//             <div width="80%" class="container mb-3 mt-3" >
               
//                 <h1 align="center">EMPLOYEE MANAGEMENT SYSTEM</h1>
//                 <form class="form-horizontal"> 
//                     <div className="form-group">
//                 <label for="empid"><b>EMPLOYEE ID</b></label>
//                 <input type="text" class="form-control" value={this.state.eid} onChange={this.changeId}></input>
//                 <br></br>
//                 <div><font color='red'><b>{this.state.eidError}</b></font></div>
//                 </div>
//                 <br></br>
//                 <div>
//                 <label for="empname"><b>EMPLOYEE NAME</b></label>
//                 <input type="text" class="form-control"value={this.state.empName} onChange={this.changeName}></input>
//                 </div>
//                 <br></br>
                
//                 <div><font color='red'><b>{this.state.empNameError}</b></font></div>
//                 <br></br>
//                 <div>
//                 <label for="empsalary" ><b>EMPLOYEE SALARY</b></label>
//                 <input type="text" class="form-control" value={this.state.empSalary} onChange={this.changeSalary}></input>
//                 <br></br>
//                 </div>
//                 <div><font color='red'><b>{this.state.empSalaryError}</b></font></div>
//                 <br></br>
//                 <button type="submit" className="btn btn-secondary"onClick={this.handleSubmit}>SUBMIT</button> &nbsp;&nbsp;&nbsp;
                
//                 <button className="btn btn-primary">INSERT</button>&nbsp;&nbsp;&nbsp;
//                 <button className="btn btn-success" >UPDATE</button>&nbsp;&nbsp;&nbsp;
//                 <button className="btn btn-danger">DELETE</button>&nbsp;&nbsp;&nbsp;
//                 <button className="btn btn-warning">FIND</button>&nbsp;&nbsp;&nbsp;
//                 <button className="btn btn-info">FIND ALL</button>&nbsp;&nbsp;&nbsp;
                
//                 </form>
//                 <br></br>
//                 {this.state.flag ? 
//                 <table >
//                     <tr><th>Employee Id</th><th>Employee Name</th><th>Employee Salary</th></tr>
//                     <tr><td>{this.state.eid}</td><td>{this.state.empName}</td><td>{this.state.empSalary}</td></tr>
                   
//                 </table>
//                 :''

//                 }
                

//             </div>
//         )
//     }
// }
// export default Employee;

import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import Insert from './InsertEmployee';
import Update from './UpdateEmployee';
import DELETE from './DeleteEmployee';
import Find from './FindEmployee';
import Findall from './FindAllEmployee';
import FindByName from "./FindEmployeeByName";
import DeleteByName from "./DeleteEmployeeByName";
import FindBySalary from "./FindBySalary";
import DeleteBySalary from "./DeleteBySalary";

class Employee extends Component{
    render(){
        return(
            <BrowserRouter>
            <div>
                <br></br>
                <br></br>
                    <nav align="center">  <Link class="btn btn-primary" to="/insert">INSERT</Link>&nbsp;&nbsp;
                        <Link class="btn btn-secondary"to="/update">UPDATE</Link>&nbsp;&nbsp;
                        <Link class="btn btn-danger"to="/delete">DELETE</Link>&nbsp;&nbsp;
                        <Link class="btn btn-info" to="/find">FIND</Link>&nbsp;&nbsp;
                        <Link class="btn btn-warning" to="/findall">FIND ALL</Link>&nbsp;&nbsp;
                        <Link class="btn btn-info" to="/findbyname">FIND by Name</Link>&nbsp;&nbsp;
                        <Link class="btn btn-danger" to="/deletebyname">Delete by Name</Link>&nbsp;&nbsp;
                        <Link class="btn btn-info" to="/findbysalary">Find by Salary</Link>&nbsp;&nbsp;
                        <Link class="btn btn-primary" to="/deletebysalary">Delete by Salary</Link>&nbsp;&nbsp;
                        </nav>  
                <hr/>
                <Routes>
                    <Route path="/insert" element={<Insert></Insert>}>
                    </Route>
                    <Route path="/update" element={<Update></Update>}>
                    </Route>
                    <Route path="/delete" element={<DELETE></DELETE>}>
                    </Route>
                    <Route path="/find" element={<Find></Find>}>
                    </Route>
                    <Route path="/findall" element={<Findall></Findall>}>

                    </Route>
                    <Route path="/findbyname" element={<FindByName></FindByName>}>
                    </Route>
                    <Route path="/deletebyname" element={<DeleteByName></DeleteByName>}>
                    </Route>
                    <Route path="/findbysalary" element={<FindBySalary></FindBySalary>}>
                    </Route>
                    <Route path="/deletebysalary" element={<DeleteBySalary></DeleteBySalary>}>
                    </Route>
                </Routes>
            </div>
            </BrowserRouter> 
        )
    }
}

export default Employee

